import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/interfaces/person';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  @Input() person: Person | undefined;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      age: [''],
    
    });
  }

  ngOnInit(): void {
    // Initialize the form with the existing person data
    if (this.person) {
      this.editForm.patchValue({
        name: this.person.name,
        surname: this.person.surname,
        age: this.person.age,
        // Patch other values accordingly
      });
    }
  }

  onSubmit(): void {
    // Handle form submission here
    const editedPerson = {
      id: this.person?.id || '',
      name: this.editForm.value.name,
      surname: this.editForm.value.surname,
      age: this.editForm.value.age,
      // Update other properties accordingly
    };

    console.log('Edited Person:', editedPerson);
    // You can perform further actions like updating the data source or sending it to a server.
  }

}
