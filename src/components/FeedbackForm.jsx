import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {

    const {addFeedBack} = useContext(FeedbackContext);

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if (text.length === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if ( text !== '' && text.trim().length <= 10 ){
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text, rating
            }
            addFeedBack(newFeedback);
        }
        

    }
    return (
        <Card>
            <form onSubmit = {handleSubmit}>
                <h2>How would you rate your service?</h2>
                <RatingSelect select = { (rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type = "text" placeholder = "Write a review"></input>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
