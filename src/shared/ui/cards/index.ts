import {defineStore} from "pinia";
import {ProductTypes} from "@/app/types/ProductTypes.ts";

export const useCardStore = defineStore('main', {
    state: () => ({
        favoriteCards: [] as ProductTypes[],
        product: [] as ProductTypes[]
    }),
    actions: {
        toggleFavorite(card: ProductTypes) {
            const index = this.favoriteCards.findIndex(favorite => favorite.slug === card.slug);
            if (index !== -1) {
                this.favoriteCards.splice(index, 1);
            } else {
                this.favoriteCards.push(card);
            }
        },
        isFavorite(card: ProductTypes) {
            return this.favoriteCards.some(favorite => favorite.slug === card.slug);
        },

        addToCart(card: ProductTypes) {
            const existingCardIndex = this.product.findIndex(c => c.title === card.title);
            if (existingCardIndex !== -1) {
                this.product[existingCardIndex].stock++;
            } else {
                // Добавляем новую карточку в корзину с начальным количеством 1
                this.product.push({ ...card, stock: 1 });
            }
        },
        removeFromCard(card: ProductTypes) {
            const index = this.product.findIndex(item => item.id === card.id);
            if (index !== -1) {
                const item = this.product[index];
                if (item.stock > 1) {
                    // Если количество больше 1, уменьшаем на 1
                    item.stock--;
                } else {
                    // В противном случае удаляем товар из корзины
                    this.product.splice(index, 1);
                }
            }
        }
    }
});
