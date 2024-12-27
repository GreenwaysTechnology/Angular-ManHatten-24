import { Injectable } from "@angular/core";
import { Observable, of, range, from, map, filter, first, catchError, Subject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class RxService {

    // public getValue() {
    //     return new Observable((subscriber) => {
    //         //emit event
    //         subscriber.next(1) // we emit data event
    //         subscriber.next(2) // we emit data
    //         subscriber.next(3) //we emit data
    //         subscriber.next(4)
    //         subscriber.error(new Error('oops'))
    //         subscriber.next(6)
    //         subscriber.next(7)
    //         subscriber.next(8)
    //         subscriber.next(9)
    //         subscriber.next(10)
    //         subscriber.complete() //close the stream
    //     }).pipe(
    //         catchError(err => of(0))
    //     )
    // }
    // public getValue(): Observable<number> {
    //     return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    // }
    // public getValue(): Observable<number> {
    //     return range(1,100)
    // }
    // public getValue(): Observable<number> {
    //     return from([1, 2, 34, 56])
    // }
    // public getValue(): Observable<number> {
    //     //double this 
    //     return of(1, 2, 3, 4, 5).pipe(
    //         map(value => value * 2)
    //     )
    // }
    // public getValue(): Observable<number> {
    //     //double this 
    //     return range(1, 100).pipe(
    //         filter(value => value % 2 == 0),
    //         first()
    //     )
    // }


    public getValue() {
        const subject = new Subject();
        subject.next(1)
        subject.next(2)
        subject.next(3)
        return subject

    }

}