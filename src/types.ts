export type UserId = string;
export type User = {
    id: UserId;
    name: string;
};
export type Event = {
    name: string;
};
export type Wish = {
    name: string;
    description?: string;
    url?: string;
    imageUrl?: string;
    status: 'free' | 'claimed';
    isClaimedByUser?: boolean;
};
export type Invitation = {
    status: 'sent' | 'accepted' | 'declined';
};
export type Guest = {
    name: string;
    invitation: Invitation;
    wishes?: Wish[];
};