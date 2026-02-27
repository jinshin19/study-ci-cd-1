import { Injectable } from '@nestjs/common';

const students = [
  {
    id: 'S001',
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    age: 18,
    gender: 'Male',
    course: 'BSIT',
    yearLevel: 1,
  },
  {
    id: 'S002',
    firstName: 'Maria',
    lastName: 'Santos',
    age: 19,
    gender: 'Female',
    course: 'BSCS',
    yearLevel: 2,
  },
  {
    id: 'S003',
    firstName: 'Carlos',
    lastName: 'Reyes',
    age: 20,
    gender: 'Male',
    course: 'BSIS',
    yearLevel: 3,
  },
  {
    id: 'S004',
    firstName: 'Angela',
    lastName: 'Torres',
    age: 18,
    gender: 'Female',
    course: 'BSIT',
    yearLevel: 1,
  },
  {
    id: 'S005',
    firstName: 'Miguel',
    lastName: 'Garcia',
    age: 21,
    gender: 'Male',
    course: 'BSCS',
    yearLevel: 4,
  },
  {
    id: 'S006',
    firstName: 'Sofia',
    lastName: 'Mendoza',
    age: 20,
    gender: 'Female',
    course: 'BSIS',
    yearLevel: 3,
  },
  {
    id: 'S007',
    firstName: 'Daniel',
    lastName: 'Flores',
    age: 19,
    gender: 'Male',
    course: 'BSIT',
    yearLevel: 2,
  },
  {
    id: 'S008',
    firstName: 'Isabella',
    lastName: 'Ramos',
    age: 22,
    gender: 'Female',
    course: 'BSCS',
    yearLevel: 4,
  },
  {
    id: 'S009',
    firstName: 'Nathan',
    lastName: 'Castillo',
    age: 18,
    gender: 'Male',
    course: 'BSIS',
    yearLevel: 1,
  },
  {
    id: 'S010',
    firstName: 'Liam',
    lastName: 'Villanueva',
    age: 21,
    gender: 'Male',
    course: 'BSIT',
    yearLevel: 4,
  },
];

@Injectable()
export class StudentsService {
  constructor() {}

  public async students() {
    try {
      if (!students) {
        return;
      }

      return students;
    } catch (error) {
      console.log('StudentsService.students', error);
    }
  }
}
