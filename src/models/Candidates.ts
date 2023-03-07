export class Candidate {

    constructor(
        public id: number,
        public name: string,
        public skills: string[],
        public trainning: string[],
        public experience: string[],
        public projects: string[]
    ) {
        
    }
}