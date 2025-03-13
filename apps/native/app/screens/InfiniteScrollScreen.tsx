import { useInfiniteScroll } from "@repo/hooks";
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { useCallback } from "react";

const InfiniteScrollScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteScroll();

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { layoutMeasurement, contentOffset, contentSize } =
        event.nativeEvent;
      if (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - 50
      ) {
        if (hasNextPage) fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  if (isLoading) return <Text>Loading...</Text>;
  if (status === "error") return <Text>Error fetching data.</Text>;

  return (
    <FlatList
      data={data?.pages.flat()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
      onScroll={handleScroll}
      scrollEventThrottle={16} // Optimize performance
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
    />
  );
};

export default InfiniteScrollScreen;
