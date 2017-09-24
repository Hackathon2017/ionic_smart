import { Specialist } from './../specialists/specialist';
import { Domain } from './../domains/domain';
export interface Speciality {
    titre: string;
    domain : Domain;
    specialists? : Specialist[];
}