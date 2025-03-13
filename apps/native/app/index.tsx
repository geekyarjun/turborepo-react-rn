import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView } from "react-native";
import InfiniteScrollScreen from "./screens/InfiniteScrollScreen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <InfiniteScrollScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
