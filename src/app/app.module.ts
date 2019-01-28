import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule,
  MatSelectModule, MatSidenavModule, MatListModule, MatDividerModule, MatTableModule, MatSlideToggleModule, 
  MatFormFieldModule, MatInputModule, MatDialogModule, MatDatepickerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
