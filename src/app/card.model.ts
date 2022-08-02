
export interface Cards {
    id?:          number;
    title?:       string;
    description?: string;
    img?:         string;
    type?:        string;
}

export enum Type{
  Arvore = 1,
  Flor = 2,
  Pizza = 3
}
