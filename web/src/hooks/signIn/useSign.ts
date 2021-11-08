import { useCallback } from "react";
import { postSignIn } from "lib/api/sign/sign.api";

const useSignIn = () => {
  const requestSignIn = useCallback(async (email: string) => {
    try {
      const { data } = await postSignIn(email);
    } catch {}
  }, []);
};
export default useSignIn;
