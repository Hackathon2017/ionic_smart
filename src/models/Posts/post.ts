import { Speciality } from './../specialities/speciality';
export interface Post {
    title : string;
    specialities? : Speciality[];
    about : string;
}