const usePostItem = () => {
  const getPost = {
    status: 200,
    detail: "OK",
    data: {
      username: "박상아",
      userImage:
        "https://cdn.discordapp.com/attachments/895568695563276328/902389880393461790/ivory.png",
      postDate: "2021-10-14",
      startDate: "2021-10-07",
      endDate: "2021-10-14",
      achievementRate: [100, 176, 98, 0, 32, 68, 79],
      calandarType: "week", // month, week, day
      like: 36,
      idx: 2,
    },
  };

  return { getPost };
};

export default usePostItem;
