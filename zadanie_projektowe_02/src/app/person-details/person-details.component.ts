import { Component, Input } from '@angular/core';
import { Gender } from 'src/shared/enums/custom-enums';
import { Person } from 'src/shared/interfaces/person';
import { nonInitializedPerson } from 'src/shared/utils/nonInitPerson';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {
 @Input() person:Person = nonInitializedPerson


 getGenderString(gender: Gender): string {
  return gender === Gender.MALE ? 'Male' : 'Female';
}


modalBody = "Are you sure you want to delete this record?"
modalTitle = "Delete Record"
openModal(): void {
  const modelDiv =document.getElementById('myModal')
  if(modelDiv) modelDiv.style.display = 'block';

}


closeModal(): void {
  const modelDiv =document.getElementById('myModal')
  if(modelDiv) modelDiv.style.display = 'none';

}


}
