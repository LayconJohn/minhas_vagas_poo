import { Job } from "./Jobs";

export class JobsDiversity<T> extends Job<T> {
    type: string;
    id?: T;
    constructor(
        id: T,
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
        this.id = id
    }
}