function Rated (props) {
    return (
        <div className="rating rating--rated" role="main">
            <div className="rating__result">You selected {props.result} out of 5</div>
            <h1 className="rating__header rating__header--rated">Thank you!</h1>
            <div className="rating__text rating__text--rated">We appreciate you taking the time to give a rating. 
            If you ever need more support, don’t hesitate to get in touch!</div>
        </div>
    );
}
export default Rated;