var csv = require('fast-csv')

exports.processFile = function (fileName, fn) {
// const fileName = 'Fonte de dados - Municipios do ES.csv'
  var s = csv.fromPath(fileName)
  s.on('data', function (data) {
    fn(data)
  })
}
