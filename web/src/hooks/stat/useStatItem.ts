const useStatItem = () => {
  const calendarGetGoal = (date: string): number => {
    let goal: number = 0;

    getStat.data.stats.forEach((data) => {
      //나중에 서버 값으로 바꾸기
      if (data.date === date)
        data.achievementRate ? (goal = data.achievementRate) : (goal = 0);
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

  const getStat = {
    status: 200,
    detail: "OK",
    data: {
      totalTime: 28051,
      goals: 40000,
      achievementRate: 45,
      stats: [
        {
          date: "2021-03-07",
          totalStudyTime: 4312,
          achievementRate: 45,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#5F79D3",
            },
            {
              title: "국어",
              time: 10,
              color: "#FFFFF0",
            },
          ],
          goal: 10000,
        },
        {
          date: "2021-03-08",
          totalStudyTime: 2734,
          achievementRate: 45,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#5F79D3",
            },
            {
              title: "국어",
              time: 10,
              color: "#FFFFF0",
            },
          ],
          goal: 10000,
        },
        {
          date: "2021-03-07",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021-03-08",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021-03-09",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021-03-10",
          totalStudyTime: 0,
          achievementRate: 45,
          subject: [],
          goal: 0,
        },
        {
          date: "2021-03-11",
          totalStudyTime: 0,
          achievementRate: 45,
          subject: [],
          goal: 0,
        },
        {
          date: "2021-03-12",
          totalStudyTime: 7865,
          achievementRate: 45,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#5F79D3",
            },
            {
              title: "국어",
              time: 10,
              color: "#FFFFF0",
            },
          ],
          goal: 10000,
        },
        {
          date: "2021-03-13",
          totalStudyTime: 13140,
          achievementRate: 45,
          subject: [
            {
              title: "수학",
              time: 3,
              color: "#5F79D3",
            },
            {
              title: "국어",
              time: 10,
              color: "#FFFFF0",
            },
          ],
          goal: 10000,
        },
      ],
    },
  };

  return { calendarGetGoal, changeTimeType, getStat };
};

export default useStatItem;
