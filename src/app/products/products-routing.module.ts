import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const productsRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes) // registering child routes 
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
