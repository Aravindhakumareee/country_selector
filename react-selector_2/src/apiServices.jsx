/**
 * @author Aravindhakumar Raman
 * @function ApiServices ApiServices File 
 */
import axios from "axios";

export const getGetAPI = props => {
    const {
      prefixUrl = "",
      pathName = "",
    } = props;
    return axios.get(`${prefixUrl}${pathName}`);
  };

  export default getGetAPI;