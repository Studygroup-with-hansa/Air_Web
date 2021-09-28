import { useCallback, useState } from "react";
import moment from "moment";
import { useRecoilState, useRecoilValue } from "recoil";
import { IStatDateTypes } from "types/stat.types";
import { activeTabState, statDateState } from "recoil/stat";
import arrow from "assets/arrow.svg";
import useStatItem from "hooks/Stat/useStatItem";

import "./Calendar.scss";

const Calendar = ({ type }: any): JSX.Element => {
  const [getMoment, setMoment] = useState(moment());
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);

  const dayWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const today = getMoment;

  const { weekCycle } = useStatItem();

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const handleDate = useCallback(
    (date: string) => {
      setStatDate((prevDate) => ({
        ...prevDate,
        activeDate: date,
        dateArray: date.split("."),
      }));
    },
    [statDate.activeDate]
  );

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
                  <td key={index} className="date deactivate">
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                switch (type) {
                  case "month":
                    return (
                      <td
                        key={index}
                        onClick={() => handleDate(days.format("YYYY.MM.DD"))}
                        className={
                          statDate.activeDate === days.format("YYYY.MM.DD")
                            ? "date active"
                            : statDate.dateArray[1] === today.format("MM")
                            ? "date dateCycle"
                            : "date"
                        }
                      >
                        <span>{days.format("D")}</span>
                      </td>
                    );

                  case "week":
                    return (
                      <td
                        key={index}
                        // onClick={() => handleDate(days.format("YYYY.MM.DD"))}
                        onClick={() => {
                          handleDate(days.format("YYYY.MM.DD"));
                          weekCycle(statDate.dateArray[2]);
                        }}
                        className={
                          statDate.activeDate === days.format("YYYY.MM.DD")
                            ? "date active"
                            : statDate.dateArray[1] === today.format("MM")
                            ? "date dateCycle"
                            : "date"
                        }
                      >
                        <span>{days.format("D")}</span>
                      </td>
                    );

                  case "day":
                    return (
                      <td
                        key={index}
                        onClick={() => handleDate(days.format("YYYY.MM.DD"))}
                        className={
                          statDate.activeDate === days.format("YYYY.MM.DD")
                            ? "date active"
                            : "date"
                        }
                      >
                        <span>{days.format("D")}</span>
                      </td>
                    );
                }
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
        <th>
          {dayWeek.map((data) => {
            return (
              <td>
                <span>{data}</span>
              </td>
            );
          })}
        </th>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
