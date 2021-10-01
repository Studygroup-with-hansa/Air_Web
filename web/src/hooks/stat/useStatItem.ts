const useStatItem = () => {
  const calendargetGoal = (date: string): number => {
    let goal = 0;

    stat.data.stats.forEach((data) => {
      //나중에 서버 값으로 바꾸기
      if (data.date === date) goal = data.goal;
    });

    return goal;
  };

  const changeTimeType = () => {};

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

  return { calendargetGoal, changeTimeType, stat };
};

export default useStatItem;
