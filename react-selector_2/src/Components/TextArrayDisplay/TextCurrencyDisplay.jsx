/**
 * @author Aravindhakumar Raman
 * @function CurrencyDisplay of the Country  Component
 */

import React from 'react'
import { StyledLabelWrapper, StyledTextDisplayWrapper, StyledTextValueWrapper } from "./styles";

export default function TextCurrencyDisplay(props) {
  const { label = "",values=[]} = props;
  return (
    <StyledTextDisplayWrapper>
      <StyledLabelWrapper>{label} </StyledLabelWrapper>
      {typeof (values) === "object" && values.map((itm)=>{
        return Object.entries(itm).map(entry => {
          let key = entry[0];
          let value = entry[1];
          return <div>
          <StyledTextValueWrapper>Currency : {key}</StyledTextValueWrapper>
          <StyledTextValueWrapper>Name :{value?.name} </StyledTextValueWrapper>
          <StyledTextValueWrapper>Symbol :{value?.symbol} </StyledTextValueWrapper>
          <br/>
          </div>
      });
      })}
    </StyledTextDisplayWrapper>
  )
}
