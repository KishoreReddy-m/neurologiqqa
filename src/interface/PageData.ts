import { User } from "./User";

export interface PageData {
    current_page: number;
    has_next_page: boolean;
    has_previous_page: boolean;
    next_page_index: number;
    previous_page_index: number;
    first_page_index: number;
    last_page_index: number;
    number_of_items: number;
    data: User[];
}