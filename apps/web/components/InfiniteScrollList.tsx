import { useInfiniteScroll } from "@repo/hooks";
import { useEffect, useRef } from "react";

const InfiniteScrollList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteScroll();
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (status === "error") return <p>Error fetching data.</p>;

  return (
    <div>
      {data?.pages.flat().map((post) => (
        <div
          key={post.id}
          style={{ padding: "20px", borderBottom: "1px solid #ddd" }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <div
        ref={loaderRef}
        style={{ height: "20px", background: "transparent" }}
      />
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default InfiniteScrollList;
