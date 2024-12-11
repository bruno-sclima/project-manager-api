import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PaginationModule } from 'src/modules/pagination/pagination.module';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';
@Module({
imports: [PaginationModule, UsersModule, TypeOrmModule.forFeature([Project, User])],
controllers: [ProjectsController],
providers: [ProjectsService],
})
export class ProjectModule{}