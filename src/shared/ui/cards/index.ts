import { defineStore } from "pinia";
import { ICards } from "@/shared/ui/cards/index.vue";

export const useCardStore = defineStore('main', {
    state: () => ({
        favoriteCards: [] as ICards[],
        cart: [] as ICards[]
    }),
    actions: {
        toggleFavorite(card: ICards) {
            const index = this.favoriteCards.findIndex(favorite => favorite.id === card.id);
            if (index !== -1) {
                this.favoriteCards.splice(index, 1);
            } else {
                this.favoriteCards.push(card);
            }
        },
        isFavorite(card: ICards) {
            return this.favoriteCards.some(favorite => favorite.id === card.id);
        },

        addToCart(card: ICards) {
            const existingCardIndex = this.cart.findIndex(c => c.name === card.name);
            if (existingCardIndex !== -1) {
                this.cart[existingCardIndex].quantity++;
            } else {
                // Добавляем новую карточку в корзину с начальным количеством 1
                this.cart.push({ ...card, quantity: 1 });
            }
        },
        removeFromCard(card: ICards) {
            const index = this.cart.findIndex(item => item.id === card.id);
            if (index !== -1) {
                const item = this.cart[index];
                if (item.quantity > 1) {
                    // Если количество больше 1, уменьшаем на 1
                    item.quantity--;
                } else {
                    // В противном случае удаляем товар из корзины
                    this.cart.splice(index, 1);
                }
            }
        }
    }
});
