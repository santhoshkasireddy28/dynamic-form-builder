import { Component, computed, inject } from '@angular/core';
import { FormService } from '../../service/form.service';
import { FieldTypesService } from '../../service/field-types.service';
import { MatInput } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { DynamicOptionsComponent } from './dynamic-options/dynamic-options.component';

@Component({
  selector: 'app-field-settings',
  imports: [MatFormFieldModule,DynamicOptionsComponent, MatInput, FormsModule, MatSelectModule, MatCheckbox],
  templateUrl: './field-settings.component.html',
  styleUrl: './field-settings.component.scss'
})
export class FieldSettingsComponent {
  formService = inject(FormService);
  fieldTypesService = inject(FieldTypesService);

  fieldSettings = computed(() => {
    const field = this.formService.selectedFieldId();
    if(!field) return [];
    const fieldDef = this.fieldTypesService.getFieldType(field.type);
    return fieldDef?.settingsConfig || [];
  })

  fieldValues = computed(() => {
    const field = this.formService.selectedFieldId();
    if(!field) return {};
    return field as any;
  })

  updatedField(fieldId: string, key: string, value: any) {
    console.log('Updating field', fieldId, key, value);
     this.formService.updateField(fieldId, {[key]: value });
  }
}
