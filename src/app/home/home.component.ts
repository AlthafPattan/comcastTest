import {Component} from '@angular/core';
import {testService} from "../services/testService"

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  records: Array<any>;

  constructor(private testservice: testService) {

  }

  ngOnInit() {
    this.testservice.getEvents().subscribe(data => {
      this.records = data;
      console.log(this.records);
    })
  }
}
