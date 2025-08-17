import { computed, inject, Injectable, signal } from '@angular/core';
import { FormRow, SavedForm } from '../models/form';
import { FormField } from '../models/fields';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private router = inject(Router);
  private _savedForms = signal<SavedForm[]>([]);
  savedForms = this._savedForms.asReadonly();

  private _selectedFormForPreview = signal<SavedForm | null>(null);
  public selectedFormForPreview = this._selectedFormForPreview.asReadonly();

  private _editingFormId = signal<string | null>(null);
  
  isEditing = computed(() => this._editingFormId() !== null);

  private _rows = signal<FormRow[]>([]);
  private _selectedFieldId = signal<string | null>(null);
  public readonly rows = this._rows.asReadonly();
  public readonly selectedFieldId = computed(() => this._rows().flatMap(row => row.fields).find(field => field.id === this._selectedFieldId()));
  constructor() { 
    this._rows.set([
      { id: crypto.randomUUID(), fields: [] }
    ]);
  }

  addField(field:FormField, rowId:string, index?:number){
    const rows = this._rows();
    const newRows = rows.map(row => {
      if(row.id === rowId) {
       const updatedFields = [...row.fields]; 
        if(index !== undefined) {
          updatedFields.splice(index, 0, field);
        } else {
         updatedFields.push(field);
        }
      return {...row, fields: updatedFields};
  }
  return row;
})
this._rows.set(newRows);
}

  deleteField(fieldId: string) {
    const rows = this._rows();
    const newRows = rows.map(row => ({
        ...row,
        fields: row.fields.filter(field => field.id !== fieldId)
    }));
    this._rows.set(newRows);
  }

  addRow() {
    const newRow: FormRow = {
      id: crypto.randomUUID(),
      fields: []
    };
    this._rows.update(rows => [...rows, newRow]);
  }

  deleteRow(rowId: string) {
    if (this._rows().length <= 1) {
      console.warn('Cannot delete the last row');
      return;
    }
    const newRows = this._rows().filter(row => row.id !== rowId);
    this._rows.set(newRows);
  }

  setSelectedField(fieldId: string | null) {
    this._selectedFieldId.set(fieldId);
  }

  updateField(fieldId: string, data: Partial<FormField>) {
    console.log(data)
    console.log(fieldId)
    const rows = this._rows();  
    const newRows = rows.map(row => ({
      ...row,
      fields: row.fields.map(field => field.id === fieldId ? { ...field, ...data } : field)
  }))
    this._rows.set(newRows);
}


// saveForm() {
//     const currentRows = this._rows();

//     // Prevent saving an empty form
//     if (currentRows.length === 0 || currentRows.every(row => row.fields.length === 0)) {
//       console.warn('Cannot save an empty form.');
//       // Optionally, show a user-facing notification here
//       return;
//     }

//     // Create a new saved form object
//     const newSavedForm: SavedForm = {
//       id: `form_${Date.now()}`, // Simple unique ID
//       name: `My Form ${this._savedForms().length + 1}`, // Example name
//       createdAt: new Date(),
//       rows: currentRows
//     };

//     // Update the savedForms signal immutably
//     this._savedForms.update(currentForms => [...currentForms, newSavedForm]);

//     console.log('Form saved successfully!', newSavedForm);
//     // Optionally, show a success message to the user

//     // Clear the form editor after saving
//     this._rows.set([]); 
//   }

  loadFormForEditing(formId: string): void {
    const formToEdit = this._savedForms().find(form => form.id === formId);
    if (formToEdit) {
      this._rows.set(formToEdit.rows);
      this._editingFormId.set(formId);
    } else {
      console.error(`Form with ID ${formId} not found.`);
    }
  }

  
  saveForm(): void {
    const editingId = this._editingFormId();

    if (editingId) {
      this._savedForms.update(forms => 
        forms.map(form => 
          form.id === editingId ? { ...form, rows: this._rows() } : form
        )
      );
      console.log('Form updated successfully!', editingId);
    } else {
      const newSavedForm: SavedForm = {
        id: `form_${Date.now()}`,
        name: `My Form #${this._savedForms().length + 1}`,
        createdAt: new Date(),
        rows: this._rows()
      };
      this._savedForms.update(forms => [...forms, newSavedForm]);
      console.log('Form saved successfully!', newSavedForm);
    }

    this._rows.set([]);
    this._editingFormId.set(null);
    this.router.navigate(['/saved-forms']);
  }
  getSavedFormById(id: string): SavedForm | undefined {
    return this.savedForms().find(form => form.id === id);
  }

  public selectFormForPreview(form: SavedForm | null): void {
    this._selectedFormForPreview.set(form);
  }

}
