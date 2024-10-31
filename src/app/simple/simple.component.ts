import { Component } from "@angular/core";
import { InputNumberComponent } from "../components/input-number/input-number.component";
import { InputSwitchComponent } from "../components/input-switch/input-switch.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-simple",
    standalone: true,
    imports: [InputNumberComponent, InputSwitchComponent, CommonModule],
    templateUrl: "./simple.component.html",
    styleUrl: "./simple.component.scss",
})
export class SimpleComponent {
    expertModeEnabled = false;
}
