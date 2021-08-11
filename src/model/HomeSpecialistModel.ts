export class HomeSpecialistModel {

    name: string;
    imageUrl: string;
    total: number;
    color: string;

    constructor(name: string, imageUrl: string, total: number, color: string) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.total = total;
        this.color = color;
    }
}
