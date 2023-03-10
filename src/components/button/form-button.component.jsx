import { FormButtonContainer } from "./button.styles";

const FormButton = ({ text, ...otherProps }) => (
    <FormButtonContainer data-testid="form-button" {...otherProps}>{text}</FormButtonContainer>
)

export default FormButton;