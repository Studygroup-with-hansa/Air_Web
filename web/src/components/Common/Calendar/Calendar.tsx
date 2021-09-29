import { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { useRecoilState, useRecoilValue } from "recoil";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";
import { activeTabState, dateDataState, statDateState } from "recoil/stat";
import arrow from "assets/arrow.svg";

import "./Calendar.scss";

const Calendar = ({ type }: any): JSX.Element => {
  const activeTab = useRecoilValue<number>(activeTabState);
  const [getMoment, setMoment] = useState(moment());
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);
  const [weekDate, setWeekDate] = useState({
    startDay: "",
    endDay: "",
  });
  const [dateData, setDateData] = useRecoilState<IDateDataTypes>(dateDataState);
  let startDate: string[] = ["", "", ""];
  let endDate: string[] = ["", "", ""];

  const dayWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const today = getMoment;

  const isSun = useCallback(
    (activeDate: Moment) => {
      setWeekDate((prevDate) => ({
        ...prevDate,
        startDay: activeDate.startOf("week").format("YYYY.MM.DD"),
        endDay: activeDate.startOf("week").add(6, "days").format("YYYY.MM.DD"),
      }));
    },
    [statDate.activeDate]
  );

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const handleDate = useCallback(
    (date: string) => {
      setStatDate({
        activeDate: date,
        dateArray: date.split("."),
      });
      console.log(date);
      // setDateData({
      //   startDate: startDate[activeTab],
      //   endDate: endDate[activeTab],
      // });
      // console.log(dateData.startDate, dateData.endDate, "hi");
    },
    [statDate.activeDate]
  );
  const pushDate = useCallback((date: Moment) => {
    console.log(date.format("YYYY.MM.DD"));
    startDate.splice(2, 1, date.format("YYYY.MM.DD"));
    endDate.splice(2, 1, date.format("YYYY.MM.DD"));
    startDate.splice(0, 1, moment(date).startOf("month").format("YYYY.MM.DD"));
    startDate.splice(1, 1, date.startOf("week").format("YYYY.MM.DD"));
    endDate.splice(0, 1, moment(date).endOf("month").format("YYYY.MM.DD"));
    endDate.splice(
      1,
      1,
      date.startOf("week").add(6, "days").format("YYYY.MM.DD")
    );
    console.log(startDate, endDate);
    // moment(days).endOf("month").format("YYYY.MM.DD"))
    // weekDate.endDay
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
                        onClick={() => {
                          handleDate(days.format("YYYY.MM.DD"));
                          isSun(days);
                          pushDate(days);
                          // pushDate(
                          //   moment(days).startOf("month").format("YYYY.MM.DD"),
                          //   moment(days).endOf("month").format("YYYY.MM.DD")
                          // );
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

                  case "week":
                    return (
                      <td
                        key={index}
                        onClick={() => {
                          handleDate(days.format("YYYY.MM.DD"));
                          isSun(days);
                          pushDate(days);
                        }}
                        className={
                          statDate.activeDate === days.format("YYYY.MM.DD")
                            ? "date active"
                            : weekDate.startDay <= days.format("YYYY.MM.DD") &&
                              weekDate.endDay >= days.format("YYYY.MM.DD")
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
                        onClick={() => {
                          handleDate(days.format("YYYY.MM.DD"));
                          isSun(days);
                          pushDate(days);

                          // pushDate(
                          //   days.format("YYYY.MM.DD"),
                          //   days.format("YYYY.MM.DD")
                          // );
                        }}
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
