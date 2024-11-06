import { Routes } from "@angular/router";
import { SimpleComponent } from "./simple/simple.component";
import { ExpertComponent } from "./expert/expert.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "simple-page",
        component: SimpleComponent,
    },
    {
        path: "expert-page",
        component: ExpertComponent,
    },
    { path: "products-page", component: ProductsComponent },
];
