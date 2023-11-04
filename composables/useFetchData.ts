import type { JsonResponseArray } from "~/utils/types/JsonResponse/Array";
import type { JsonAuthResponse } from "~/utils/types/JsonResponse/Auth";
import type { JsonResponseObject } from "~/utils/types/JsonResponse/Object";

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE";

export async function useFetchData(
  url: string,
  method: HTTPMethods = "GET",
  playload?: any
) {
  const { getToken } = useGetToken();

  const { data, error } = await useFetch<
    JsonResponseArray | JsonAuthResponse | JsonResponseObject
  >(url, {
    baseURL: API_URL,
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken}`,
    },
    body: playload,
  });

  return new Promise((resolve, reject) => {
    if (data.value) {
      resolve(data);
    } else {
      useForceLogout(error.value?.response?.status);
      reject(error);
    }
  });
}
