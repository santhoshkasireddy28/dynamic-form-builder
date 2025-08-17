import { FormField } from "./fields";

export interface FormRow {
  id: string;
  fields: FormField[];
}

export interface SavedForm {
  id: string;
  name: string;
  createdAt: Date;
  rows: FormRow[];
}