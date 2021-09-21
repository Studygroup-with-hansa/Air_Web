import moment from "moment";
import { useCallback, useState } from "react";

import "./Calendar.scss";

const Calendar = (): JSX.Element => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

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

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <td key={index} style={{ backgroundColor: "red" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <td key={index} style={{ backgroundColor: "gray" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
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
        <button
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          &lt;
        </button>
        <span>{today.format("YYYY년 M월")}</span>
        <button
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          &gt;
        </button>
      </div>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
