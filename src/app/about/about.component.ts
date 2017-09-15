import {Component, OnInit} from '@angular/core';
import {testService} from "../services/testService"
import 'rxjs/add/operator/map';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html',
  providers: [testService]
})
//Displaying amount data with respect to category and filtering with name
export class AboutComponent implements OnInit{
  records: any = {};
  isDesc: boolean = true;
  column: string = 'name';
  direction: number;
  newArr: Array<any> = [];
  datalen : number;

  constructor(private testservice: testService) {

  }

  ngOnInit() {
    //getting JSON data from service
    this.testservice.getEvents().subscribe(data => {
      this.datalen = data.length;
      //loping through Data to sort with names
      for(let i=0;i<this.datalen; i++) {
        if(this.records[data[i].name]) {
          this.records[data[i].name][data[i].category] = data[i].amount;
        } else  {
          this.records[data[i].name] = {};
          this.records[data[i].name]['name'] = data[i].name;
          this.records[data[i].name][data[i].category] = data[i].amount;
        }
      }
      //Assigning the sorted data to new Array
      this.newArr = (<any>Object).values(this.records);
      console.log(this.newArr);

    });

  }
  //function called on name click in Head section
  sorting(col:string){
    console.log(col);
    this.isDesc = !this.isDesc; //To  change the direction
    this.column = col;
    this.direction = this.isDesc ? 1 : -1;
  };

}
