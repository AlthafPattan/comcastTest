import {Component} from '@angular/core';
import {testService} from "../services/testService"

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
//Displaying JSON data and filtering with name, category and amount
export class HomeComponent {
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'name';
  direction: number;

  constructor(private testservice: testService) {

  }

  //subscribing to data and display on Initial state.
  ngOnInit() {
    this.testservice.getEvents().subscribe(data => {
      this.records = data;
      console.log(this.records);
    })
  }

  //sorting data with name
  sorting(col:string){
    console.log(col);
    this.isDesc = !this.isDesc; //To  change the direction
    this.column = col;
    this.direction = this.isDesc ? 1 : -1;
  };
}
