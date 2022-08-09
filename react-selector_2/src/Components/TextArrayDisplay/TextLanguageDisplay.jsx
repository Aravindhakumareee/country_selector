/**
 * @author Aravindhakumar Raman
 * @function LanguageDisplay of the Country  Component 
 */
import React from 'react'
import { StyledLabelWrapper, StyledTextDisplayWrapper, StyledTextValueWrapper } from "./styles";

export default function TextLanguageDisplay(props) {
  const { label = "",values=[]} = props;
  return (
    <StyledTextDisplayWrapper>
      <StyledLabelWrapper>{label} </StyledLabelWrapper>
      {typeof (values) === "object" && values.map((itm)=>{
        return Object.entries(itm).map(entry => {
          let key = entry[0];
          let value = entry[1];
          return <div>
            <StyledTextValueWrapper>Language Code: {key}</StyledTextValueWrapper>
            <StyledTextValueWrapper>Language Name : {value}</StyledTextValueWrapper>
            </div>
      });
      })}
    </StyledTextDisplayWrapper>
  )
}
