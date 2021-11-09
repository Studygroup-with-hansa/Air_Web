import CustomAxios from "lib/token/CustomAxios";

export const getRank = async () => {
  const { data } = await CustomAxios.get("/user/data/rank/");

  return data;
};
