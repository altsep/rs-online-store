// Create utility functions as modules in this directory, then duplicate export in this file. It will allow to separate functions into separate modules while having ability to export{ them} from './functions'. The folder name could be changed to utility or utilityFunctions
// Create component-related functions in their respective directories
export { handleHistory } from './handleHistory';
export { getCurrencyString } from './getCurrencyString';
export { updateURL } from './updateURL';
export { storeSearchString } from './storeSearchString';
export { getProductsLen } from './getProductsLen';
export { getSearchParamValue } from './getSearchParamValue';
