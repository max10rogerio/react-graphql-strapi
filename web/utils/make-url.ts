export const makeUrl = (path: string) => {
  return new URL(path, "http://localhost:1337").toString();
};
