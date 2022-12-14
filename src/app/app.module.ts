import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { ContactsModule } from './contacts/contacts.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { UnitTestingDemoComponent } from './unit-testing-demo/unit-testing-demo.component';
import { CalcComponent } from './unit-testing-demo/components/calc/calc.component';
import { BlogComponent } from './unit-testing-demo/components/blog/blog.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';

/* Main Switching Box */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    PageNotFoundComponent,
    UnitTestingDemoComponent,
    CalcComponent,
    BlogComponent,
    LoginComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // needed for ngModel
    ProductsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent] // AppModule should be bootstrapped with AppComponent
})
export class AppModule { }
