import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './components/trending/trending.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SearchComponent } from './components/header/search/search.component';
import { StartComponent } from './components/start/start.component';
import { FetchStartData } from './components/start/resolve/fetch-start-data.resolve';
import { BasicHttpService } from './services/basic-http.service';
import { HttpClientModule } from '@angular/common/http';
import { BsModalComponent } from './components/bs-modal/bs-modal.component';
import { SignupFormComponent } from './components/bs-modal/signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService } from './services/bs-modal.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogInterceptor } from './blog.interceptor';
import { BsErrorDialogsComponent } from './components/bs-error-dialogs/bs-error-dialogs.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    HeaderComponent,
    HomeComponent,
    BlogsComponent,
    SearchComponent,
    StartComponent,
    BsModalComponent,
    SignupFormComponent,
    BsErrorDialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FetchStartData,
    BasicHttpService,
    BsModalService,
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: BlogInterceptor,
        multi: true
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
