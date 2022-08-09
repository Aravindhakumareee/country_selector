/**
 * @author Aravindhakumar Raman
 * @function Fixture File / MockData File (No Data File)
 */

  /**
   * @method To Load the Component Based on the API Data
   * @param {*} all
   * @return Country,Language, Currency , Capital of the Country Components
   */
export const getFormValue = ({ onChangeSelector = () => "", selectedCountry = "", defaultListCountry = [],
  languageOfTheCountry = [],capitalCityOfTheCountry =[],currencyOfTheCountry=[] }) => {
    const countryName = {
    inputProps: {
      style: {
        height: "15px",
      },
    },
    className: "cls_Country_Name",
    placeholder: "Country Name",
    label: "Country Name",
    id: "countryName",
    type: "countryName",
    name: "countryName",
    defaultOption: "Select the Country Name",
    options: defaultListCountry,
    onChange: e => {
      onChangeSelector(e);
    },
    value: selectedCountry
  };

  const language =
  {
    label:"Language of the country",
    values:languageOfTheCountry
  }

  const capitalCity =
  {
    label:"Capital city of the country",
    values:capitalCityOfTheCountry
  }

  const currency  =
  {
    label:"Currency of the country",
    values:currencyOfTheCountry
  }
  return {
    countryName,
    capitalCity,
    currency,
    language
  };
}