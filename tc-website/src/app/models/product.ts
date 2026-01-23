export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes?: string[];
    comingSoon?: boolean;
}
