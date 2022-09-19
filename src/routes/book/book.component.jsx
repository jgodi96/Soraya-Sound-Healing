import "./book.styles.scss";
import BookButtonContainer from "../../components/book-button-container/book-button-container.components";
import Button from "../../components/button/button.components";
import { useAppContext } from "../../context/app-context";
import { useEffect, useState } from "react";
import CustomCalendar from "../../components/custom-calendar/custom-calendar.components";
import AfternoonLocation from "../../components/afternoon-location/afternoon-location.component";
import EveningLocation from "../../components/evening-location/evening-location.components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AvailableTimes = [
  {
    id: 1,
    time: "10:30am ",
    timeOfDay: "afternoon",
  },
  { id: 2, time: "5:00pm", timeOfDay: "evening" },
];

const Book = () => {
  const {
    setOtherNav,
    clearButton,
    addClass,
    classesBooked,
    setButton,
    setButtonToggle,
    addCurrentClass,
    clearCurrentClass,
    clearBillingInformation,
  } = useAppContext();

  const [classes, setClasses] = useState(classesBooked);
  const [newClass, setNewClass] = useState("");
  const [update, setUpdate] = useState(true);
  const [isEveningButtonActive, setIsEveningButtonActive] = useState(false);
  const [isAfternoonButtonActive, setIsAfternoonButtonActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [newTime, setNewTime] = useState("");
  const [newDate, setNewDate] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    setOtherNav();
    clearCurrentClass();
    clearBillingInformation();
    clearButton();
  }, []);

  useEffect(() => {
    setClasses(classesBooked);
    if (isEveningButtonActive === false && isAfternoonButtonActive === false) {
      setButtonActive(false);
      setNewTime("");
      setNewDate("");
      clearButton();
    }
  }, [update]);

  const clickHandler = (e) => {
    e.preventDefault();
    setNewClass(e.target.value);
    console.log(e.target.value2);
    if (e.target.value === "afternoon") {
      setIsAfternoonButtonActive(!isAfternoonButtonActive);
      setIsEveningButtonActive(false);
      setButton(e.target.value);
      setNewTime(e.target.id);
      setButtonActive(true);

      setUpdate(!update);
    }
    if (e.target.value === "evening") {
      setIsEveningButtonActive(!isEveningButtonActive);

      setIsAfternoonButtonActive(false);
      setButton(e.target.value);
      setNewTime(e.target.id);
      setButtonActive(true);
      setUpdate(!update);
    }
  };

  const nextHandler = (e) => {
    e.preventDefault();

    let path = "checkout";

    addClass([...classes, newClass]);
    addCurrentClass(newClass);
    setNewClass("");
    setUpdate(!update);
    navigate(path);
  };

  const check = (e) => {
    console.log(classesBooked);
  };
  return (
    <div className="book-page">
      <div className="book-page-content">
        <div className="book-content">
          <h1 className="book-title">Book Now</h1>
          <CustomCalendar
            setAfternoonButton={setIsAfternoonButtonActive}
            setEveningButton={setIsEveningButtonActive}
            setNewNewDate={setNewDate}
            setButtonActiveActive={setButtonActive}
          />
          <BookButtonContainer>
            {" "}
            <Button
              className={
                isAfternoonButtonActive
                  ? "book-time-button_active"
                  : "book-time-button"
              }
              onClick={clickHandler}
              buttonType="bookTime"
              value={AvailableTimes[0].timeOfDay}
              id={AvailableTimes[0].time}
              type="button"
            >
              {AvailableTimes[0].time}
            </Button>
            <Button
              className={
                isEveningButtonActive
                  ? "book-time-button_active"
                  : "book-time-button"
              }
              onClick={clickHandler}
              buttonType="bookTime"
              value={AvailableTimes[1].timeOfDay}
              id={AvailableTimes[1].time}
              type="button"
            >
              {AvailableTimes[1].time}
            </Button>
          </BookButtonContainer>
          {buttonActive && (
            <div className="book-summary">
              <div className="summary-title">
                <h2>Summary</h2>
              </div>
              <div className="summary-price">
                <h3>Price: $50</h3>
              </div>
              <div className="summary-time">
                <h3>{`Time: ${newDate
                  .toString()
                  .slice(0, 16)} at ${newTime}`}</h3>
              </div>
            </div>
          )}
          {/* <Link to="checkout" className={buttonActive ? "enabled" : "disabled"}> */}
          <Button
            className={
              buttonActive ? "contact-button_active" : "contact-button_disabled"
            }
            disabled={buttonActive ? false : true}
            onClick={nextHandler}
            buttonType="contact"
          >
            Next
          </Button>
          {/* </Link> */}
          {/* <button onClick={check}>Check</button> */}
        </div>

        <div className="location-content">
          <h1 className="location-title">Location</h1>
          <div className="location-container">
            {setButtonToggle === "" && (
              <h1>Please Select a Time to View the Location</h1>
            )}
            {setButtonToggle === "afternoon" && <AfternoonLocation />}
            {setButtonToggle === "evening" && <EveningLocation />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;
