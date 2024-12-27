import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    //api Url
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    //get All Post
    getPosts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl).pipe(
            catchError(this.handleError)
        )
    }

    //insert
    createPost(post: any): Observable<any> {
        return this.http.post(this.apiUrl, post).pipe(
            catchError(this.handleError) // Handle error
        );
    }
    // Update a post
    updatePost(post: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${post.id}`, post).pipe(
            catchError(this.handleError) // Handle error
        );
    }
    // Delete a post
    deletePost(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(
            catchError(this.handleError) // Handle error
        );
    }

    //Error Handler
    private handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage)); // Return a user-friendly error
    }
}