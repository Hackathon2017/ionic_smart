
import { SPECIALIST_LIST } from './../../mocks/specialists/specialists';
import { Message } from './../../models/messages/message';

const specialists = SPECIALIST_LIST;

const messagesList : Message[] = [] ;
specialists.forEach(specialist => {
    messagesList.push({specialist : specialist })
})

export const MESSAGE_LIST = messagesList; 