import React from 'react'
import {Calendar as BigCalendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import events from '../../utils/events'
import '../../css/CalendarStyle.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomEvent from './CustomEvent';

export default function Calendar() {

const localizer = momentLocalizer(moment);

let allViews = Object.keys(Views).map(k => Views[k])

return (
  <div>
    <div style={{ height: '500pt'}}>
      <BigCalendar
        events={events}
        views={allViews}
        step={60}
        popup = {false}
        startAccessor="start"
        endAccessor="end"
        showMultiDayTimes
        defaultDate={moment().toDate()}
        localizer={localizer}
        onSelectEvent = {console.log("tst")}
        components={{event: CustomEvent,}}
  />
    </div>
  </div>
);
}