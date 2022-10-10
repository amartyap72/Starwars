import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { FilmsService } from "../service/films.service";

@Component({
    selector: 'app-films',
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})
export class FilmsComponent implements OnInit {
    data: any = [];
    peopleInfo: any = [];
    constructor(private filmsService: FilmsService) {}

    ngOnInit() {
        this.filmsService.getFilmsData().subscribe(
            (response: any) => {
                console.log('Films response ======', response.results);
                this.data = response.results;
            }
        )
    }

    loadPeopleInfo(film: any) {
        forkJoin(film.characters.map((people: any) => this.filmsService.getPeopleInfo(people))).subscribe(
            (response: any) => {
                console.log('People response', response);
                this.peopleInfo = response;
            },
            error => {
                console.log('error', error);
            }
        )
    }
}