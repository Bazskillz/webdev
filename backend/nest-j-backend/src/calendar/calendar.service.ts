import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpleCalendarEvent } from './calendar.interface';
import { CalendarEvent } from './schemas/calendar-event.schema';

@Injectable()
export class CalendarService {
  constructor(@InjectModel(CalendarEvent.name) private readonly eventModel: Model<SimpleCalendarEvent>) {}

  async createEvent(event: SimpleCalendarEvent): Promise<SimpleCalendarEvent> {
    const createdEvent = new this.eventModel(event);
    return createdEvent.save();
  }

  async findAll(): Promise<SimpleCalendarEvent[]> {
    return this.eventModel.find().exec();
  }
}