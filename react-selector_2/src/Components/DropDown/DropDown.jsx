/**
 * @author Aravindhakumar Raman
 * @function Dropdown Component // Dropdown Component
 */
import React from 'react'
import { FormControl, FormHelperText } from '@mui/material';
import { StyledDropdown,StyledLabelWrapper } from "./styles";

const DropDown = (props) => {
  const { label = "", name = "", defaultOption = "", helperText = "", value = "", onChange = () => "", className = "", options = []} = props;
  return (
    <FormControl>
      <StyledLabelWrapper>{label}</StyledLabelWrapper>
      <StyledDropdown
        className={className}
        onChange={onChange}
        name={name}
        value={value}
      >
        <option>
          {defaultOption}
          </option>
        {options?.map((optionValue,index) => {
          return <option key={optionValue + index} value={optionValue}>
            {optionValue}
          </option>
        })}
      </StyledDropdown >
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export { DropDown };
export default DropDown;