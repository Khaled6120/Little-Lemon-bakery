import React, {useState} from 'react';
import "./styles/ReservationsContent.css";

function ReservationsContent() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        occasion: "",
        guests: "",
        date: "",
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}
        if (formData.name === "") {
            err.name = "* Full name required!" 
        }
        if (formData.email === "") {
            err.email = "* Email required!" 
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(formData.email)) {
                err.email = "Email not valid!"
            }
        }


        if (formData.telephone === "") {
            err.telephone = "* Phone number required!" 
        }else{
            let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            if(!phoneRegex.test(formData.telephone)) {
                err.telephone = "Telephone number not valid!"
            }
        }


        if (formData.guests === "") {
            err.guests = "* Please specify number of guests!" 
        }
        if (formData.date === "") {
            err.date = "* Please specify date and time!" 
        }

        setFormError({...err})
        return Object.keys(err).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.table(formData)

        let isValid = validateForm()
        if(isValid) {
            alert("Submitted")
        }
    }

  return (
    <div class="res-content-wrapper">
        <div class="res-content-container">
            <div class="text">
                <h2>Experience the perfect blend of tradition and modernity.</h2>
                <p>At Little Lemon, we take great pride in offering our customers the best of both worlds. We offer a traditional dining experience with a modern twist.</p>
                <p>Book a table with us today to experience this unique dining experience for yourself.</p>
            </div>
            <div class="form">
                <h1>Reserve a Table</h1>
                <p>Please fill out and submit the form below to book your reservation at Little Lemon.</p>
                <form onSubmit={onSubmitHandler}>
                    <fieldset>
                        <div class="field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                name="name"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.name}</span>
                        </div>
                        <div class="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="text@email.com"
                                name="email"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.email}</span>
                        </div>
                        <div class="field">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="tel"
                                placeholder="+233000000000"
                                name="telephone"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.telephone}</span>
                        </div>
                        <div class="guestsdate">
                            <div class="field occasion">
                                <label htmlFor="occasion">Occasion (optional)</label>
                                <div className="options">
                                    <select name="occasion" onChange={onChangeHandler}>
                                        <option value="select">Select occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </div>
                            <div class="field guest">
                                <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    name="guests"
                                    onChange={onChangeHandler}
                                /> 
                                <span className="non-valid">{formError.guests}</span>
                            </div>
                            
                        </div>
                        <div class="field">
                                <label htmlFor="date">Date & Time</label>
                                <input 
                                    type="datetime-local" 
                                    name="date"
                                    onChange={onChangeHandler}
                                />
                                <span className="non-valid">{formError.date}</span>
                            </div>
                        <button className="reserve-btn" type="submit">Reserve</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReservationsContent