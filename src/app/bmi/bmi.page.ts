import { Component, OnInit } from '@angular/core';
import { BMIService } from "../bmi.service";
import { BMI } from 'src/models/bmi.model';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage{
  height: number;
  weight: number;
  BMI: BMI;

  constructor(private bmiService: BMIService) { }

  calculateBMI(){
    this.BMI= this.bmiService.calculateBMI(this.height, this.weight);
  }

}
