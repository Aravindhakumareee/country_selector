/**
 * @author Aravindhakumar Raman
 * @function Capital of the Country Component 
 */
import React from 'react'
import { StyledLabelWrapper,StyledTextDisplayWrapper,StyledTextValueWrapper } from "./styles";

export default function TextDisplay(props) {
    const { label = "", values = "" } = props;
    return (
        <StyledTextDisplayWrapper>
           <StyledLabelWrapper>{label}</StyledLabelWrapper>
            <StyledTextValueWrapper>{values}</StyledTextValueWrapper>
        </StyledTextDisplayWrapper> 
    )
}
