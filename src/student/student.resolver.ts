import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create_student.input';
import { Student } from './student.entity';

@Resolver(t => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(t => StudentType)
  getStudent(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query(t => [StudentType])
  getStudents() {
    return this.studentService.getStudents();
  }

  @Mutation(t => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
