import { getPost, postPost } from "lib/api/post/post.api";

const usePost = () => {
  const requestPost = async (
    startDate: string,
    endDate: string,
    calendarType: string
  ) => {
    try {
      const { data } = await postPost(startDate, endDate, calendarType);

      return data;
    } catch {}
  };

  const responsePost = async () => {
    try {
      const { data } = await getPost();

      return data;
    } catch {}
  };

  return { requestPost, responsePost };
};

export default usePost;
