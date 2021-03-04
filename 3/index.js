function newFunc(str) {
  const openBracket = str.indexOf('(')
  const closeBracket = str.indexOf(')')
  if (openBracket >= 0 && closeBracket >= 0) {
    return str.substring(openBracket + 1, closeBracket)
  } else {
    return ''
  }
}
console.log(newFunc(''))
