import { useCallback } from "react";
import { postSignIn, putSignIn } from "lib/api/user/user.api";

const useSignIn = () => {
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

  return { requestSignIn, requestSignInCode };
};

export default useSignIn;
