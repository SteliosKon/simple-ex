const dateFormatter = (date) => {
  return date.split('').reverse().join('').replaceAll('-', '/')
}

export default dateFormatter
