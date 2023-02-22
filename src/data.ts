import { User, Event, Guest, Invitation, Wish } from "./types";

const user = {
    id: 'user1',
    name: 'Alice',
};
const event = {
    name: 'Christmas 2023',
};
const guests = [
    {
        name: 'Bob', 
        invitation: { 
            status: 'accepted', 
        } as Invitation, 
        wishes: [{
            name: 'Fitness mat',
            description: 'Non slippery mat, thin up to 5mm, dark color',
            url: 'https://www.example.com',
            imageUrl: 'https://source.unsplash.com/be-6rpnQ30k/300x300',
            status: 'free',
        } as Wish],
    }, {
        name: 'Emma', 
        invitation: { 
            status: 'accepted' 
        } as Invitation, 
        wishes: [],
    }];
export const data: {
    user: User;
    event: Event;
    guests: Guest[];
} = {
    user,
    event,
    guests,
};