import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CalendarController } from './calendar/calendar.controller';
import { CalendarModule } from './calendar/calendar.module';
import { CalendarEvent, CalendarEventSchema } from './calendar/schemas/calendar-event.schema';
import { CalendarService } from './calendar/calendar.service';


@Module({
  imports: [MongooseModule.forRoot('mongodb://auth_manager:Jemoeder123123@127.0.0.1:27017/user'), MongooseModule.forFeature([{ name: CalendarEvent.name, schema: CalendarEventSchema }]), UsersModule, AuthModule, CalendarModule],
  controllers: [AppController, CalendarController],
  providers: [AppService, CalendarService],
})
export class AppModule {}
