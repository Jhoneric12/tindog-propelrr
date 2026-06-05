import dayjs from "dayjs";
import { useMemo } from "react";

export const useSearch = (data, keys, query) => {
  const filtered = useMemo(() => {
    return data?.filter((event) =>
      keys?.some((key) => {
        if (dayjs(event[key]).isValid()) {
          const formatted = dayjs(event[key]).format("MMMM D, YYYY HH:mm A");
          return formatted.toUpperCase().includes(query.toUpperCase());
        }
        return String(event[key])?.toUpperCase().includes(query.toUpperCase());
      })
    );
  }, [data, keys, query]);
  return filtered;
};
