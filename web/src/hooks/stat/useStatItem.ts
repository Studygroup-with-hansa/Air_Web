const useStatItem = () => {
  const getGoal = (date: string): number => {
    let goal = 0;

    stat.data.stats.forEach((data) => {
      if (data.date === date) goal = data.goal;
    });

    return goal;
  };

  const stat = {
    status: 200,
    detail: "OK",
    data: {
      totalTiem: 3000,
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

  return { getGoal };
};

export default useStatItem;
