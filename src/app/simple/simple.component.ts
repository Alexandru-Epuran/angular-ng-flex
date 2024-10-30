import { Component } from "@angular/core";
import { InputNumberComponent } from "../components/input-number/input-number.component";

@Component({
    selector: "app-simple",
    standalone: true,
    imports: [InputNumberComponent],
    templateUrl: "./simple.component.html",
    styleUrl: "./simple.component.scss",
})
export class SimpleComponent {}
