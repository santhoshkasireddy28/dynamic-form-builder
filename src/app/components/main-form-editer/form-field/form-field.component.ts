import { Component, computed, inject, input } from '@angular/core';
import { FormField } from '../../../models/fields';
import { FieldTypesService } from '../../../service/field-types.service';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { FormService } from '../../../service/form.service';
import { MatIconModule } from '@angular/material/icon';
import { FieldPreviewComponent } from '../field-preview/field-preview.component';

@Component({
  selector: 'app-form-field',
  imports: [FieldPreviewComponent, TitleCasePipe, MatButtonModule, MatIconModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  field = input.required<FormField>();
  formService = inject(FormService);
  fieldTypeService = inject(FieldTypesService);



  deleteField(e: Event) {
    e.stopPropagation();
this.formService.deleteField(this.field().id);
  
  }
}
