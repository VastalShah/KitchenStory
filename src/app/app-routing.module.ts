import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: "signin", component: SigninComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "home", component: HomepageComponent
  },
  {
    path: "", component: HomepageComponent
  },
  {
    path: "admin", component: AdminpageComponent
  },
  {
    path: "cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
