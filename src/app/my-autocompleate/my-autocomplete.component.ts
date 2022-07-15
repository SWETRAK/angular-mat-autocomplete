import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {TestInterface} from "../interfaces/test-interface";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";

@Component({
  selector: 'app-my-autocompleate',
  templateUrl: './my-autocomplete.component.html',
  styleUrls: ['./my-autocomplete.component.css']
})
export class MyAutocompleteComponent implements OnInit {
  myControl: FormControl;
  allOptions: TestInterface[]; // array with all options
  options: TestInterface[]; // array with filtered and matching option
  selectedOption?: TestInterface; // variable with currently selected option

  // Variable for receive data from parent model
  @Input() initValue?: TestInterface;

  @ViewChild(MatAutocompleteTrigger) _auto?: MatAutocompleteTrigger

  constructor(private fb: FormBuilder) {
    // Form controls for input
    this.myControl = fb.control({value: "", disabled: false});
    // Array with all options
    this.allOptions = [
      {
        name: "test5",
        grades: [],
        id:5
      },
      {
        name: "test3",
        grades: [],
        id:2
      }
    ];

    // Array with options for autocomplete
    this.options = this.allOptions;

    // Setting value of this element
    this.myControl.setValue("Kamil");

    // filtering option
    this.myControl.valueChanges.subscribe((value) => {
      if(value !== undefined) {
        this.options = this.allOptions.filter(option => option.name.includes(value));
        // if handwritten value match with existing field save that field into value
        if(this.allOptions.filter(option => option.name === value).length === 1){
          this.setSelectedOption(this.allOptions.filter(option => option.name === value)[0]);
          this.myControl.setValue(this.allOptions.filter(option => option.name === value)[0]);
          this._auto?.closePanel();
        }

        // if handwritten value doesn't match with any of elements (that means new value)
        if (typeof value === "string" && this.selectedOption?.name !== value) {
          this.selectedOption = {name: value, grades: []}
        }
      }
    });
  }

  ngOnInit(): void {
    // Setting initial value into form
    if(this.initValue !== undefined) {
      this.selectedOption = this.initValue;
      this.myControl.setValue(this.initValue);
      this.myControl.updateValueAndValidity({onlySelf: false, emitEvent: true});
    }
  }

  // Method to get value from autocomplete selection
  setSelectedOption(value: TestInterface) {
    this.selectedOption = value;
  }

  // Method to display text
  getOptionText(option: TestInterface) {
    return option.name;
  }

  // Method to display value when button clicked
  drukuj() {
    console.log(this.selectedOption);
  }

}

