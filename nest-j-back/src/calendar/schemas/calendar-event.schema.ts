import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CalendarEvent extends Document {
  @Prop()
  summary: string;

  @Prop()
  location: string;

  @Prop({ type: () => ({ dateTime: String }) })
  start: Record<string, any>;

  @Prop({ type: () => ({ dateTime: String }) })
  end: Record<string, any>;
}

export const CalendarEventSchema = SchemaFactory.createForClass(CalendarEvent);