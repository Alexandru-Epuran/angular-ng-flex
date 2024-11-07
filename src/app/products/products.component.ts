import { Component } from "@angular/core";
import { ShoppingCartComponent } from "../components/shopping-cart/shopping-cart.component";
import { ProductListComponent } from "../components/product-list/product-list.component";

@Component({
    selector: "app-products",
    standalone: true,
    imports: [ProductListComponent, ShoppingCartComponent],
    templateUrl: "./products.component.html",
    styleUrl: "./products.component.scss",
})
export class ProductsComponent {}
