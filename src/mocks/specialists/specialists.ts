import { Specialist } from './../../models/specialists/specialist';


const specialists : Specialist[] = [
    { 
        id : 1,
        name : "Ahmed Ben Achour",
        geocode : "Les berges du Lac, Tunis",
        about_website : "fb.com/ahmed.seaFood",
        phone : "71100001",
        speciality : 2
    },
    { 
        id : 2,
        name : "Mohamed Saidani",
        geocode : "L'Aouina, Tunis",
        about_website : "fb.com/bijouteriePalais",
        phone : "23889932",
        speciality : 2
    }
]

export const SPECIALIST_LIST = specialists;


