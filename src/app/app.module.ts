import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ThoughtsListComponent } from './components/thoughts-list/thoughts-list.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ThoughtsListComponent,
    ThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
