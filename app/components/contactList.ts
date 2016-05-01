import {module} from "../common/module";
import {Contact} from "../services/contactService";

class ContactListComponent {
    contacts: Contact[];
    onReverse: any; //event
    
    constructor() {
    }

    reverse() {
        //this.contacts.reverse();
        this.onReverse();
    }
}

module.component("contactList", <any>{
    template: require("./contactList.html!text"),
    styles: require("./contactList.css!css"),
    controller: ContactListComponent,
    bindings: {
        contacts: "<",
        onReverse: "&",
    }
});
