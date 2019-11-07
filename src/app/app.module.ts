import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule,MatCardModule,MatDialogModule,MatIconModule,
  MatInputModule,MatListModule,MatMenuModule,MatPaginatorModule,
  MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserrepositoryComponent } from './userrepository/userrepository.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserrepositoryComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
