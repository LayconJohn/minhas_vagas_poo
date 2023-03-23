export class Candidate<T> {
    id?: T;

    constructor(
        id: T,
        public name: string,
        public skills: string[],
        public trainning: string[],
        public experience: string[],
        public projects: string[]
    ) {
        this.id = id;
    }
}