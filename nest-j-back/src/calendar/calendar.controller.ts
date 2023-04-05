import { Controller, Get } from '@nestjs/common';
import { CalendarEvent, SimpleCalendarEvent } from './calendar.interface';


@Controller('calendar')
export class CalendarController {
  @Get()
  async getCalendarData(): Promise<SimpleCalendarEvent[]> {
    // define a test response
    const testResponse: SimpleCalendarEvent[] = [
      {
        id: '1',
        start: {
          date: '2023-04-05',
          dateTime: '2023-04-05T09:00:00Z',
        },
        end: {
          date: '2023-04-05',
          dateTime: '2023-04-05T10:00:00Z',
        },
      },
      {
        id: '2',
        start: {
          date: '2023-04-06',
          dateTime: '2023-04-06T09:00:00Z',
        },
        end: {
          date: '2023-04-06',
          dateTime: '2023-04-06T10:00:00Z',
        },
      },
    ];
    console.log(testResponse)
    // return the test response
    return testResponse;
  }
}