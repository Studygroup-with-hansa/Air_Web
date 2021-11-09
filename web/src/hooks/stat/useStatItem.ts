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
          date: "2021.11.01",
          totalStudyTime: 3223,
          achievementRate: 13,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.02",
          totalStudyTime: 1223,
          achievementRate: 25,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.03",
          totalStudyTime: 48848,
          achievementRate: 85,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.04",
          totalStudyTime: 3777,
          achievementRate: 15,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.05",
          totalStudyTime: 2555,
          achievementRate: 37,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.06",
          totalStudyTime: 25135,
          achievementRate: 48,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.07",
          totalStudyTime: 4312,
          achievementRate: 59,
          subject: [
            {
              id: "수학",
              label: "수학",
              value: 3,
              color: "#ED6A5E",
            },
            {
              id: "국어",
              label: "국어",
              value: 10,
              color: "#8886FF",
            },
          ],
          goal: 10000,
        },
        {
          date: "2021.11.08",
          totalStudyTime: 2734,
          achievementRate: 45,
          subject: [
            {
              id: "수학",
              label: "수학",
              value: 3,
              color: "#ED6A5E",
            },
            {
              id: "국어",
              label: "국어",
              value: 10,
              color: "#8886FF",
            },
          ],
          goal: 10000,
        },
        {
          date: "2021.11.07",
          totalStudyTime: 1231,
          achievementRate: 100,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.08",
          totalStudyTime: 7644,
          achievementRate: 20,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.09",
          totalStudyTime: 12351,
          achievementRate: 100,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.10",
          totalStudyTime: 25135,
          achievementRate: 85,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.11",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.12",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.13",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.14",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.15",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.16",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.17",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.18",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.19",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.20",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.21",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.22",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.23",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.24",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.25",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.26",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.27",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.28",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.29",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
        {
          date: "2021.11.30",
          totalStudyTime: 0,
          achievementRate: 0,
          subject: [],
          goal: 0,
        },
      ],
    },
  };

  return { calendarGetGoal, changeTimeType, getStat };
};

export default useStatItem;
