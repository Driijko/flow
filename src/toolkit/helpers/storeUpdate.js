export default function storeUpdate(property, value, update) {
  return update(prev => {
    return {
      ...prev,
      [property]: value
    }
  })
}