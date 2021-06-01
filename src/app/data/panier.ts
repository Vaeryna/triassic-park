export interface Panier {
  id: string;
  total: number;
}

export interface Total {
  totalPrice: number;
}

export interface PanierProduit {
  id: string;
  produitId: string;
  quantite: number;

}
