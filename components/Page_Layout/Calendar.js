import React from "react";
import {
  Calendar as BigCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import events from "../../utils/events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomEvent from "./CustomEvent";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    // Set min and max times to show on the Calendar Week / Work Week / Day views.
    // Currently, the min and max times should be 9am and 10pm (most reasonable)
    var minTimeSet = new Date();
    minTimeSet.setHours(10, 0, 0); //For some reason this is 9am. Time inputted should be one number ahead
    var maxTimeSet = new Date();
    maxTimeSet.setHours(21, 0, 0); //For some reason this is 22:00 (10pm). Time inputted should be one number ahead

    // Set initial variables for localizer, allViews, and min/max time
    this.state = {
      localizer: momentLocalizer(moment),
      allViews: Object.keys(Views).map((k) => Views[k]),
      minTime: minTimeSet,
      maxTime: maxTimeSet,
    };
    this.eventStyleGetter = this.eventStyleGetter.bind(this);
  }

  eventStyleGetter() {
    return {
      style: {
        minHeight: "38px", //35px is the minimum number required to have the event title not cut off due to the time. 38px just looks a little better
      },
    };
  }
  render() {
    return (
      <div>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Note: All times are show in Pacific time (PST/PDT).
        </p>
        <div style={{ height: "500pt", padding: "20px" }}>
          <BigCalendar
            events={events}
            views={this.state.allViews}
            defaultView={"week"}
            min={this.state.minTime}
            max={this.state.maxTime}
            step={60}
            popup={false}
            startAccessor="start"
            endAccessor="end"
            showMultiDayTimes
            defaultDate={moment().toDate()}
            localizer={this.state.localizer}
            components={{ event: CustomEvent }}
            eventPropGetter={this.eventStyleGetter}
          />
        </div>
      </div>
    );
  }
}
export default Calendar;
