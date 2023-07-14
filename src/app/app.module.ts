import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DialogModule } from '@angular/cdk/dialog';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BtnIconComponent } from './components/btn-icon/btn-icon.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardComponent } from './pages/board/board.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TableComponent } from './pages/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BtnIconComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent,
    TodoDialogComponent,
    ScrollComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    ReactiveFormsModule,
    DialogModule,
    HttpClientModule,
    ScrollingModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
