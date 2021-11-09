import { useCallback } from "react";
import { getRank } from "lib/api/rank/rank.api";

const useRank = () => {
  const responseRank = useCallback(async () => {
    try {
      const { data } = await getRank();

      return data;
    } catch {}
  }, []);

  return { responseRank };
};

export default useRank;
