import { Routes } from '@angular/router';
import { HomeComponent } from './pieprasijums/home/home.component';

export const routes: Routes = [
    {path:"pieprasijums/home", component:HomeComponent},
    {path:"pieprasijums", redirectTo:"pieprasijums/home", pathMatch:"full"},
    {path:"", redirectTo:"pieprasijums/home", pathMatch:"full"}
];
