export function useGetToken() {
  const token = useCookie('token').value
  return {
    getToken: token,
  }
}
