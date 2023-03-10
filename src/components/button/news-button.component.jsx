import { NewsButtonContainer } from "./button.styles";

const NewsButton = ({ text, ...otherProps }) => (
    <NewsButtonContainer data-testid="form-button" {...otherProps}>{text} &rarr;</NewsButtonContainer>
)

export default NewsButton;