import { Gender } from '../enums/custom-enums';
import {  generateUUID } from '../interfaces/person';

export const initialPeople = [
  {
    id: generateUUID(),
    name: 'Alice',
    surname: 'Johnson',
    age: 28,
    gender: Gender.FEMALE,
    city: 'Example City',
    lastTimeSeen: new Date('2023-01-01T12:30:00.000Z'),
    stillMissing: true,
    missingDetails: {
      description: 'Last seen near the downtown area wearing a blue jacket and jeans.',
      reportedBy: 'John Doe',
      assignedTo: 'Detective Smith',
      progress: 'Under investigation. Surveillance footage being reviewed.',
    },
  },
  {
    id: generateUUID(),
    name: 'Bob',
    surname: 'Smith',
    age: 35,
    gender: Gender.MALE,
    city: 'Example City',
    lastTimeSeen: new Date('2023-01-02T15:45:00.000Z'),
    stillMissing: true,
    missingDetails: {
      description: 'Disappeared after leaving work. Wearing a gray suit and carrying a black briefcase.',
      reportedBy: 'Jane Doe',
      assignedTo: 'Officer Johnson',
      progress: 'Family interviews underway. Checking local hospitals.',
    },
  },
  {
      id: generateUUID(),
      name: 'Henry',
      surname: 'Garcia',
      age: 33,
      gender: Gender.MALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-08T08:30:00.000Z'),
      stillMissing: false,
      missingDetails: {
        description: 'Last seen hiking in the nearby mountains. Wearing a red jacket and hiking boots.',
        reportedBy: 'Maria Rodriguez',
        assignedTo: 'Detective Hernandez',
        progress: 'Search and rescue mission initiated. Awaiting updates.',
      },
    },
    {
      id: generateUUID(),
      name: 'Isabel',
      surname: 'Rodriguez',
      age: 26,
      gender: Gender.FEMALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-09T12:00:00.000Z'),
      stillMissing: true,
      missingDetails: {
        description: 'Left home for a jog and did not return. Wearing a pink jogging suit.',
        reportedBy: 'Carlos Rodriguez',
        assignedTo: 'Officer Martinez',
        progress: 'Neighbors interviewed. Checking nearby parks and jogging trails.',
      },
    },
    {
      id: generateUUID(),
      name: 'Jack',
      surname: 'Taylor',
      age: 31,
      gender: Gender.MALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-10T14:45:00.000Z'),
      stillMissing: false,
      missingDetails: {
        description: 'Disappeared during a business trip. Last seen at the airport. Carrying a laptop bag.',
        reportedBy: 'Sophie Taylor',
        assignedTo: 'Detective Anderson',
        progress: 'Flight records checked. Contacting colleagues and hotels.',
      },
    },
    {
      id: generateUUID(),
      name: 'Karen',
      surname: 'Moore',
      age: 34,
      gender: Gender.FEMALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-11T09:30:00.000Z'),
      stillMissing: true,
      missingDetails: {
        description: 'Left a note indicating plans to travel. No specific destination mentioned.',
        reportedBy: 'Michael Moore',
        assignedTo: 'Officer Williams',
        progress: 'Checking transportation records. Notifying airports and bus terminals.',
      },
    },
    {
      id: generateUUID(),
      name: 'Leo',
      surname: 'Lee',
      age: 27,
      gender: Gender.MALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-12T16:15:00.000Z'),
      stillMissing: false,
      missingDetails: {
        description: 'Last seen at a local cafe. Wearing a green hoodie and jeans.',
        reportedBy: 'Elena Lee',
        assignedTo: 'Detective Chen',
        progress: 'Cafe surveillance footage reviewed. Speaking with friends and coworkers.',
      },
    },
    {
      id: generateUUID(),
      name: 'Mia',
      surname: 'Anderson',
      age: 32,
      gender: Gender.FEMALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-13T11:00:00.000Z'),
      stillMissing: true,
      missingDetails: {
        description: 'Disappeared after attending a social event. Wearing a black dress and high heels.',
        reportedBy: 'John Anderson',
        assignedTo: 'Officer Davis',
        progress: 'Event attendees interviewed. Reviewing CCTV footage from the venue.',
      },
    },
    {
      id: generateUUID(),
      name: 'Noah',
      surname: 'Walker',
      age: 29,
      gender: Gender.MALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-14T18:45:00.000Z'),
      stillMissing: false,
      missingDetails: {
        description: 'Last seen at the local gym. Wearing workout attire and carrying a gym bag.',
        reportedBy: 'Emily Walker',
        assignedTo: 'Detective Wilson',
        progress: 'Checking gym records. Speaking with gym staff and fellow gym-goers.',
      },
    },
    {
      id: generateUUID(),
      name: 'Olivia',
      surname: 'White',
      age: 36,
      gender: Gender.FEMALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-15T13:30:00.000Z'),
      stillMissing: true,
      missingDetails: {
        description: 'Disappeared after leaving work. Last seen near the office building.',
        reportedBy: 'Daniel White',
        assignedTo: 'Officer Thompson',
        progress: 'Checking workplace records. Interviewing coworkers and reviewing security footage.',
      },
    },
    {
      id: generateUUID(),
      name: 'Peter',
      surname: 'Jones',
      age: 30,
      gender: Gender.MALE,
      city: 'Example City',
      lastTimeSeen: new Date('2023-01-16T09:15:00.000Z'),
      stillMissing: true,
      missingDetails: {
        description: 'Left home unexpectedly. No specific details about clothing or destination.',
        reportedBy: 'Sarah Jones',
        assignedTo: 'Detective Miller',
        progress: 'Speaking with friends and family. Checking personal belongings for clues.',
      },
    },
  ];