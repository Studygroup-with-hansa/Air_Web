const useStatItem = () => {
  const calendarGetGoal = (date: string): number => {
    let goal: number = 0;

    stat.data.stats.forEach((data) => {
      //나중에 서버 값으로 바꾸기
      if (data.date === date) goal = data.goal;
    });

    return goal;
  };

  const changeTimeType = (time: number) => {
    let hour = "",
      min = "",
      sec = "";

    hour += ("0" + Math.floor(time / 3600)).slice(-2);
    min += ("0" + Math.floor((time % 3600) / 60)).slice(-2);
    sec += ("0" + ((time % 3600) % 60)).slice(-2);

    return `${hour}H ${min}M ${sec}S`;
  };

  const stat = {
    status: 200,
    detail: "OK",
    data: {
      totalTime: 3000,
      goals: 95,
      stats: [
        {
          date: "2021-10-07",
          totalStudyTime: 40312,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#ffffff",
            },
            {
              title: "국어",
              time: 10,
              color: "#000000",
            },
          ],
          goal: 100,
        },
        {
          date: "2021-10-08",
          totalStudyTime: 40312,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#ffffff",
            },
            {
              title: "국어",
              time: 10,
              color: "#000000",
            },
          ],
          goal: 30,
        },
        {
          date: "2021-10-12",
          totalStudyTime: 40312,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#ffffff",
            },
            {
              title: "국어",
              time: 10,
              color: "#000000",
            },
          ],
          goal: 40,
        },
        {
          date: "2021-10-13",
          totalStudyTime: 40312,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#ffffff",
            },
            {
              title: "국어",
              time: 10,
              color: "#000000",
            },
          ],
          goal: 50,
        },
      ],
    },
  };

  return { calendarGetGoal, changeTimeType, stat };
};

export default useStatItem;
