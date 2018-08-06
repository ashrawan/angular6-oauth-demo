import { User } from "./user";

export class Address {
    id: number
    city: string
    district: string
    address_type: string
    status: number
    user: User
}