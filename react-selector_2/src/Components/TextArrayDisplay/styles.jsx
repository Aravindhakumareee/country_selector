/**
 * @author Aravindhakumar Raman
 * @function TextArrayDisplay of the Country styles
 */
import { styled } from "@mui/material/styles";

const StyledLabelWrapper = styled("div")`
font-size:16px;
font-weight: 500;
margin-bottom: 5px;`

const StyledTextDisplayWrapper = styled("div")`
display: flex;
flex-direction:row;
`
const StyledTextValueWrapper = styled("div")`
margin-left: 10px;
font-size:14px;
color: blue;
margin-top: 3px;

`
export {StyledLabelWrapper,StyledTextDisplayWrapper,StyledTextValueWrapper}