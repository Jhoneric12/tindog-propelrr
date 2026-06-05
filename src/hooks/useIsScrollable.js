import { useEffect, useState } from "react";

export const useIsScrollable = (ref) => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const scrollRef = ref.current;
    if (scrollRef) {
      const scrollY = scrollRef.scrollHeight > scrollRef.clientHeight;
      const scrollX = scrollRef.scrollWidth > scrollRef.clientWidth;
      setIsScrollable(scrollY || scrollX);
    }
  }, []);

  return isScrollable;
};
