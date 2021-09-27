import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { statDateState } from "recoil/stat";
import { IStatDateTypes } from "types/stat.types";

const useStatItem = () => {
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);
  var monthLastDate = String(
    new Date(
      parseInt(statDate.dateArray[0]),
      parseInt(statDate.dateArray[1]),
      0
    ).getDate()
  );

  const MonthStat = useCallback(() => {
    console.log("hi");

    setStatDate((prevDate) => ({
      ...prevDate,
      startDate: `${statDate.dateArray[0]}.${statDate.dateArray[1]}.01`,
      endDate: monthLastDate,
    }));
  }, []);
  const WeekStat = useCallback(() => {}, []);
  const dayStat = useCallback(() => {}, []);

  return { MonthStat };
};

export default useStatItem;
