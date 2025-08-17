import { Component, inject } from '@angular/core';
import { FieldTypesService } from '../../service/field-types.service';
import { FieldButtonComponent } from './field-button/field-button.component';
import {DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-menu',
  imports: [FieldButtonComponent, DragDropModule],
  templateUrl: './form-menu.component.html',
  styleUrl: './form-menu.component.scss'
})
export class FormMenuComponent {
  fieldTypesService = inject(FieldTypesService);
  fieldTypes = this.fieldTypesService.getAllFieldTypes();
}
