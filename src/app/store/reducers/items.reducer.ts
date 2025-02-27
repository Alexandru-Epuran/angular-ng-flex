import { createReducer, on } from "@ngrx/store";
import { CartApiActions, CartActions } from "../actions/items.actions";
import { Product } from "../../models/item.model";

// Initial state for products and cart
export const initialProductsState: readonly Product[] = [];
export const initialCartState: readonly Product[] = [];

// Reducer for products (fetched from API)
export const productsReducer = createReducer(
    initialProductsState,
    on(CartApiActions.loadProductsSuccess, (_state, { products }) => products)
);

// Reducer for cart (initially empty)
export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.addProduct, (state, { product }) => {
        const existingProduct = state.find(p => p.id === product.id);
        if (existingProduct) {
            return state.map(p => (p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p));
        }
        return [...state, product];
    }),
    on(CartActions.removeProduct, (state, { productId }) => state.filter(p => p.id !== productId)),
    on(CartActions.updateQuantity, (state, { productId, quantity }) => state.map(p => (p.id === productId ? { ...p, quantity } : p)))
);
