import { useCallback } from "react";
import {
  getUserName,
  postSignIn,
  putSignIn,
  putUserName,
} from "lib/api/user/user.api";

const useSignIn = () => {
  const isLogin: null | string = localStorage.getItem("token");

  const requestSignIn = useCallback(async (email: string) => {
    try {
      const { data } = await postSignIn(email);

      return data;
    } catch {}
  }, []);

  const requestSignInCode = useCallback(async (auth: string, email: string) => {
    try {
      const { data } = await putSignIn(auth, email);

      return data;
    } catch (error) {
      // const { status } = error.response.data;
    }
  }, []);

  const responseUserData = useCallback(async () => {
    try {
      const { data } = await getUserName();

      return data;
    } catch {}
  }, []);

  const requestUserData = useCallback(async (name: string) => {
    try {
      const { data } = await putUserName(name);

      return data;
    } catch {}
  }, []);

  return {
    isLogin,
    requestSignIn,
    requestSignInCode,
    responseUserData,
    requestUserData,
  };
};

export default useSignIn;
