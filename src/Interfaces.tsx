export interface ItemAttributes {
  key       : string;
  brand?    : string;
  color?    : string;
  product?  : string;
  img?      : string;
  price?    : number;
  uses?     : number;
  goal?     : number;
  status?   : boolean;
}

export interface ItemDict {
  [uid: string]: ItemAttributes
}