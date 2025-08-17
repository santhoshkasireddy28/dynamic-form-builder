import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormService } from '../../service/form.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FieldPreviewComponent } from '../main-form-editer/field-preview/field-preview.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-forms-listed',
  imports: [ MatCardModule, MatButtonModule,MatIconModule,FieldPreviewComponent],
  templateUrl: './forms-listed.component.html',
  styleUrl: './forms-listed.component.scss'
})
export class FormsListedComponent {
private formService = inject(FormService);
public authService = inject(AuthService);
 private router = inject(Router);
  savedForms = this.formService.savedForms;
  selectedForm = this.formService.selectedFormForPreview;


  previewForm(form: any) { 
    this.formService.selectFormForPreview(form);
  }

  navigateTo(){
    this.router.navigate(['/custom-form']);
  }

    editForm(formId: string) {
    this.formService.loadFormForEditing(formId);
    this.router.navigate(['/custom-form']);
  }
}
