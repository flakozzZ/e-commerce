import {CategoriesType} from "@/app/types/CategoryTypes.ts";


export interface ProductTypes {
    id: number
    title: string;
    slug: string;
    price: number;
    is_available?: boolean;
    description?: string;
    stock: number;
    category: CategoriesType;
    photo: string | undefined;
    rating: number;
}
