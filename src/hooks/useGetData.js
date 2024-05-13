import baseUrl from "../Api/baseURL";

const useGetData = async (url, parmas) => {
  const res = await baseUrl.get(url, parmas);
  console.log(res.data);
  return res.data;
};

export default useGetData;
