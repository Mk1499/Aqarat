import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { UserCardComponent } from '../components/user-card/user-card.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    ProductCardComponent,
    UserCardComponent,
  ],
  imports: [AppRoutingModule],
  exports: [
    SidebarComponent,
    NavbarComponent,
    ProductCardComponent,
    UserCardComponent,
  ],
})
export default class SharedModule {}
