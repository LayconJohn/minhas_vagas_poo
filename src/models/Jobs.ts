export class Job<T> {
    id?: T;
    constructor(
        id: T,
        public name: string,
        public requirements: string[],
        public wage: string,
        public benefits: string[],
        public isRemote: boolean,
        public localization: string,
        public isActive: boolean
    ) {
        this.id = id;
    }
}