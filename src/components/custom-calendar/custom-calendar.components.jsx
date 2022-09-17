import React from "react";
import Calendar from "react-calendar";
import "./custom-calendar.styles.scss";
import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import { useAppContext } from "../../context/app-context";
const CustomCalendar = ({
  setEveningButton,
  setAfternoonButton,
  setNewNewDate,
  setButtonActiveActive,
}) => {
  const { clearButton } = useAppContext();
  const [date, setDate] = useState(new Date());
  setNewNewDate(date);

  const onChange = (date) => {
    setDate(date);
    setNewNewDate(date);
    clearButton();
    setEveningButton(false);
    setAfternoonButton(false);
    setButtonActiveActive(false);
  };
  const disabledDates = [date];
  function tileDisabled({ date, view }) {
    // Disable tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of disabled dates
      return disabledDates.find((dDate) => isSameDay(dDate, date));
    }
  }
  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }
  return (
    <Calendar onChange={onChange} value={date} tileDisabled={tileDisabled} />
  );
};

export default CustomCalendar;
