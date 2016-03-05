var csv = require('fast-csv')

exports.processFile = function (fileName, fn) {
  var s = csv.fromPath(fileName)
  s.on('data', function (data) {
    fn(data)
  })
}

// this.processFile('Fonte de dados - Fontes.csv', console.log)

