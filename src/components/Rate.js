function Rate (props) {
    return (
            <div className="rating" role="main">
                <h1 className="rating__header">How did we do?</h1>
                <div className="rating__text">Please let us know how we did with your support request. 
                    All feedback is appreciated to help us improve our offering!</div>
                <form className="rating__form" action="." onSubmit={props.handleSubmit}>  
                    <fieldset className="rating__fieldset">
                        <input className="rating__radio" type="radio" value="1" name="votes" id="vote1"/>
                            <label className="rating__radio-label" htmlFor="vote1">1</label>
                        <input className="rating__radio" type="radio" value="2" name="votes" id="vote2"/>
                            <label className="rating__radio-label" htmlFor="vote2">2</label>
                        <input className="rating__radio" type="radio" value="3" name="votes" id="vote3"/>
                            <label className="rating__radio-label" htmlFor="vote3">3</label>
                        <input className="rating__radio" type="radio" value="4" name="votes" id="vote4"/>
                            <label className="rating__radio-label" htmlFor="vote4">4</label>
                        <input className="rating__radio" type="radio" value="5" name="votes" id="vote5"/>
                            <label className="rating__radio-label" htmlFor="vote5">5</label>
                    </fieldset>
                    <label className="rating__submit-button"><input className="rating__submit" type="submit" value="Submit"/>Submit</label>
                </form>
            </div>
            );
}
export default Rate;