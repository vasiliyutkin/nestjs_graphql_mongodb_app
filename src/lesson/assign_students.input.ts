import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsInput {
  @IsUUID()
  @Field(t => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field(t => [ID])
  studentIds: string[];
}
