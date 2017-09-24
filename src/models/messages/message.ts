import { Specialist } from './../specialists/specialist';
import { Rate } from './../Rates/rate';
import { User } from './../Users/user';

export interface Message {
    author: User;
    publish_date?: Date;
    rate: Rate[];
    avis: string;
    description: string;
    Specialist: Specialist;
}