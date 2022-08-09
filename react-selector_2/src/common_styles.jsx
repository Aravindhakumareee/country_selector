/**
 * @author Aravindhakumar Raman
 * @function Common_Style // Entire Project
 */
import { styled } from "@mui/material/styles";

const StyledOuterWrapper = styled("div")`
width: 100%;
margin-left:10px;
margin-top:10px;

.cls_country_text
{
font-size:18px;
color: #eda012;
margin-top: 3px;
}

.cls_capital_city
{
margin-top:8px;
margin-left:7px;
}

.cls_currency
{
margin-top:5px;
margin-left:17px;
}

.cls_language
{
margin-top:5px;
margin-left:17px;
}
`;

export { StyledOuterWrapper };
export default StyledOuterWrapper;
