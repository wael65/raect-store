import baseUrl from "./baseURL";

const useInsertData = async (url, parmas) => {
  const res = await baseUrl.post(url, parmas);
  console.log(url);
  console.log(parmas);
  console.log(res);
  return res;
};

export { useInsertData };
