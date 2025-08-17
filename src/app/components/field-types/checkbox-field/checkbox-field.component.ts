
import { Component, input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormField } from '../../../models/fields';

@Component({
  selector: 'app-checkbox-field',
  imports: [MatCheckboxModule],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss'
})
export class CheckboxFieldComponent {
  field = input.required<FormField>();
}
