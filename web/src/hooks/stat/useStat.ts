import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { dateDataState } from "recoil/stat";

const useStat = () => {
  const dateData = useRecoilValue(dateDataState);

  const requestStat = useCallback(async () => {
    try {
      // const { data } = await postStat(dateData.startDate, dateData.endDate)
    } catch {}
  }, []);

  return { requestStat };
};

export default useStat;
