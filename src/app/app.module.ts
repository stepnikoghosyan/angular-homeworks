import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent } from './app.component';
import { UsersComponent } from "./components/users/users.component";
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
