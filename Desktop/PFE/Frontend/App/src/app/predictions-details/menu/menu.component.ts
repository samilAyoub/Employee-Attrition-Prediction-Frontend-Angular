import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  features = [
    'Attrition',
    'Age',
    'DailyRate',
    'DistanceFromHome',
    'Education',
    'EnvironmentSatisfaction',
    'HourlyRate',
    'JobInvolvement',
    'JobLevel',
    'JobSatisfaction',
    'MonthlyIncome',
    'MonthlyRate',
    'NumCompaniesWorked',
    'PercentSalaryHike',
    'PerformanceRating',
    'RelationshipSatisfaction',
    'StockOptionLevel',
    'TotalWorkingYears',
    'TrainingTimesLastYear',
    'WorkLifeBalance',
    'YearsAtCompany',
    'YearsInCurrentRole',
    'YearsSinceLastPromotion',
    'YearsWithCurrManager',
    'BusinessTravel',
    'Department',
    'EducationField',
    'Gender',
    'JobRole',
    'MaritalStatus',
    'OverTime'];
  xSelected = 'Attrition';
  ySelected = 'count';
  zSelected = 'none';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  onXChange(event: any) {
    const newX = event.value;
    this.updateQueryParams('x', newX);
  }
  onYChange(event: any) {
    const newY = event.value;
    this.updateQueryParams('y', newY);
  }
  onZChange(event: any) {
    const newZ = event.value;
    this.updateQueryParams('z', newZ);
  }

  updateQueryParams(param: string, val: string) {
    const queryPram = {};
    queryPram[param] = val;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryPram,
      queryParamsHandling: 'merge'
    });
  }

}
