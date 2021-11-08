import { useCallback, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";
import { dateDataState, statDateState, totalTimeState } from "recoil/stat";
import arrow from "assets/arrow.svg";
import useStatItem from "hooks/stat/useStatItem";

import "./Calendar.scss";

const Calendar = (props: { type: string }): JSX.Element => {
  const { getStat, calendarGetGoal, changeTimeType } = useStatItem();
  const statData = getStat.data;

  const [getMoment, setMoment] = useState<Moment>(moment());
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);
  const [dateData, setDateData] = useRecoilState<IDateDataTypes>(dateDataState);
  const setTotalTime = useSetRecoilState<string>(totalTimeState);
  const dayWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  let startDate: string[] = ["", "", String(getMoment)];
  let endDate: string[] = ["", "", String(getMoment)];
  let className: string = "";

  const firstWeek: number = getMoment.clone().startOf("month").week();
  const lastWeek: number =
    getMoment.clone().endOf("month").week() === 1
      ? 53
      : getMoment.clone().endOf("month").week();

  useEffect(() => {
    setTotalTime(changeTimeType(statData.totalTime));
  }, []);

  const handleDate = useCallback(
    (date: Moment) => {
      setStatDate({
        activeDate: date.format("YYYY.MM.DD"),
        dateArray: date.format("YYYY.MM.DD").split("."),
      });
      if (statDate.activeDate === date.format("YYYY.MM.DD")) {
        return;
      }
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
      setTotalTime(changeTimeType(statData.totalTime));
    },
    [statDate.activeDate]
  );

  const dateArr = (index: number, days: Moment, type: string) => {
    switch (type) {
      case "month":
        if (statDate.activeDate === days.format("YYYY.MM.DD")) {
          className = "date active";
        } else if (statDate.dateArray[1] === getMoment.format("MM")) {
          className = "date dateCycle";
        } else {
          className = "date";
        }
        break;
      case "week":
        if (statDate.activeDate === days.format("YYYY.MM.DD")) {
          className = "date active";
        } else if (
          dateData.startDate[1] <= days.format("YYYY.MM.DD") &&
          dateData.endDate[1] >= days.format("YYYY.MM.DD")
        ) {
          className = "date dateCycle";
        } else {
          className = "date";
        }
        break;
      case "day":
        className =
          statDate.activeDate === days.format("YYYY.MM.DD")
            ? "date active"
            : "date";
        break;
    }

    return (
      <td key={index} onClick={() => handleDate(days)} className={className}>
        <div className="calendar-date">{days.format("D")}</div>
        <div className="calendar-percent">
          <div className="calendar-percent-item">
            <div className="calendar-percent-item-bar" />
            <div
              style={{
                backgroundColor: `rgb(95,121,211, ${
                  30 + calendarGetGoal(days.format("YYYY-MM-DD")) * (7 / 10)
                }%)`,
              }}
              className="calendar-percent-item-text"
            >
              {className === "date dateCycle" || className === "date active"
                ? `${calendarGetGoal(days.format("YYYY-MM-DD"))}%`
                : ""}
            </div>
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
                return dateArr(index, days, props.type);
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
            setMoment(getMoment.clone().add(-1, "month"));
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
