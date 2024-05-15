import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component:HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'book', component: HotelbookingComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
