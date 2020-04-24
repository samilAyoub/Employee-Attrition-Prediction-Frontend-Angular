import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DatasetService} from '../../../Services/dataset.service';


export interface Employee {
  Age: number ;
  BusinessTravel: string;
  DailyRate: number;
  Department: string;
  DistanceFromHome: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  ELEMENT_DATA: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['Age', 'BusinessTravel', 'DailyRate', 'Department'];
  constructor(private datasetService: DatasetService) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
  /*  this.datasetService.data.subscribe(data => {
      for (const employee of data) {
        const obj = {
          Age: employee.Age,
          BusinessTravel: employee.BusinessTravel,
          DailyRate: employee.DailyRate,
          Department: employee.Department,
          DistanceFromHome: employee.DistanceFromHome
          };
        this.ELEMENT_DATA.push(obj);
      }
      this.dataSource = new MatTableDataSource<Employee>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });*/
  }

}
