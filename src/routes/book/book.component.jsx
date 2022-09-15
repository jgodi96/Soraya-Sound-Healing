import "./book.styles.scss";
import Calendar from "react-calendar";
import BookButtonContainer from "../../components/book-button-container/book-button-container.components";
import Button from "../../components/button/button.components";
import { useAppContext } from "../../context/app-context";
import { useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
const Book = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
    console.log(date);
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

  const { setOtherNav } = useAppContext();
  useEffect(() => {
    setOtherNav();
  }, []);

  return (
    <div className="book-page">
      <div className="book-content">
        <h1 className="book-title">Book Now</h1>
        <Calendar
          onChange={onChange}
          value={date}
          tileDisabled={tileDisabled}
        />

        <BookButtonContainer />
        <Button buttonType="contact">Next</Button>
      </div>
    </div>
  );
};
export default Book;
