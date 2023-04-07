export interface SimpleCalendarEvent {
    summary: string;
    location: string;
    start: {
      dateTime: string;
    };
    end: {
      dateTime: string;
    };
  }

export interface CalendarEvent {
    id: string;
    status: string;
    created: Date;
    updated: Date;
    description: string;
    location: string;
    creator: {
        id: string;
        email: string;
        displayName: string;
        self: boolean;
    };
    start: {
        date: string;
        dateTime: string;
        timeZone: string;
    };
    end: {
        date: string;
        dateTime: string;
        timeZone: string;
    };
    recurrence: string[];
    recurringEventId: string;
    attendees: {
        id: string;
        email: string;
        displayName: string;
        organizer: boolean;
        self: boolean;
        resource: boolean;
        optional: boolean;
        responseStatus: string;
        comment: string;
        additionalGuests: number;
    }[];
    reminders: {
        useDefault: boolean;
        overrides: {
        method: string;
        minutes: number;
        }[];
    };
    officeLocation: {
        buildingId: string;
        floorId: string;
        floorSectionId: string;
        deskId: string;
        label: string;
    };
    }


