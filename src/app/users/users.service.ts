import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Users, Repository } from "../user.modal";

@Injectable()
export class UsersService{

    constructor(private  httpClient : HttpClient) { }
    baseurl = 'https://obaba.shop/Shopping/obaba_shop/index.php/';

    postCategory(obj) {
        let url = this.baseurl + 'Category_c/addCategory';

        return this.httpClient.post(url, obj)
            .map((res: Response) => {
                if (res) {
                    if (res.status === 201) {
                        return res.json();
                    } else if (res.status === 200) {
                        return res.json();
                    }
                }
            }).catch((error: HttpErrorResponse) => {
                if (error.status < 400 || error.status === 500) {
                    return Observable.throw(new Error(error.message));
                }
                if (error.status === 401) {
                    return Observable.throw(error.message);
                }
            });
    }

    editCategory(obj) {
        let url = this.baseurl + 'Category_c/editCategory';

        return this.httpClient.post(url, obj)
            .map((res: Response) => {
                if (res) {
                    if (res.status === 201) {
                        return res.json();
                    } else if (res.status === 200) {
                        return res.json();
                    }
                }
            }).catch((error: HttpErrorResponse) => {
                if (error.status < 400 || error.status === 500) {
                    return Observable.throw(new Error(error.message));
                }
                if (error.status === 401) {
                    return Observable.throw(error.message);
                }
            });
    }

    getUsers():  Observable<Users[]> {
        let url = 'https://api.github.com/users';

        return this.httpClient.get<Users[]>(url);
    }


    getUserRepository(obj):Observable<Repository[]>{
        console.log(obj);  
    let url1=`https://api.github.com/users/`+obj+`/repos`;
        console.log(url1);
        return this.httpClient.get<Repository[]>(url1);
    }
}