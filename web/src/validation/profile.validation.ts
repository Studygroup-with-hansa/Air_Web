export const postNameLength = (name: string, length: number) => {
  if (name.length <= length) {
    return true;
  } else {
    return false;
  }
};
