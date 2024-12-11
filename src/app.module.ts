/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmConfig } from './modules/config/typeorm/typeorm.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    ProjectModule,
    TasksModule,
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CacheModule } from "@nestjs/cache-manager";
import { AuthModule } from "./modules/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuardService } from "./modules/auth/auth-guard/auth-guard.service";
import { TypeOrmConfig } from "./modules/config/typeorm/typeorm.module";
import { ProjectModule } from "./projects/projects.module";
import { TasksModule } from "./tasks/tasks.module";
import { UsersModule } from "./users/users.module";
@Module({
  imports: [
    UsersModule,
    ProjectModule,
    TasksModule,
    TypeOrmConfig,
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuardService,
    },
  ],
})
export class AppModule { }
