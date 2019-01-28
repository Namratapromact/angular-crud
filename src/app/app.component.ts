import { Component } from '@angular/core';

/*Header Select Dropdown */
export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedOption;
  isVisible = false;
  isVisible1;
  addValue;
  showError;

  
 /*Header Select Dropdown */
 options = [
  {value: 'option1', viewValue: 'OptionOne'},
  {value: 'option2', viewValue: 'OptionTwo'},
  {value: 'option3', viewValue: 'OptionThree'}
];

show(){
  this.isVisible = true;
}

edit(){
  this.isVisible1 = true;
}

showContent(){
  this.isVisible = false;
  this.isVisible1 = false;
}


addElement(indexValue){
  var count = false;

  for(let i=0 ; i< this.options.length; i++)
  {

      if (this.options[i].viewValue === indexValue)
      {
        count = true;
        this.showError = true;
        // alert("Element Found" + this.options[i].viewValue + i);
        // alert('Element is already exist');
      }
    
    
  } 
  if(count != true){
    this.options.push({
      'value': this.addValue,
      'viewValue': this.addValue
      });

      this.showError = false;
  }
}

delete(id){
 
    const displayedIndex = this.options.findIndex(obj => {
      return obj.value === id});

    this.options.splice(displayedIndex, 1); 
    // alert(displayedIndex + id);
  }
}



