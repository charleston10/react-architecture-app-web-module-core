import { SpecialistActionModel } from "./SpecialistActionModel";
export declare class SpecialistModel {
    name: string;
    description: string;
    distance: number;
    actions: SpecialistActionModel;
    constructor(name: string, description: string, distance: number, actions: SpecialistActionModel);
}
