import { Component, input, OnChanges, output, signal, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OptionsItem } from '../../../models/fields';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-options',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './dynamic-options.component.html',
  styleUrl: './dynamic-options.component.scss'
})
export class DynamicOptionsComponent implements OnChanges {
  title = input('');
  options = input.required<OptionsItem[]>();
  optionsChange = output<OptionsItem[]>();
  protected localOptions = signal<OptionsItem[]>([]);
    ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.localOptions.set(this.options());
    }
    console.log(this.localOptions())
    console.log(this.options())
  }
  // addOption() {
  //   const currentOptions = this.options();
  //   const newOption = [...currentOptions];
  //   newOption.push({label:`Option ${newOption.length + 1}`, value: `option-${newOption.length + 1}`});
  //   this.optionsChange.emit(newOption);
  // }
  // updateOption(index: number, newLabel: string) {
  //   const currentOptions = this.options();
  //   const newOption = [...currentOptions];
  //   newOption[index] = {...newOption[index], label:newLabel};
  //   this.optionsChange.emit(newOption);
  // }

  // removeOption(index: number) {
  //   const currentOptions = this.options();
  //   const newOption = [...currentOptions];
  //   newOption.splice(index, 1);
  //   this.optionsChange.emit(newOption);
  // }
  addOption() {
    // 1. Update the local signal for immediate UI change
    this.localOptions.update(current => [
      ...current,
      { label: `Option ${current.length + 1}`, value: `option-${current.length + 1}` }
    ]);
    // 2. Emit the new state to the parent
    this.optionsChange.emit(this.localOptions());
    console.log(this.localOptions())
  }

  updateOption(index: number, newLabel: string) {
    // 1. Update local signal
    this.localOptions.update(current => {
      const newOptions = [...current];
      newOptions[index] = { ...newOptions[index], label: newLabel };
      return newOptions;
    });
    // 2. Emit to parent
    this.optionsChange.emit(this.localOptions());
  }

  removeOption(index: number) {
    // 1. Update local signal
    this.localOptions.update(current => {
      const newOptions = [...current];
      newOptions.splice(index, 1);
      return newOptions;
    });
    // 2. Emit to parent
    this.optionsChange.emit(this.localOptions());
  }
}
