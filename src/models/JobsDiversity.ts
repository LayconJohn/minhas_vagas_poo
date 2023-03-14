import { Job } from "./Jobs";

export class JobsDiversity extends Job {
    type: string
    
    constructor(
        id: string | number,
        name: string,
        requirements: string[],
        wage: string,
        benefits: string[],
        isRemote: boolean,
        localization: string,
        isActive: boolean,
        type: string
        ) {
        super(id, name, requirements, wage, benefits, isRemote, localization, isActive)
        this.type = type
    }
}