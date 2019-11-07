import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { Users } from '../user.modal';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {
users:Users[]=[];
  constructor(private service:UsersService,private route:Router) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'creation-date'];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;

 
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getUsers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getUsers() {
     return this.service.getUsers()
      .subscribe(
        (data: Users[]) => {
          this.users = data;
          this.dataSource.data = this.users;
         // console.log(this.users);
        }
      );
  }

  getusername(val){
   // console.log(val);
    this.route.navigate(['/user',val]);
  }


  addUser(){
    this.route.navigate(['/addUser']);
  }
}
