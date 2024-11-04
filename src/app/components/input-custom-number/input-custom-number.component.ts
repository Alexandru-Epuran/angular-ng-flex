import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputNumberModule, InputNumberInputEvent } from "primeng/inputnumber";

@Component({
    selector: "app-input-custom-number",
    standalone: true,
    imports: [InputNumberModule, CommonModule, FormsModule],
    templateUrl: "./input-custom-number.component.html",
    styleUrl: "./input-custom-number.component.scss",
})
export class InputCustomNumberComponent {
    @Input() label: string | any;
    @Input() inputGroupAddonClass: string | any;
    @Input() addonPosition = "right";
    @Input() addon: any;
    @Input() value: any;
    @Input() showButtons = false;
    @Input() format = true;
    @Input() buttonLayout: "stacked" | "horizontal" | "vertical" = "stacked";
    @Input() inputId?: string;
    @Input() styleClass?: string;
    @Input() style?: any;
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
