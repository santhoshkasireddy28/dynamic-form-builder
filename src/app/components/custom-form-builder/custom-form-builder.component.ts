import { Component, inject } from '@angular/core';
import { FieldSettingsComponent } from '../field-settings/field-settings.component';
import { FormMenuComponent } from '../form-menu/form-menu.component';
import { MainFormEditerComponent } from '../main-form-editer/main-form-editer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-form-builder',
  imports: [
    FieldSettingsComponent,
    MainFormEditerComponent,
    FormMenuComponent,
    DragDropModule,
    MatButtonModule
  ],
  templateUrl: './custom-form-builder.component.html',
  styleUrl: './custom-form-builder.component.scss'
})
export class CustomFormBuilderComponent {
 private router = inject(Router);

  navigateTo(){
    this.router.navigate(['/saved-forms']);
  }
}
