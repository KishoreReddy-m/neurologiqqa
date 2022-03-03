export interface Address {
    address_line_1: string;
    address_line_2: string;
    zip_code: string;
    city: string;
    state_province: string;
    country: string;
}

export interface Company {
    name: string;
    address: Address;
    industry: string;
    position: string;
}