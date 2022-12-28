export interface ProductRenderData {
  pageTitle: string;
  prods: Array<string | number>;
  path: string;
}

export interface ProductDetailData {
  pageTitle: string;
  product: Array<string | number>;
  path: string;
}

export interface RenderData {
  pageTitle: string;
  path: string;
}

export interface ProductParams {
  prodId: string;
}

export interface bodyValues {
  productId: string;
}