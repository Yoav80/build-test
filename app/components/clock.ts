import {module} from "../common/module";

export class ClockComponent {
    id: number;
    time: Date;
    format: string;
    intervalId: any;
    onTick: any;
    
    static nextId: number = 1;

    constructor(private $interval) {
        this.id = ClockComponent.nextId++;
        this.time = new Date();
        
        this.start();
    }

    start() {
        if(this.intervalId) {
            return;
        }

        this.time = new Date();

        this.intervalId = this.$interval(()=> {
            this.time = new Date();
            
            this.onTick({sender: this, time: this.time});
        }, 1000);
    }
    
    stop() {
        if(this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }
}

module.component("clock", {
    template: require("./clock.html!text"),
    controller: ClockComponent,
    bindings: {
        format: "<",
        onTick: "&",
    }
});
