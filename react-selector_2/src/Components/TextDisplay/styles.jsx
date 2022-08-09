/**
 * @author Aravindhakumar Raman
 * @function Capital of the Country Style // Text style
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
margin-top: 2px;
color: blue;
`
export {StyledLabelWrapper,StyledTextDisplayWrapper,StyledTextValueWrapper}