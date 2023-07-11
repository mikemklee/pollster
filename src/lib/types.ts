export interface Author {
    id: number;
    profileImage: string;
    name: string;
    handle: string;
}

export interface Poll {
    id: number;
    question: string;
    options: string[];
    postedAt: number;
    author: Author;
}
