import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-sign-in', component: SignInComponent},
  {path: 'app-navbar', component: NavbarComponent},
  {path: 'app-footer', component: FooterComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
