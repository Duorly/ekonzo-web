import { acceptHMRUpdate } from "pinia";
import type { User } from "~/utils/models/User";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {} as User,
        token: "" as string,
    }),
    persist: true,
    actions: {
        async login(user: User) {
            return new Promise((resolve, reject): void => {
                useFetchData("/auth/login", "POST", { ...user, device_name: "web" })
                    .then((data: any): void => {
                        resolve(data);
                    })
                    .catch((error): void => {
                        reject(error);
                    });
            });
        },
    },
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
