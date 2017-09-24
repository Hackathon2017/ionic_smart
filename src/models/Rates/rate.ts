import { Specialist } from './../specialists/specialist';
export interface Rate {
    rate_name : string;
    rate_value:number;
    specialist? : Specialist;
}