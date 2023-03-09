export class Job {

    constructor(
        public id: string | number,
        public name: string,
        public requirements: string[],
        public wage: string,
        public benefits: string[],
        public isRemote: boolean,
        public localization: string,
        public isActive: boolean
    ) {
        
    }
}