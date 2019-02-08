import { Injectable } from '@angular/core';
import { BMI } from 'src/models/bmi.model';

@Injectable({
  providedIn: 'root'
})
export class BMIService {

  constructor() { }

  calculateBMI(height: number, weight: number) {
    const BMI= weight / height / height;

    return <BMI> {
      BMI: BMI.toFixed(2),
      classification: this.classifyBMI(BMI)
    }
  }

  private classifyBMI(BMI: number){
    if(BMI < 18.5){
      return 'Underweight';
    }else if(BMI > 18.5 && BMI < 25){
      return 'Normal weight';
    }else if(BMI >= 25 && BMI < 30){
      return 'Over weight';
    }else if(BMI >= 30 && BMI < 35){
      return 'Class 1 obesity';
    }else if(BMI >= 35 && BMI < 40){
      return 'Class 2 obesity';
    }else if(BMI >= 40){
      return 'Class 3 obesity';
    }
  }
}
