import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { cartReducer, productsReducer } from "./store/reducers/items.reducer";
import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";
import { CartEffects } from "./store/effects/items.effects";
import { ApiMockService } from "./api/api-mock.service";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore({
            products: productsReducer,
            cart: cartReducer,
        }),
        provideHttpClient(),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiMockService,
            multi: true,
        },
        provideEffects([CartEffects]),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
};
