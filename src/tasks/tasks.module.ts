import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PaginationModule } from 'src/modules/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Task } from './entities/task.entity';
import { ProjectModule } from 'src/projects/projects.module';
import { Project } from 'src/projects/entities/project.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User]),TypeOrmModule.forFeature([Project]), ProjectModule, UsersModule,
   PaginationModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
