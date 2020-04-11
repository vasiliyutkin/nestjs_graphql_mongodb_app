import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { StudentModule } from '../student/student.module';

@Module({
  providers: [LessonResolver, LessonService],
  imports: [TypeOrmModule.forFeature([Lesson]), StudentModule],
})
export class LessonModule {}
