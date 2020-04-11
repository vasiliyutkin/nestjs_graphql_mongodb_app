import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson_input.dto';
import { AssignStudentsInput } from './assign_students.input';
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';

@Resolver(t => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentsService: StudentService,
  ) {}

  @Query(t => LessonType)
  getLesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(t => [LessonType])
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(t => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(t => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsInput')
    assignStudentsInput: AssignStudentsInput,
  ) {
    return this.lessonService.assignStudentsToLesson(assignStudentsInput);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentsService.getManyStudents(lesson.students);
  }
}
