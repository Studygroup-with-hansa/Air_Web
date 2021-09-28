import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { statDateState } from "recoil/stat";
import { IStatDateTypes } from "types/stat.types";

const useStatItem = () => {
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);
  const dateArray = statDate.activeDate.split(".");

  const monthStat = useCallback(() => {
    console.log("hi");

    setStatDate((prevDate) => ({
      ...prevDate,
      startDate: `${dateArray[0]}.${dateArray[1]}.01`,
      endDate: String(
        new Date(parseInt(dateArray[0]), parseInt(dateArray[1]), 0).getDate()
      ),
    }));
    console.log(statDate.startDate, statDate.endDate);
  }, [statDate.activeDate]);
  const weekStat = useCallback(() => {}, []);
  const dayStat = useCallback(() => {}, []);

  const dateCycle = useCallback((type: number) => {
    type === 0 ? monthStat() : type === 1 ? weekStat() : dayStat();
  }, []);

  return { dateCycle };
};

export default useStatItem;
