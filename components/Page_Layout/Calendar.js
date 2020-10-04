import React from "react";
import {
  Calendar as BigCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import events from "../../utils/events";
import "../../css/CalendarStyle.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Calendar() {
  const localizer = momentLocalizer(moment);

  // Views are the Day/Week/Month/Work Week/Agenda views. Right now the default has all views.
  let allViews = Object.keys(Views).map((k) => Views[k]);

  return (
    <div>
      <div style={{ height: "500pt" }}>
        <BigCalendar
          events={events}
          views={allViews}
          step={60}
          popup={false}
          startAccessor="start"
          endAccessor="end"
          showMultiDayTimes
          defaultDate={moment().toDate()}
          localizer={localizer}
          components={{ event: CustomEvent }}
        />
      </div>
    </div>
  );
}
