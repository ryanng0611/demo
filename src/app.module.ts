import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbdatasource } from './data/data.source';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(dbdatasource),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}