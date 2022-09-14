
import './book.styles.scss'
import Calendar from 'react-calendar'
import BookButtonContainer from '../../components/book-button-container/book-button-container.components'
import Button from '../../components/button/button.components'
const Book  = () => {
    return (
    
       
        <div className="book-page">
            <div className="book-content">
            <Calendar/>
            <BookButtonContainer/>
            <Button buttonType='contact' >Next</Button>
           

           

            </div>
        </div>
      
    )
}
export default Book