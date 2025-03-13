const API_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await fetch(`${API_URL}?_page=${pageParam}&_limit=${PAGE_SIZE}`);
  return res.json();
};

export const useInfiniteScroll = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
  });
};
