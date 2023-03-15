import { HeadingTertiary } from 'assets/styles/typography.js';
import BookingForm from 'components/display/booking-form/booking-form.component.jsx';
import React from 'react';
import { BookingContainer, BookingSectionContainer } from './booking-section.styles.jsx'

const BookingSection = (props) => {
    return ( 
        <BookingSectionContainer id="booking-section" data-testid="booking-section">
            <BookingContainer>
                <HeadingTertiary>
                    Book your ride now.
                </HeadingTertiary>
                <BookingForm/>
            </BookingContainer>
        </BookingSectionContainer>
    )
}

export default BookingSection;

