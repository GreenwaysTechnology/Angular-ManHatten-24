import { Component } from '@angular/core';
import { RxService } from './rxservices/RxService.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  constructor(private rxService: RxService) { }

  ngOnInit() {
    // //listener : listens for event data,err,completed
    // this.rxService.getValue().subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   },
    //   error: (err) => {
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log('completed')
    //   }
    // })
    // const subject = new Subject();
    // subject.subscribe((value) => console.log('Subscriber 1:', value));
    // subject.subscribe((value) => console.log('Subscriber 2:', value));
    // subject.subscribe((value) => console.log('Subscriber 3:', value));
    // subject.next(1)
    // subject.next(2)
    // subject.next(3)


    // //create Subject with default value
    // const behaviorSubject = new BehaviorSubject(0); // Initial value
    // // Subscriber 1
    // behaviorSubject.subscribe((value) => console.log('Subscriber 1:', value));

    // // Emit values
    // behaviorSubject.next(1);
    // behaviorSubject.next(2);

    // // Subscriber 2 (gets the most recent value)
    // behaviorSubject.subscribe((value) => console.log('Subscriber 2:', value));

    // behaviorSubject.next(3);
  }

}
