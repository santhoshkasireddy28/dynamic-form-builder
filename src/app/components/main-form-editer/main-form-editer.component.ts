import { Component, inject, signal } from '@angular/core';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { MatButtonModule } from '@angular/material/button';
import { FormService } from '../../service/form.service';
@Component({
  selector: 'app-main-form-editer',
  imports: [FormEditorComponent,FormPreviewComponent, MatButtonToggleModule,MatIconModule, MatButtonModule],
  templateUrl: './main-form-editer.component.html',
  styleUrl: './main-form-editer.component.scss'
})
export class MainFormEditerComponent {
  activeTab = signal<'preview' | 'editor'>('editor');

  formService = inject(FormService);
}
