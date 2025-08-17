import { Component, input } from '@angular/core';
import { FieldTypeDefinition } from '../../../models/fields';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-field-button',
  imports: [MatIconModule,DragDropModule],
  templateUrl: './field-button.component.html',
  styleUrl: './field-button.component.scss'
})
export class FieldButtonComponent {
  field = input.required<FieldTypeDefinition>();
}
