export interface User {
    readonly id?: number
    name?: string
    email: string
    password?: string
    password_confirmation?: string
    current_password?: string
    new_password?: string
    new_password_confirmation?: string
    role?: number
    role_name?: string
    active?: false
    last_login_at?: Date
    last_login_ip?: string
    created_at?: Date
    updated_at?: Date
}