import type { User } from '~/utils/models/User'

export default defineNuxtRouteMiddleware(async (to) => {
    const config = useAppConfig()

    const { getToken } = useGetToken()

    const auth = useAuthStore()

    if (!getToken || getToken.length < 1) {
        if (to.path != '/')
            return navigateTo('/')
    }
    else if (getToken) {
        if (!auth.user.id) {
            const { data, error } = await useFetch<User>('/user', {
                baseURL: config.rest.API_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken}`,
                },
            })

            if (data.value) {
                auth.$patch((state) => {
                    state.user = data.value as User

                    state.token = getToken
                })
                if (to.path == '/')
                    return navigateTo('/dashboard')
            }
            else {
                useCookie('token').value = ''
                if (to.path != '/')
                    return navigateTo('/')
            }
        }
    }
})