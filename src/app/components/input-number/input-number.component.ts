import { Component, EventEmitter, Input, Output } from "@angular/core";
import { InputNumberInputEvent, InputNumberModule } from "primeng/inputnumber";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-input-number",
    standalone: true,
    imports: [InputNumberModule, FormsModule],
    templateUrl: "./input-number.component.html",
    styleUrl: "./input-number.component.scss",
})
export class InputNumberComponent {
    @Input() value: unknown;
    @Input() showButtons = false;
    @Input() format = true;
    @Input() buttonLayout: "stacked" | "horizontal" | "vertical" = "stacked";
    @Input() inputId?: string;
    @Input() styleClass?: string;
    @Input() style?: object;
    @Input() placeholder?: string;
    @Input() size?: number;
    @Input() maxlength?: number | any | null;
    @Input() tabindex?: number;
    @Input() title?: string;
    @Input() ariaLabelledBy?: string;
    @Input() ariaLabel?: string;
    @Input() ariaRequired = false;
    @Input() name?: string | any;
    @Input() required = false;
    @Input() autocomplete?: string;
    @Input() min?: number;
    @Input() max?: number;
    @Input() incrementButtonClass?: string;
    @Input() decrementButtonClass?: string;
    @Input() incrementButtonIcon?: string;
    @Input() decrementButtonIcon?: string;
    @Input() readonly = false;
    @Input() step = 1;
    @Input() allowEmpty = true;
    @Input() locale?: string;
    @Input() localeMatcher: "lookup" | "best fit" | undefined = "best fit";
    @Input() mode: "decimal" | "currency" = "decimal";
    @Input() currency?: string;
    @Input() currencyDisplay: "symbol" | "code" | "name" | undefined = "symbol";
    @Input() useGrouping = true;
    @Input() variant: "outlined" | "filled" = "outlined";
    @Input() minFractionDigits?: number;
    @Input() maxFractionDigits?: number;
    @Input() prefix?: string;
    @Input() suffix?: string;
    @Input() inputStyle?: object;
    @Input() inputStyleClass?: string;
    @Input() showClear = false;
    @Input() autofocus = false;
    @Input() disabled = false;

    @Output() onInput = new EventEmitter<InputNumberInputEvent>();
    @Output() onFocus = new EventEmitter<Event>();
    @Output() onBlur = new EventEmitter<Event>();
    @Output() onKeyDown = new EventEmitter<KeyboardEvent>();
    @Output() onClear = new EventEmitter<void>();
}
