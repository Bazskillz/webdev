import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CalendarController } from './calendar/calendar.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://auth_manager:Jemoeder123123@127.0.0.1:27017/user'), UsersModule, AuthModule],
  controllers: [AppController, CalendarController],
  providers: [AppService],
})
export class AppModule {}
