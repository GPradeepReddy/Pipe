import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from '../fetching-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  griddata: any;
  selectedStatus: any;
  selectedInstructors: any;
  selectedLocation: any;
  Instructors: any;
  Status: any;
  Location: any;
  All: any;
  selectedStartdate: any;
  selectEdenddate: any;
  StartDate: any;
  EndDate: any;
  constructor(public fetch: FetchingDataService) {

  }

  ngOnInit() {
    this.fetch.getGridData().subscribe(data => {
      this.griddata = data['gridData'];

    })


  }

  onFiltering() {
    debugger;
    console.log(this.griddata);

    this.Instructors = this.selectedInstructors
    this.Status = this.selectedStatus
    this.Location = this.selectedLocation
    this.StartDate = this.selectedStartdate;
    this.EndDate = this.selectEdenddate;


    if (this.selectedInstructors == "all" || this.selectedStatus == "all" || this.selectedLocation == "all" || this.selectedStartdate == "all" || this.selectEdenddate == "all") {
      this.Instructors = "";
      this.Location = "";
      this.Status = "";
      this.StartDate = "";
      this.EndDate = "";
    }
  

  }

  // ["1", "/", "1", "2", "/", "1", "9"].filter(v => v != "/").map(Number).reduce((a,b)=>a+b)

}
