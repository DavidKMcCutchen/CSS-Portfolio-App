export interface BaseEntity {
  id: string;
}

export interface Page extends BaseEntity {
  name: string;
  relativePath: string;
  description: string;
};

export const emptyPage: Page = {
  id: '',
  name: '',
  relativePath: '',
  description: ''
};