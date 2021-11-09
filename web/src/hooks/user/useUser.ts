import { useCallback } from "react";
import { getUser, postSignIn, putSignIn } from "lib/api/user/user.api";

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
      const { data } = await getUser();

      return data;
    } catch {}
  }, []);

  return { isLogin, requestSignIn, requestSignInCode, responseUserData };
};

export default useSignIn;
