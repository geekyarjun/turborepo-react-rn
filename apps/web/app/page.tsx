"use client";

import { Button } from "@repo/ui";

import styles from "../styles/index.module.css";

// apps/web/pages/index.tsx
import { useInfiniteScroll } from "@repo/hooks";
import { FixedSizeList as List } from "react-window";
import { useRef, useEffect } from "react";
import InfiniteScrollList from "../components/InfiniteScrollList";

// export default function Home() {
//   const { data, fetchMore, loading } = useInfiniteScroll();
//   const listRef = useRef(null);

//   // Detect when user reaches bottom and load more
//   useEffect(() => {
//     const onScroll = () => {
//       if (!listRef.current) return;
//       const { scrollTop, scrollHeight, clientHeight } = listRef.current;
//       if (scrollTop + clientHeight >= scrollHeight - 10) {
//         fetchMore();
//       }
//     };

//     listRef.current?.addEventListener("scroll", onScroll);
//     return () => listRef.current?.removeEventListener("scroll", onScroll);
//   }, [fetchMore]);

//   return (
//     <div style={{ height: "80vh", overflow: "auto" }} ref={listRef}>
//       <List height={600} itemCount={data.length} itemSize={50} width={"100%"}>
//         {({ index, style }) => (
//           <div style={style}>
//             <h4>{data[index]?.title}</h4>
//           </div>
//         )}
//       </List>
//       {loading && <p>Loading...</p>}
//     </div>
//   );
// }

export default function Home() {
  return <InfiniteScrollList />;
}
