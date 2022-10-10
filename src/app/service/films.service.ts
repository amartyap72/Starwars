import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FilmsService {
    api = "https://swapi.dev/api/films/";

    constructor(private http: HttpClient) {}
    
    getFilmsData() {
        return this.http.get(this.api);
    }

    getPeopleInfo(url: string): Observable<any> {
        return this.http.get<any>(url);
    }
}