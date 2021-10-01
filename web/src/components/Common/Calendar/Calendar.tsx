import { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IDateDataTypes, IDateTypes, IStatDateTypes } from "types/stat.types";
import { dateDataState, statDateState } from "recoil/stat";
import arrow from "assets/arrow.svg";
import useStatItem from "hooks/stat/useStatItem";

import "./Calendar.scss";

const Calendar = (type: { type: string }): JSX.Element => {
  const { calendargetGoal } = useStatItem();

  const [getMoment, setMoment] = useState<Moment>(moment());
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);
  const [weekDate, setWeekDate] = useState<IDateTypes>({
    startDate: moment().startOf("week").format("YYYY.MM.DD"),
    endDate: moment().endOf("week").format("YYYY.MM.DD"),
  });
  const setDateData = useSetRecoilState<IDateDataTypes>(dateDataState);
  const dayWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  let startDate: string[] = ["", "", String(getMoment)];
  let endDate: string[] = ["", "", String(getMoment)];
  let className: string = "";

  const firstWeek: number = getMoment.clone().startOf("month").week();
  const lastWeek: number =
    getMoment.clone().endOf("month").week() === 1
      ? 53
      : getMoment.clone().endOf("month").week();

  const handleDate = useCallback(
    (date: Moment) => {
      if (statDate.activeDate === date.format("YYYY.MM.DD")) {
        return;
      }
      setStatDate({
        activeDate: date.format("YYYY.MM.DD"),
        dateArray: date.format("YYYY.MM.DD").split("."),
      });
      startDate.splice(2, 1, date.format("YYYY.MM.DD"));
      endDate.splice(2, 1, date.format("YYYY.MM.DD"));
      startDate.splice(
        0,
        1,
        moment(date).startOf("month").format("YYYY.MM.DD")
      );
      startDate.splice(1, 1, date.startOf("week").format("YYYY.MM.DD"));
      endDate.splice(0, 1, moment(date).endOf("month").format("YYYY.MM.DD"));
      endDate.splice(
        1,
        1,
        date.startOf("week").add(6, "days").format("YYYY.MM.DD")
      );
      setDateData({
        startDate: startDate,
        endDate: endDate,
      });
      setWeekDate((prevDate) => ({
        ...prevDate,
        startDay: date.startOf("week").format("YYYY.MM.DD"),
        endDay: date.endOf("week").format("YYYY.MM.DD"),
      }));
    },
    [statDate.activeDate]
  );

  const dateArr = (index: number, days: Moment, type: string) => {
    switch (type) {
      case "month":
        className =
          statDate.activeDate === days.format("YYYY.MM.DD")
            ? "date active"
            : statDate.dateArray[1] === getMoment.format("MM")
            ? "date dateCycle"
            : "date";
        break;
      case "week":
        className =
          statDate.activeDate === days.format("YYYY.MM.DD")
            ? "date active"
            : weekDate.startDate <= days.format("YYYY.MM.DD") &&
              weekDate.endDate >= days.format("YYYY.MM.DD")
            ? "date dateCycle"
            : "date";
        break;
      case "day":
        className =
          statDate.activeDate === days.format("YYYY.MM.DD")
            ? "date active"
            : "date";
        break;
    }
    const percentDiv = (date: string) => {
      if (className === "date dateCycle") {
        return {
          __html: `${calendargetGoal(date)}%`,
        };
      } else if (className === "date active") {
        return {
          __html: `${calendargetGoal(date)}%`,
        };
      } else {
        return {
          __html: "",
        };
      }
    };

    return (
      <td
        key={index}
        onClick={() => {
          handleDate(days);
        }}
        className={className}
      >
        <div className="calendar-date">{days.format("D")}</div>
        <div className="calendar-percent">
          <div className="calendar-percent-item">
            <div className="calendar-percent-item-bar" />
            <div
              style={{
                backgroundColor: `rgb(95,121,211, ${
                  30 + calendargetGoal(days.format("YYYY-MM-DD")) * (7 / 10)
                }%)`,
              }}
              className="calendar-percent-item-text"
              dangerouslySetInnerHTML={percentDiv(days.format("YYYY-MM-DD"))}
            />
          </div>
        </div>
      </td>
    );
  };
  const calendarArr = () => {
    let result: JSX.Element[] = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = getMoment
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (days.format("MM") !== getMoment.format("MM")) {
                return (
                  <td key={index} className="date deactivate">
                    <div>{days.format("D")}</div>
                    <div className="calendar-percent" />
                  </td>
                );
              } else {
                return dateArr(index, days, type.type);
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
        <span>{getMoment.format("YYYY년 MM월")}</span>
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
      </table>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
