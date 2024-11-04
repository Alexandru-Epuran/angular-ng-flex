import { Component } from '@angular/core';
import { InputCustomNumberComponent } from "../components/input-custom-number/input-custom-number.component";

@Component({
  selector: 'app-expert',
  standalone: true,
  imports: [InputCustomNumberComponent],
  templateUrl: './expert.component.html',
  styleUrl: './expert.component.scss'
})
export class ExpertComponent {

}
