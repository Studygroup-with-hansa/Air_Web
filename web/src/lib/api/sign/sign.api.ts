import CustomAxios from "../../token/CustomAxios";

export const postSignIn = async (email: string) => {
  const body = {
    email: email,
  };

  const { data } = await CustomAxios.post("/user/manage/signin/", body);

  return data;
};
