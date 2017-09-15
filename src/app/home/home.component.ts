import {Component} from '@angular/core';
import {testService} from "../services/testService"
import {OrderPipe} from "./orderBy"

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'name';
  direction: number;

  constructor(private testservice: testService) {

  }

  ngOnInit() {
    this.testservice.getEvents().subscribe(data => {
      this.records = data;
      console.log(this.records);
    })
  }
  sorting(col:string){
    console.log(col);
    this.isDesc = !this.isDesc; //To  change the direction
    this.column = col;
    this.direction = this.isDesc ? 1 : -1;
  };
}
