import baseUrl from "./baseURL";

const useInsertData = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  console.log(res);
  return res;
};

export { useInsertData };
