import { User } from "./user"

export interface UserResponse {
    Success: boolean
    Message: any
    Data: User
}
