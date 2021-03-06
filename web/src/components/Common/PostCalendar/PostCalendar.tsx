import { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";
import { dateDataState, statDateState, totalTimeState } from "recoil/stat";
import useStatItem from "hooks/stat/useStatItem";
import usePostItem from "hooks/post/usePostItem";

const PostCalendar = (): JSX.Element => {
  const { getStat, calendarGetGoal, changeTimeType } = useStatItem();
  const { getPost } = usePostItem();
  const statData = getStat.data;
  // const postData = getPost.data;
  const postData = {
    username: "박상아",
    userImage: "PROFILE_IMG_URL",
    postDate: "2021.12.14",
    startDate: "2021-12-19",
    endDate: "2021-12-25",
    achievementRate: [100, 176, 98, 0, 32, 68, 79],
    calendarType: "week", // month, week, day
    like: 3,
    idx: 2,
  };

  const [getMoment, setMoment] = useState<Moment>(moment());
  const [statDate, setStatDate] = useRecoilState<IStatDateTypes>(statDateState);
  const [dateData, setDateData] = useRecoilState<IDateDataTypes>(dateDataState);
  const setTotalTime = useSetRecoilState<string>(totalTimeState);
  const dayWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  let className: string = "";

  const firstWeek: number = getMoment.clone().startOf("month").week();
  const lastWeek: number =
    getMoment.clone().endOf("month").week() === 1
      ? 53
      : getMoment.clone().endOf("month").week();

  useEffect(() => {
    setTotalTime(changeTimeType(statData.totalTime));
  }, []);

  const dateArr = (index: number, days: Moment, type: string) => {
    switch (type) {
      case "month":
        if (statDate.dateArray[1] === getMoment.format("MM")) {
          className = "date dateCycle";
        } else {
          className = "date";
        }
        break;
      case "week":
        if (
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
            ? "date dateCycle"
            : "date";
        break;
    }

    return (
      <td key={index} className={className}>
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
                return dateArr(index, days, postData.calendarType);
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
        <span>{getMoment.format("YYYY년 MM월")}</span>
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

export default PostCalendar;
