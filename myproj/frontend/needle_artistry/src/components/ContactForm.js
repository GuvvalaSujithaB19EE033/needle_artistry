import {
    Form,
    useNavigate,
    useNavigation,
    useActionData,
    json,
    redirect
} from 'react-router-dom';
import React, { useState,useRef } from 'react';
import classes from './ContactForm.module.css';

function generateTimeOptions() {
    const startTime = 10; // 10 AM
    const endTime = 19;   // 7 PM
    const timeOptions = [];

    for (let hour = startTime; hour <= endTime; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        timeOptions.push(time);
    }

    return timeOptions;
}

function ContactForm() {
    const titleRef = useRef('');
    const phoneNumberRef = useRef('');
    const dateRef = useRef('');
    const timeRef = useRef('');
    const descriptionRef = useRef('');
    async function AddAppointment(appointment) {
       
        const response = await fetch('http://127.0.0.1:8000/api/appointments', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    function submitHandler(event) {
        event.preventDefault();

        // could add validation here...

        const appointment = {
            name: titleRef.current.value,
            phone_number: phoneNumberRef.current.value,
            date: dateRef.current.value,
            time: timeRef.current.value,
            description: descriptionRef.current.value,
        };
        AddAppointment(appointment)

        
    }
    const timeOptions = generateTimeOptions();
    const [number, setNumber] = useState('');
    const [isvalidNumber, setIsValidNumber] = useState(true);

    function numberHandler(event) {
        const no = event.target.value;
        setNumber(no);
        validateNumber(no);
    }
    function validateNumber(no) {
        const isValid = /^\s*\d{10}$|^\s*\d{5}\s\d{5}\s*$/.test(no);
        setIsValidNumber(isValid);
    }


    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form onSubmit = { submitHandler } className={classes.form}>
            <p>
                <label htmlFor="title">Name</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    ref={titleRef}
                    required

                />
            </p>
            <p>
                <label htmlFor="phoneNumber">Phone Number</label> {/* New input for phone number */}
                <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    ref={phoneNumberRef}
                    required
                    onChange={numberHandler}
                />
                {!isvalidNumber && <span className={classes.error}>Phone Number must be 10 digits</span>}
            </p>
            <p>
                <label htmlFor="date">Appointment Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    ref={dateRef}
                    required

                />
            </p>
            <p>
                <label htmlFor="time">Appointment Time (between 10 AM and 7 PM)</label>
                <select id="time" name="time" ref={timeRef} required>
                    <option value="">Select Time</option>
                    {timeOptions.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </p>
            <p>
                <label htmlFor="description">Message</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    ref={descriptionRef}
                    required

                />
            </p>
            <div className={classes.actions}>
                <button type="button"  onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button className={classes.pls} style={{color:'white'}}  disabled={!isvalidNumber}>
                    Save
                </button>
            </div>
        </Form>
    );
}

export default ContactForm;

















// import {
//     Form,
//     useNavigate,
//     useNavigation,
//     useActionData,
//     json,
//     redirect
// } from 'react-router-dom';
// import React, { useState } from 'react';
// import classes from './ContactForm.module.css';

// function generateTimeOptions() {
//     const startTime = 10; // 10 AM
//     const endTime = 19;   // 7 PM
//     const timeOptions = [];

//     for (let hour = startTime; hour <= endTime; hour++) {
//         const time = `${hour.toString().padStart(2, '0')}:00`;
//         timeOptions.push(time);
//     }

//     return timeOptions;
// }

// function ContactForm(){
//     const timeOptions = generateTimeOptions();
//     const [number,setNumber]=useState('');
//     const [isvalidNumber, setIsValidNumber] = useState(true);
    
//     function numberHandler(event){
//         const no=event.target.value;
//         setNumber(no);
//         validateNumber(no);
//     }
//     function validateNumber(no){
//         const isValid = /^\s*\d{10}$|^\s*\d{5}\s\d{5}\s*$/.test(no);
//         setIsValidNumber(isValid);
//     }
  
    
//     const navigate = useNavigate();
//     const navigation = useNavigation();

//     const isSubmitting = navigation.state === 'submitting';

//     function cancelHandler() {
//         navigate('..');
//     }

//     return (
//         <Form className={classes.form}>
//             <p>
//                 <label htmlFor="title">Name</label>
//                 <input
//                     id="title"
//                     type="text"
//                     name="title"
//                     required
                 
//                 />
//             </p>
//             <p>
//                 <label htmlFor="phoneNumber">Phone Number</label> {/* New input for phone number */}
//                 <input
//                     id="phoneNumber"
//                     type="tel"
//                     name="phoneNumber"
//                     required
//                     onChange={numberHandler}
//                 />
//                 {!isvalidNumber&& <span className={classes.error}>Phone Number must be 10 digits</span>}
//             </p>
//             <p>
//                 <label htmlFor="date">Appointment Date</label>
//                 <input
//                     id="date"
//                     type="date"
//                     name="date"
//                     required
               
//                 />
//             </p>
//             <p>
//                 <label htmlFor="time">Appointment Time (between 10 AM and 7 PM)</label>
//                 <select id="time" name="time" required>
//                     <option value="">Select Time</option>
//                     {timeOptions.map((time) => (
//                         <option key={time} value={time}>
//                             {time}
//                         </option>
//                     ))}
//                 </select>
//             </p>
//             <p>
//                 <label htmlFor="description">Message</label>
//                 <textarea
//                     id="description"
//                     name="description"
//                     rows="5"
//                     required
                  
//                 />
//             </p>
//             <div className={classes.actions}>
//                 <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
//                     Cancel
//                 </button>
//                 <button className={classes.pls} disabled={!isvalidNumber}>
//                     Save
//                 </button>
//             </div>
//         </Form>
//     );
// }

// export default ContactForm;
