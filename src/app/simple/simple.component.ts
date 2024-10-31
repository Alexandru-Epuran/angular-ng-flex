import { Component } from "@angular/core";
import { InputNumberComponent } from "../components/input-number/input-number.component";
import { InputSwitchComponent } from "../components/input-switch/input-switch.component";

@Component({
    selector: "app-simple",
    standalone: true,
    imports: [InputNumberComponent, InputSwitchComponent],
    templateUrl: "./simple.component.html",
    styleUrl: "./simple.component.scss",
})
export class SimpleComponent {}
