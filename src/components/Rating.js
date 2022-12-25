import "../assets/styles/Rating.scss";
import Rate from "./Rate";
import Rated from "./Rated";
import { useState } from 'react';

function Rating () {
    const [rating, setRating] = useState(0);

    function handleSubmit(event){
        event.preventDefault();
        let checked = document.querySelector('.rating__radio:checked');
        if (checked)
            setRating(checked.value);
    }
    
    return (
        rating === 0 
        ?  <Rate handleSubmit={handleSubmit} /> 
        : <Rated result={rating} />);
}

export default Rating;