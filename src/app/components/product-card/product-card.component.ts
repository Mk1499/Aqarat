import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/models/product.interface';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  isAdmin = false;
  @Input('data') data: Product | undefined;
  @Input() callingApi = false;
  @Output('onDelete') onDelete = new EventEmitter();
  @Output('onBuy') onBuy = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }

  deleteProd() {
    this.onDelete.emit(this.data?._id);
  }

  buyProt() {
    this.onBuy.emit(this.data?._id);
  }
}
