import { BookingButtonContainer } from "./button.styles";

const BookingButton = ({ children, ...props}) => (
    <BookingButtonContainer data-testid="form-button" {...props}>{children}</BookingButtonContainer>
)

export default BookingButton;