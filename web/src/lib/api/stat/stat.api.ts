import CustomAxios from "lib/token/CustomAxios";

export const postStat = async (startDate: string, endDate: string) => {
  const body = {
    startDate: startDate,
    endDate: endDate,
  };

  const { data } = await CustomAxios.post("/user/data/stats/", body);

  return data;
};
