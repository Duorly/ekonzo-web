<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 relative">

        <div class="flex flex-col bg-white shadow-sm border px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-2xl w-1/3">
            <div class="mb-2">
                <img alt="Logo" class="w-20 mx-auto" src="~/assets/images/logo.png" />
            </div>
            <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Connexion</div>
            <button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                    <Icon name="logos:facebook" size="20" />
                </span>
                <span>Connexion avec Facebook</span>
            </button>


            <div class="relative mt-10 h-px bg-gray-300">
                <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span class="bg-white px-4 text-xs text-gray-500 uppercase">Ou se connecter avec son email</span>
                </div>
            </div>

            <div class="mt-5">
                <form @submit.prevent="Login">
                    <div class="flex flex-col mb-6">
                        <label for="email" class="text-sm tracking-wide text-gray-600 cursor-pointer mb-2">Adresse
                            mail</label>
                        <div class="relative">
                            <div
                                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <Icon name="heroicons:envelope-20-solid" size="20" />
                            </div>

                            <input id="email" type="email" name="email" v-model="user.email" required
                                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Adresse mail" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="password" class="text-sm tracking-wide text-gray-600 cursor-pointer mb-2">Mot de
                            passe
                        </label>
                        <div class="relative">
                            <div
                                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <span>
                                    <Icon name="heroicons:lock-closed-solid" size="20" />
                                </span>
                            </div>

                            <div class="absolute inset-y-0 right-0 flex items-center px-2">
                                <input id="toggle" v-model="showPassword" class="hidden" type="checkbox" />
                                <label class=" rounded p-2 text-gray-600 cursor-pointer " for="toggle">
                                    <Icon :name="showPassword ? 'heroicons:eye-slash-20-solid' : 'heroicons:eye-20-solid'"
                                        size="20" />
                                </label>
                            </div>

                            <input id="password" :type="showPassword ? 'text' : 'password'" name="password"
                                v-model="user.password" required
                                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Mot de passe" />
                        </div>
                    </div>

                    <div class="flex w-full">
                        <CustomButton :loading="loading" type="submit" class="w-full" variant="primary" round="md">
                            Se connecter
                        </CustomButton>

                    </div>

                    <div class="text-xs text-gray-600 text-center mt-6">
                        <span class="font-semibold">Gestion financière Ekonzo</span> {{ date }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Auth } from '~/utils/models/Auth'

const date = new Date().getFullYear()

const loading = ref(false)

const showPassword = ref<boolean>(false);

const display_error = ref('')

const auth = useAuthStore()

const user = ref<Auth>({
    email: '',
    password: '',
})

const tokenCookie = useCookie<string>('token', {
    httpOnly: false,
    secure: false,
    sameSite: 'strict',
})

async function Login() {
    loading.value = true

    display_error.value = ''

    auth.login(user.value).then(async (userData: any): Promise<void> => {
        tokenCookie.value = userData.value?.data.token

        auth.token = userData.value?.data.token

        auth.user = userData.value?.data.user

        navigateTo('/dashboard', {
            replace: true,
        })

    }).catch((error) => {
        if (error.value?.data.errors)
            display_error.value = error.value?.data.errors
        else
            display_error.value = error.value?.data.message
    }).finally(() => {
        loading.value = false
    })
}
</script>