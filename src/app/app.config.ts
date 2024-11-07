import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { cartReducer, productsReducer } from "./store/reducers/items.reducer";
import { provideHttpClient } from "@angular/common/http";
import { CartEffects } from "./store/effects/items.effects";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore({
            products: productsReducer,
            cart: cartReducer,
        }),
        provideHttpClient(),
        provideEffects([CartEffects]),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
};
