// A generic function for updating Svelte stores. It has two main modes.
// If the parameter 'relative' is not given a value, the function simply
// assigns the 'value' argument to the specified property of the store's 
// object. If 'relative' is given the value 'true', we can use a function
// for the 'value' argument that references the store object.

export default function storeUpdate(property, value, update, relative) {
  if (relative) {
    return update(prev => {
      return {
        ...prev,
        [property]: value(prev),
      }
    })
  }
  else {
    return update(prev => {
      return {
        ...prev,
        [property]: value,
      }
    })
  }
}