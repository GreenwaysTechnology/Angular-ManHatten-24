import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hero } from "./hero.type";

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    apiUrl = 'http://localhost:3000/heroes'
    constructor(private http: HttpClient) { }

    findAll() {
        return this.http.get<Hero[]>(this.apiUrl)
    }
    save(hero: Hero) {
        console.log('post data')
        return this.http.post<Hero>(this.apiUrl, hero)
    }
}