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
    dateTime: string;
  };

  @IsNotEmpty()
  end: {
    dateTime: string;
  };
}