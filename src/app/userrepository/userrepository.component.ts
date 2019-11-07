import { Component, OnInit, ViewChild } from '@angular/core';
import { Repository, Users } from '../user.modal';
import { UsersService } from '../users/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-userrepository',
  templateUrl: './userrepository.component.html',
  styleUrls: ['./userrepository.component.scss']
})
export class UserrepositoryComponent implements OnInit {
  repo:Repository[]=[];
  constructor(private service:UsersService,private route:Router,private activatedroute:ActivatedRoute) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'creation-date'];
  dataSource = new MatTableDataSource(this.repo);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getUserRepository();
   // console.log(this.activatedroute);
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getUserRepository() {
     return this.service.getUserRepository(this.activatedroute.snapshot.url[1].path)
      .subscribe(
        (data: Repository[]) => {
          this.repo = data;
          this.dataSource.data = this.repo;
          console.log(this.repo);
        }
      );
  }

}
