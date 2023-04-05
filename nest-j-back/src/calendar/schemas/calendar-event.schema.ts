import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CalendarEvent extends Document {
  @Prop()
  summary: string;

  @Prop()
  location: string;

  @Prop()
  start: Date;

  @Prop()
  end: Date;
}

export const CalendarEventSchema = SchemaFactory.createForClass(CalendarEvent);
