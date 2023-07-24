import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // String interpolation
 // Event Binding
 // Property Binding
 // Two way Binding
  title = 'Partner Forms';
  isDisabled = true;
  name = 'Kishor';
  taxYears: number[] = [];
  
  modifyTitle(): void {
    this.title = 'Partner Forms Desktop Application';
    this.isDisabled = false;
    this.taxYears = [2020,2021,2022,2023];
  }

  clear(): void {
    this.isDisabled = true;
  }
}

