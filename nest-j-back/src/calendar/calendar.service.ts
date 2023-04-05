import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpleCalendarEvent } from './calendar.interface';

@Injectable()
export class CalendarService {
  constructor(@InjectModel('CalendarEvent') private readonly calendarEventModel: Model<SimpleCalendarEvent>) {}

  async create(event: SimpleCalendarEvent): Promise<SimpleCalendarEvent> {
    const createdEvent = new this.calendarEventModel(event);
    return createdEvent.save();
  }

  async findAll(): Promise<SimpleCalendarEvent[]> {
    return this.calendarEventModel.find().exec();
  }
}