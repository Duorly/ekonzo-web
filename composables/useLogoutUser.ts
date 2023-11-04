import { useConfirm } from 'primevue/useconfirm'

export default function useLogoutUser() {
  const confirm = useConfirm()

  const token = useCookie('token')

  const config = useAppConfig()

  const auth = useAuthStore()

  async function logout() {
    confirm.require({
      message: 'Voulez vraiment vous déconnectez ?',
      header: 'Déconnexion',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'pi pi-exclamation-triangle',
      acceptLabel: 'J\'accepte',
      position: 'bottomleft',
      rejectLabel: 'Non',

      accept: () => {
        useFetch('/auth/logout', {
          method: 'DELETE',
          baseURL: config.rest.API_URL,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
        })
        token.value = ''
        auth.$reset()
        navigateTo('/')
      },
    })
  }

  return {
    logout,
  }
}
