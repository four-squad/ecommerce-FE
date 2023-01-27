export interface ProductType {
    id: number
    title: string
    image: string
    price: number
}

export interface CartType {
    id: number;
    image: string;
    price: number;
    qty: number;
    title: string;
    total_price: number;
  }

export  interface DetailType {
    title?: string;
    image?: string;
    price?: number;
    description?: string;
    seller?: string;
  }

  export interface CartType {
    id: number;
    image: string;
    price: number;
    qty: number;
    title: string;
    total_price: number;
  }