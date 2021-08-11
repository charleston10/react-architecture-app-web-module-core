export class SpecialistActionModel {
    chat: string;
    name: string | null;

    constructor(chat: string, name: string | null) {
        this.chat = chat;
        this.name = name;
    }
}
