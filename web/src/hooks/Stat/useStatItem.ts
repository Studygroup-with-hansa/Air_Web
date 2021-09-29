import { useRecoilState, useRecoilValue } from "recoil";
import { statDateState } from "recoil/stat";
import { IStatDateTypes } from "types/stat.types";
import { useCallback } from "react";
import { Moment } from "moment";

const useStatItem = () => {
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);

  const isSun = useCallback(
    (activeDate: Moment) => {
      setStatDate((prevDate) => ({
        ...prevDate,
        startDate: activeDate.startOf("week").format("YYYY.MM.DD"),
        endDate: activeDate.startOf("week").add(6, "days").format("YYYY.MM.DD"),
      }));
      // setStatDate({
      //   ...statDate,
      //   startDate: startDate,
      //   endDate: endDate,
      // });
      console.log("startDate", statDate.startDate);
      console.log("endDate", statDate.endDate);
    },
    [statDate.activeDate]
  );

  return { isSun };
};

export default useStatItem;
