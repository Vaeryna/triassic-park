export interface Panier {
  id: string;
  name: string;
  quantite: number;
  prix_HT: number;
  keyClient: string;
}

export interface Total {
  totalPrice: number;
}

export interface Client {
  mail: string;
  address: string;
  lastname: string;
  firstname: string;
  city: string;
  uid: string;
  cp: number;
  password: string;
}
