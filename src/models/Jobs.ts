export class Job {

    constructor(
        public id: number,
        public name: string,
        public requirements: string[],
        public wage: string,
        public benefits: string[],
        public isRemote: boolean,
        public localization: string
    ) {
        
    }
}