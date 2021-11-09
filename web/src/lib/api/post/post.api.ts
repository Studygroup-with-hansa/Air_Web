import CustomAxios from "lib/token/CustomAxios";

export const postPost = async (
  startDate: string,
  endDate: string,
  calendarType: string
) => {
  const { data } = await CustomAxios.post(
    `/user/data/post/?startDate=${startDate}&endDate=${endDate}&calendarType=${calendarType}`
  );

  return data;
};

export const getPost = async () => {
  const { data } = await CustomAxios.get("/user/data/post/");

  return data;
};
