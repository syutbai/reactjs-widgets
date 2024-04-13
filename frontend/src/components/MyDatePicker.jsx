import React, { useEffect, useState, forwardRef } from 'react';
import { addDays, subDays } from 'date-fns';
import { Controller } from 'react-hook-form';

import DatePicker from 'react-datepicker';
import './react-datepicker.css';

function MyRangeDatepicker ({ control }) {
  // Default startDate to yesterday.
  const [startDate, setStartDate] = useState(new Date(Date.now() - 1000*60*60*24));
  const [endDate, setEndDate] = useState(new Date());
  const ref = React.createRef()

  const styleLabel = {
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "inline"
  }

  const styleFlex = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center"
  }

  const filterPassedTime = (time) => {
    const currentDate = startDate;
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div style={styleFlex}>
      <p style={styleLabel}><b>{"From: "}</b></p>
      <Controller
        control={control}
        name="dpStartDateTime"
        defaultValue={startDate}
        render={({ field: { ref, onChange, value, ...rest } }) => (
          <DatePicker
            selected={value}
            onChange={e => {
              setStartDate(e);
              onChange(e);
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={subDays(new Date(), 365)}
            maxDate={addDays(new Date(), 0)}
            showTimeSelect
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="yyyy-MM-dd h:mm a"
            strictParsing
          />
        )}
      />
      <p style={styleLabel}><b>{"To: "}</b></p>
      <Controller
        control={control}
        name="dpEndDateTime"
        defaultValue={endDate}
        render={({ field: { ref, onChange, value, ...rest } }) => (
          <DatePicker
            selected={value}
            onChange={onChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            maxDate={addDays(new Date(), 0)}
            showTimeSelect
            timeIntervals={15}
            filterTime={filterPassedTime}
            timeCaption="Time"
            dateFormat="yyyy-MM-dd h:mm a"
            strictParsing
          />
        )}
      />
    </div>
  );
}
export default MyRangeDatepicker;

