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


const MONGO_HOST = 'database';
const MONGO_PORT = 27017;
const MONGO_DATABASE = 'user';
const MONGO_USERNAME = 'auth_manager';
const MONGO_PASSWORD = 'PasswordPasswordPassword';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
    ),
    MongooseModule.forFeature([{ name: CalendarEvent.name, schema: CalendarEventSchema }]),
    UsersModule,
    AuthModule,
    CalendarModule,
  ],
  controllers: [AppController, CalendarController],
  providers: [AppService, CalendarService],
})
export class AppModule {}
