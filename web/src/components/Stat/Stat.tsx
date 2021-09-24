import { useCallback } from "react";
import { useRecoilState } from "recoil";
import MonthStat from "./StatItem/MonthStat";
import WeekStat from "./StatItem/WeekStat";
import DayStat from "./StatItem/DayStat";
import StatItem from "./StatItem/StatItem";
import { activeTabState } from "recoil/stat";

import "./Stat.scss";

const Stat = (): JSX.Element => {
  const [activeTab, setActiveTab] = useRecoilState<number>(activeTabState);

  const handleMenu = useCallback((id: number) => {
    setActiveTab(id);
  }, []);

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
      <div className="stat-content">
        <StatItem />
      </div>
    </div>
  );
};

export default Stat;
