import BookingButton from 'components/button/booking-button.jsx';
import Input from 'components/input/input.component.jsx';
import React from 'react';
import { BookingFormContainer } from './booking-form.styles.jsx'

const initialState = {
    fullName: '',
    email: '',
    rideSize: 'small'
}

const inputSource = [
    {
        id: 1,
        type: 'email',
        placeholder: 'Email',
        name: 'email'
    },
    {
        id: 2,
        type: 'fullName',
        placeholder: 'Full Name',
        name: 'fullName'
    }
]

const BookingForm = (props) => {
    const [data, setData] = React.useState(initialState);
    const onChange = (event) => {
        const { value, name } = event.target;
        setData({ ...data, [name]: value})
    }
    const onSubmit = (event) => {
        event.preventDefault();

        const { fullName, email } = data;

        // Submit
        // alert('Booked')
    }
    return ( 
        <BookingFormContainer data-testid="booking-form" onSubmit={onSubmit}>
            {
                inputSource.map(input => (
                    <Input key={input.id} value={data[input.name]} onChange={onChange} {...input} />
                ))
            }
            <BookingButton></BookingButton>
        </BookingFormContainer>
    )
}

export default BookingForm;

