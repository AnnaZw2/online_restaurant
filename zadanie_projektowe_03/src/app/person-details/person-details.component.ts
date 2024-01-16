import { Component, EventEmitter, Input, Output } from '@angular/core';
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
 showModal = false;

 checkAcces(){
    if( localStorage.getItem('role') === 'admin'){
      return true;
    }else{
      return  false
    }
 }
 getGenderString(gender: Gender): string {
  return gender === Gender.MALE ? 'Male' : 'Female';
}


handeDelete(){
  this.showModal = true;
}


handleConfirm(confirm:boolean) {
  if(confirm){
    this.deleteRecord(this.person)
  }


}

handleClose() {
    this.showModal = false;
  

}

@Output() deletePerson = new EventEmitter<Person>();
deleteRecord(person:Person) {
  this.deletePerson.emit(person );
}


}
