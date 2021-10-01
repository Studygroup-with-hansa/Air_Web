import { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";
import { dateDataState, statDateState } from "recoil/stat";
import arrow from "assets/arrow.svg";

import "./Calendar.scss";

const Calendar = ({ type }: any): JSX.Element => {
  //나중에 서버 값으로 변경
  // const data = {[
  //   'date': "",
  //   'goal': ""]
  // };

  const [getMoment, setMoment] = useState(moment());
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);
  const [weekDate, setWeekDate] = useState({
    startDay: moment().startOf("week").format("YYYY.MM.DD"),
    endDay: moment().endOf("week").format("YYYY.MM.DD"),
  });
  const setDateData = useSetRecoilState<IDateDataTypes>(dateDataState);
  const dayWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const today = getMoment;
  let startDate: string[] = ["", "", String(today)];
  let endDate: string[] = ["", "", String(today)];
  let className = "";

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

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
      setWeekDate((prevDate) => ({
        ...prevDate,
        startDay: date.startOf("week").format("YYYY.MM.DD"),
        endDay: date.endOf("week").format("YYYY.MM.DD"),
      }));
    },
    [statDate.activeDate]
  );

  const dateArr = (index: any, days: any, type: any) => {
    switch (type) {
      case "month":
        className =
          statDate.activeDate === days.format("YYYY.MM.DD")
            ? "date active"
            : statDate.dateArray[1] === today.format("MM")
            ? "date dateCycle"
            : "date";
        break;
      case "week":
        className =
          statDate.activeDate === days.format("YYYY.MM.DD")
            ? "date active"
            : weekDate.startDay <= days.format("YYYY.MM.DD") &&
              weekDate.endDay >= days.format("YYYY.MM.DD")
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
    const percentDiv = () => {
      if (className === "date dateCycle") {
        return {
          __html: "0%",
        };
      } else if (className === "date active") {
        return {
          __html: "0%",
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
                backgroundColor: `rgb(95,121,211, ${30 + 0 * (7 / 10)}%)`,
              }}
              className="calendar-percent-item-text"
              dangerouslySetInnerHTML={percentDiv()}
            ></div>
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
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (days.format("MM") !== today.format("MM")) {
                return (
                  <td key={index} className="date deactivate">
                    <div>{days.format("D")}</div>
                    <div className="calendar-percent" />
                  </td>
                );
              } else {
                return dateArr(index, days, type);
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
      </table>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
