export function useForceLogout(status?: number) {
  if (status == 403) {
    useCookie('token').value = null

    navigateTo('/', {
      replace: true,
    })
  }
}
