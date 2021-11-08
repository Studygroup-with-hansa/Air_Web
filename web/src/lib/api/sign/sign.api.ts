import CustomAxios from "../../token/CustomAxios";

export const postSignIn = async (email: string) => {
  const body = {
    email: email,
  };

  const { data } = await CustomAxios.post("/user/manage/signin/", body);

  return data;
};

export const putSignIn = async (auth: string, email: string) => {
  const { data } = await CustomAxios.put(
    `/user/manage/signin/?auth=${auth}&email=${email}`
  );

  return data;
};
