export interface IContactData {
  name: string;
  email: string;
  message?: string;
  company?: string | FileList;
  phone?: string;
}

export interface IContactRequestBody extends IContactData {
  token: string;
}
