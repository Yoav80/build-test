import {module} from "../common/module";

export class ContactService {

    constructor(private $q) {
    }

    getAll() : ng.IPromise<Contact> {
        return this.$q.when([
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ]);
    }
}

export interface Contact {
    id: number;
    name: string;
}

module.service("contactService", ContactService);
