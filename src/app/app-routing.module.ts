import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TrendingComponent } from './components/trending/trending.component';
import { FetchStartData } from './components/start/resolve/fetch-start-data.resolve';


const routes: Routes = [
  {
    path: '', redirectTo: 'start', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: BlogsComponent },
    ]
  },
  {
    path: 'trending', component: TrendingComponent
  },
  {
    path: 'start', component: StartComponent, resolve: { categories: FetchStartData }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
