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
  adresse: string;
  nom: string;
  prenom: string;
  ville: string;
}
