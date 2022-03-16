import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes =[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  
  {path:'**',component:NotFoundComponent}
 
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
