import { Type } from "@angular/core";

export interface FieldTypeDefinition {
  type: string;
  label: string;
  icon: string;
  defaultConfig:any;
  settingsConfig?: FieldSettingsDefinition[];
  component?: Type<unknown>;
}

export interface FieldSettingsDefinition {
  type: 'text' | 'checkbox' | 'select' | 'dynamic-options';
  key: string;
  label: string;
  options?: OptionsItem[];
}

export interface OptionsItem {
  label: string;
  value: string;
}

export interface FormField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  inputType?: string;
  placeholder?: string;
  Options?: OptionsItem[];
}