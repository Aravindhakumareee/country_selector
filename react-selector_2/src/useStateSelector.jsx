/**
 * @author Aravindhakumar Raman
 * @function To handle all the state & Function
 */
import {useState} from "react";
import getGetAPI from "./apiServices";
import { apiDomainURL } from "./redirectConfig";

export const useStateSelector = () => {

  const [defaultListCountry, setDefaultListCountry] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [languageOfTheCountry,setLanguageOfTheCountry]= useState();
  const [capitalCityOfTheCountry,setCapitalCityOfTheCountry]= useState();
  const [isLoading,setIsLoading] = useState(false);
  const [currencyOfTheCountry,setCurrencyOfTheCountry]= useState();

  /**
   * @method To Load the Country List While Loading the Screen
   * @param {*} all
   * @return Country List Values
   */
  const onChangeSelector = (e) => {
    let prefixUrl = apiDomainURL;
    let pathName = `name/${e.target.value}`;
    setSelectedCountry(e.target.value);
    getGetAPI({ pathName, prefixUrl }).then(response => {
      const { data = {} } = response || {};
      let capitalName = data.map((value) => (value.capital[0]));
      setCapitalCityOfTheCountry(capitalName);
      let languageName = data.map((value) => (value.languages));
      let currency = data.map((value) => (value.currencies))
      setCurrencyOfTheCountry(currency);
      setLanguageOfTheCountry(languageName);
    })
      .catch(error => {
        console.log("Error",error)
      });
  }

  /**
   * @method To Filter the Language, Currency , Capital of the Country Based on the Country Name
   * @param {*} countryName
   * @return Language, Currency , Capital of the Country data
   */
  const onLoadCountryData = () => {
    setIsLoading(true);
    let prefixUrl = apiDomainURL;
    let pathName = "all";
    getGetAPI({ pathName, prefixUrl }).then(response => {
      const { data = {} } = response || {};
      let countryName = data.map((value) => (value.name.common))
      setDefaultListCountry(countryName);
      setIsLoading(false);
    })
    .catch(error => {
      setIsLoading(false);
      console.log("Error",error)
    });
  }

  return {
    onChangeSelector,
    selectedCountry,
    onLoadCountryData,
    defaultListCountry, 
    setDefaultListCountry,
    capitalCityOfTheCountry,
    languageOfTheCountry,
    currencyOfTheCountry,
    isLoading
  }
}
