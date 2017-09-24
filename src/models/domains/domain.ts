import { Speciality } from './../specialities/speciality';
export interface Domain {
    title : string;
    specialities? : Speciality[];
    about : string;
}