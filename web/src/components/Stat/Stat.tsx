import { useCallback, useState } from "react";
import MonthStat from "./StatItem/MonthStat";
import WeekStat from "./StatItem/WeekStat";
import DayStat from "./StatItem/DayStat";

import "./Stat.scss";

const Stat = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleMenu = useCallback((id: number) => {
    setActiveTab(id);
  }, []);

  const component: any = {
    0: <MonthStat />,
    1: <WeekStat />,
    2: <DayStat />,
  };

  return (
    <div className="stat">
      <div className="stat-tab">
        <div
          onClick={() => handleMenu(0)}
          className={
            activeTab === 0 ? "stat-tab-item isMainTab" : "stat-tab-item"
          }
        >
          월간
        </div>
        <div
          onClick={() => handleMenu(1)}
          className={
            activeTab === 1 ? "stat-tab-item isMainTab" : "stat-tab-item"
          }
        >
          주간
        </div>
        <div
          onClick={() => handleMenu(2)}
          className={
            activeTab === 2 ? "stat-tab-item isMainTab" : "stat-tab-item"
          }
        >
          일간
        </div>
      </div>
      <div className="stat-content">{component[activeTab]}</div>
    </div>
  );
};

export default Stat;
