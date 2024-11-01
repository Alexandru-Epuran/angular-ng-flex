import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputSwitchChangeEvent, InputSwitchModule } from "primeng/inputswitch";

@Component({
    selector: "app-input-switch",
    standalone: true,
    imports: [InputSwitchModule, FormsModule],
    templateUrl: "./input-switch.component.html",
    styleUrls: ["./input-switch.component.scss"],
})
export class InputSwitchComponent {
    @Input() style: object | null = null;
    @Input() styleClass: string | any;
    @Input() tabindex: number | null = null;
    @Input() inputId: string | any;
    @Input() name: string | any;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() trueValue: any = true;
    @Input() falseValue: any = false;
    @Input() ariaLabel: string | any;
    @Input() ariaLabelledBy: string | any;
    @Input() autofocus = false;
    @Input() checked = false;

    @Output() onChange = new EventEmitter<InputSwitchChangeEvent>();
    @Output() checkedChange = new EventEmitter<boolean>();

    handleChange(event: InputSwitchChangeEvent) {
        this.checked = event.checked;
        this.checkedChange.emit(this.checked);
        this.onChange.emit(event);
    }
}
