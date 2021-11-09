import CustomAxios from "lib/token/CustomAxios";

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

export const getUserName = async () => {
  const { data } = await CustomAxios.get("/user/info/manage/basic/");

  return data;
};

export const putUserName = async (name: string) => {
  const { data } = await CustomAxios.put(
    `/user/info/manage/basic/name/?name=${name}`
  );

  return data;
};
