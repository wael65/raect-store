import baseUrl from "./baseURL";

const useInsertData = async (url, parmas) => {
  const res = await baseUrl.post(url, parmas);
  return res;
};

export { useInsertData };
