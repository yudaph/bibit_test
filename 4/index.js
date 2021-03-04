anagram = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
hasil = []
list = []
for (var i in anagram) {
  var kata = anagram[i]

  var urutan = kata.split('').sort().join('')

  if (hasil[urutan] != null) {
    hasil[urutan].push(kata)
  } else {
    list.push(urutan)
    hasil[urutan] = [kata]
  }
}
for (var i in list) {
  console.log(hasil[list[i]])
}
