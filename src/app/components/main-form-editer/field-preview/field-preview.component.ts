import { Component, computed, inject, input } from '@angular/core';
import { FormField } from '../../../models/fields';
import { FieldTypesService } from '../../../service/field-types.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-field-preview',
  imports: [NgComponentOutlet],
  templateUrl: './field-preview.component.html',
  styleUrl: './field-preview.component.scss'
})
export class FieldPreviewComponent {
  field = input.required<FormField>();
  fieldTypeService = inject(FieldTypesService);

  
  previewComponent = computed(() => {
    const type = this.fieldTypeService.getFieldType(this.field().type);
    return type?.component ?? null;
  })
}
