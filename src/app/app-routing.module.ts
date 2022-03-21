import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { VendorListComponent } from './features/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './features/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { UserCreateComponent } from './features/user-create/user-create.component';
import { VendorCreateComponent } from './features/vendor-create/vendor-create.component';
import { ProductCreateComponent } from './features/product-create/product-create.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/detail/:id', component: VendorDetailComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
