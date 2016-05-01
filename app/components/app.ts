import {module} from "../common/module";
import "./clock";
import {ClockComponent} from "./clock";
import "./contactList";
import {Contact} from "../services/contactService";

export class AppComponent {
    contacts1: Contact[];
    contacts2: Contact[];

    constructor() {
        this.contacts1 = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        this.contacts2 = [
            {id:2, name: "Roni"},
            {id:1, name: "Ori"},
        ];
    }

    onReverse() {
        //alert("R");
        this.contacts1.reverse();
    }

    onTick(sender: ClockComponent, time) {
        console.log(sender.id + ": " + time);
    }
}

module.component("app", {
    template: require("./app.html!text"),
    controller: AppComponent,
});
