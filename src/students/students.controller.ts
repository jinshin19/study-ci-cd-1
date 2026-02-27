import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  public async students() {
    return await this.studentsService.students();
  }
}
