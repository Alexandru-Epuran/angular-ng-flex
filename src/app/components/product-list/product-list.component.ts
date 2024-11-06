import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../../models/item.model";
import { CartActions } from "../../store/actions/items.actions";
import { selectProducts } from "../../store/selectors/items.selectors";

@Component({
    selector: "app-product-list",
    standalone: true,
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.scss"],
    imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
    products$!: Observable<readonly Product[]>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(CartActions.loadProducts()); // Dispatch load products action
        this.products$ = this.store.select(selectProducts); // Select products from the store
    }

    onAddToCart(product: Product) {
        this.store.dispatch(CartActions.addProduct({ product }));
    }
}
