import {SpecialistActionModel} from "./SpecialistActionModel";

export class SpecialistModel {
    name: string;
    description: string;
    distance: number;
    actions: SpecialistActionModel;

    constructor(name: string, description: string, distance: number, actions: SpecialistActionModel) {
        this.name = name;
        this.description = description;
        this.distance = distance;
        this.actions = actions;
    }
}
