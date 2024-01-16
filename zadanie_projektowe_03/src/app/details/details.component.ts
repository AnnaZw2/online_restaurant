import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/interfaces/person';
import { initialPeople } from 'src/shared/data/data';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  person: Person | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const personId = params.get('id');
      
      this.person = initialPeople.find(p => p.id === personId);
      console.log(this.person);
    });
  }

  toggleUserRole(): void {
    // Toggle between "super-admin" and "admin" roles
    const currentRole = localStorage.getItem("role");

    const newRole = currentRole === 'admin' ? 'super-admin' : 'admin';

    localStorage.setItem("role", newRole);
    console.log(`Role toggled to: ${newRole}`);
  }
}
