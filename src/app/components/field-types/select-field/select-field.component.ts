import { Component, input } from '@angular/core';
import { FormField } from '../../../models/fields';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-select-field',
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss'
})
export class SelectFieldComponent {
field = input.required<FormField>();
}
