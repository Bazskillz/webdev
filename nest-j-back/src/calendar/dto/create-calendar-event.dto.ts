import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateCalendarEventDto {
  @IsOptional()
  @IsString()
  summary: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  start: {
    date: string;
    dateTime: string;
  };

  @IsNotEmpty()
  end: {
    date: string;
    dateTime: string;
  };
}