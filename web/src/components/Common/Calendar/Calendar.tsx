import moment from "moment";
import { useCallback, useState } from "react";
import arrow from "assets/arrow.svg";

import "./Calendar.scss";

const Calendar = (): JSX.Element => {
  const [getMoment, setMoment] = useState(moment());
  const [activeDate, setActiveDate] = useState<string>(""); //recoil로 저장
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const handleDate = useCallback((date: string) => {
    setActiveDate(date);
  }, []);
  const calendarArr = () => {
    let result: JSX.Element[] = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (days.format("MM") !== today.format("MM")) {
                return (
                  <td key={index} className="deactivate">
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td
                    key={index}
                    onClick={() => handleDate(days.format("D"))}
                    className={
                      activeDate === days.format("D") ? "active date" : "date"
                    }
                  >
                    <span>{days.format("D")}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  return (
    <div className="calendar">
      <div className="calendar-control">
        <img
          src={arrow}
          alt="arrow"
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        />
        <span>{today.format("YYYY년 MM월")}</span>
        <img
          src={arrow}
          alt="arrow"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        />
      </div>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;