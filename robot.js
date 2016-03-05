var request = require('superagent')
var processFile = require('./csvreader.js').processFile

function formatCodMunicipio (cod) {
  return cod.slice(0, -1)
}

function replace (url, codMunicipio) {
  return url.replace('<codigo_ibge>', formatCodMunicipio(codMunicipio))
}

const cidadesFile = 'Fonte de dados - Municipios do ES.csv'
const url = 'http://sage.saude.gov.br/graficos/morbidade/dengueEpidemiologico.php?output=json&html&ibges=<codigo_ibge>&ufs=&co_agravo=2&rm=&tc=&re_giao=&cg=&qs='
// const urlComCodigo = url.replace('<codigo_ibge>', codDoMunicipioF)

processFile(cidadesFile, (data) => {
  const queriedUrl = replace(url, data[0])
  request.get(queriedUrl)
    .end(function (err, res) {
      if (err) console.log(err)
      else {
        console.log('queried url: ' + queriedUrl)
        console.log(eval('(' + res.text + ')'))
      }
    })
})
