import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FormService } from '../../../service/form.service';
import { FieldTypeDefinition, FormField } from '../../../models/fields';
import { FormFieldComponent } from '../form-field/form-field.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-editor',
  imports: [DragDropModule,FormFieldComponent,MatIconModule],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {
  formService = inject(FormService);
onDropInRow(event: CdkDragDrop<any>, rowId: string) {
  if(event.previousContainer.data === 'field-selector') {
    const fieldType = event.item.data as FieldTypeDefinition;
    const newField:FormField = {
      id:crypto.randomUUID(),
      type:fieldType.type,
      ...fieldType.defaultConfig
    }
   this.formService.addField(newField, rowId, event.currentIndex);
    return;
  }
}
}
