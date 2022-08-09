/**
 * @author Aravindhakumar Raman
 * @function App.js Main File 
 */
import React, { useEffect } from "react";
import {StyledOuterWrapper} from "../src/common_styles";
import DropDown from "../src/Components/DropDown/DropDown"
import TextDisplay from "../src/Components/TextDisplay/TextDisplay"
import TextLanguageDisplay from "./Components/TextArrayDisplay/TextLanguageDisplay"
import TextCurrencyDisplay from "./Components/TextArrayDisplay/TextCurrencyDisplay"
import { getFormValue } from "./fixture";
import { useStateSelector } from "./useStateSelector";
import {Grid} from "@mui/material";
import {Spinner} from "../src/spinner";

 /**
   * @method To Load the Component Based on the API Data
   * @param {*} all
   * @return all the components
   */
const App = () => {
  const { onChangeSelector = () => "",
    selectedCountry,
    onLoadCountryData,
    defaultListCountry,
    capitalCityOfTheCountry,
    currencyOfTheCountry,
    isLoading,
    languageOfTheCountry } = useStateSelector();
  useEffect(() => {
    onLoadCountryData();
  }, []);

  const { countryName,
    capitalCity,
    currency,
    language } = getFormValue({
      onChangeSelector, selectedCountry, defaultListCountry,
      capitalCityOfTheCountry, languageOfTheCountry,currencyOfTheCountry
    });
    
  return (
   isLoading ? <Grid><Spinner /> </Grid>:<StyledOuterWrapper>
      <Grid className="cls_country_text">
        Please select the Country Name
      </Grid>
      <DropDown {...countryName} />
      <Grid className="cls_language">
      <TextLanguageDisplay  {...language} />
      </Grid>
      <Grid className="cls_capital_city">
      <TextDisplay  {...capitalCity} />
      </Grid>
      <Grid className="cls_currency">
      <TextCurrencyDisplay  {...currency} />
      </Grid>
    </StyledOuterWrapper>
  );
}

export default App;
