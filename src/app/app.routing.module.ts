import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ShowslistPageComponent } from './components/showslist-page/showslist-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'list', component: ShowslistPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
