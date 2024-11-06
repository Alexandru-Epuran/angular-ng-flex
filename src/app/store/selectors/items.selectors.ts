import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Product } from "../../models/item.model";

export const selectProducts = createFeatureSelector<readonly Product[]>("products");

export const selectCart = createFeatureSelector<readonly Product[]>("cart");

export const selectCartTotal = createSelector(selectCart, cart => cart.reduce((total, product) => total + product.price * product.quantity, 0));
