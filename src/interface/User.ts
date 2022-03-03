export interface BaseInformation {
    gender: number;
    first_name: string;
    last_name: string;
    mail: string;
    password: string;
    rollout_level?: any;
}

export interface User {
    last_login: Date;
    is_verified: boolean;
    avatar?: any;
    role: number;
    groups?: any;
    permissions?: any;
    base_information: BaseInformation;
    company?: any;
    billing?: any;
    social?: any;
    metrics?: any;
    id: string;
    create_date: Date;
    date_updated: Date;
    is_deleted?: any;
}
