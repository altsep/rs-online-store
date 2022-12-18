// Create utility functions as modules in this directory, then duplicate export in this file. It will allow to separate functions into separate modules while having ability to import them from './functions'. The folder name could be changed to utility or utilityFunctions
// Create component-related functions in their respective directories
import handleHistory from './handleHistory';

// eslint-disable-next-line import/prefer-default-export
export { handleHistory }; // Assumed to have multiple exports
