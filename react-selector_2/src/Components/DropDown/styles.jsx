/**
 * @author Aravindhakumar Raman
 * @function Dropdown styles // dropdown styles
 */
import { styled } from "@mui/material/styles";
import {NativeSelect} from '@mui/material';

const StyledDropdown = styled(NativeSelect)`
width: 100%;
margin-bottom: 20px;
color: #4f4f4f;
margin-top:2px;
border: 1px solid #d3d3d3;
  height:38px;
  width: 250px;
	.MuiNativeSelect-nativeInput
  {
    height:38px;
    width: 250px;
  }
`;

const StyledLabelWrapper = styled("div")`
font-size:16px;
font-weight: 500;
margin-bottom: 5px;
margin-top: 12px;`


export { StyledDropdown,StyledLabelWrapper };
export default StyledDropdown;
