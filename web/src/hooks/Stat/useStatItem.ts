import { useRecoilValue } from "recoil";
import { statDateState } from "recoil/stat";
import { IStatDateTypes } from "types/stat.types";
import { useCallback, useState } from "react";

const useStatItem = () => {
  const statDate = useRecoilValue<IStatDateTypes>(statDateState);

  const weekCycle = useCallback((activeDate: string) => {
    console.log(activeDate);
  }, []);

  return { weekCycle };
};

export default useStatItem;
