import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';

function FeedbackForm() {

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

    return (
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type = "text" placeholder = "Write a review"></input>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                    {message && <div className="message">{message}</div>}
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
