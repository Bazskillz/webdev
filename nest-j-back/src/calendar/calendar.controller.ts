import { Controller, Post, Body, Get } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarEventDto } from './dto/create-calendar-event.dto';
import { SimpleCalendarEvent } from './calendar.interface';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Post('api')
  async create(@Body() createCalendarEventDto: CreateCalendarEventDto) {
    await this.calendarService.createEvent(createCalendarEventDto);
  }
  
  @Get('api')
  async findAll(): Promise<SimpleCalendarEvent[]> {
    return this.calendarService.findAll();
  }
}