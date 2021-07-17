// Selecionar Títulos

var $tituloParana = $('#parana')
var $tituloSanta = $('#santa-catarina')
var $tituloRio = $('#rio-grande')

// Selecionar Botões

var $botaoParana = $('#paranaButton')
var $botaoSanta = $('#santa-catarinaButton')
var $botaoRio = $('#rio-grandeButton')

// Selecionar Fotos Capitais

var $fotoCuritiba = $('#curitiba')
var $fotoFloripa = $('#floripa')
var $fotoPorto = $('#porto')

// Selecionar Legendas Fotos

var $curitiba = $('#legendaParana')
var $floripa = $('#legendaSanta')
var $porto = $('#legendaRio')

// Selecionar Bandeiras

var $bandeiraParana = $('#bandeiraParana')
var $bandeiraSanta = $('#bandeiraSanta')
var $bandeiraPorto = $('#bandeiraRio')


// Selecionar Informações Adicionais

var $infoParana = $('#infoParana')
var $infoSanta = $('#infoSanta')
var $infoRio = $('#infoRio')

// Inicio do Código

$tituloSanta.hide()
$tituloRio.hide()

$fotoFloripa.hide()
$fotoPorto.hide()

$floripa.hide()
$porto.hide()

$bandeiraSanta.hide()
$bandeiraPorto.hide()

$infoSanta.hide()
$infoRio.hide()

// Botão Paraná Pressionado

$botaoParana.on('click', function (event) {

    event.preventDefault()

    $tituloParana.show()
    $tituloSanta.hide()
    $tituloRio.hide()
    
    $fotoCuritiba.show()
    $fotoFloripa.hide()
    $fotoPorto.hide()
    
    $curitiba.show()
    $floripa.hide()
    $porto.hide()
    
    $bandeiraParana.show()
    $bandeiraSanta.hide()
    $bandeiraPorto.hide()
    
    $infoParana.show()
    $infoSanta.hide()
    $infoRio.hide()

})

// Botão Santa Catarina Pressionado

$botaoSanta.on('click', function (event) {
    
    event.preventDefault()

    $tituloParana.hide()
    $tituloSanta.show()
    $tituloRio.hide()
    
    $fotoCuritiba.hide()
    $fotoFloripa.show()
    $fotoPorto.hide()
    
    $curitiba.hide()
    $floripa.show()
    $porto.hide()
    
    $bandeiraParana.hide()
    $bandeiraSanta.show()
    $bandeiraPorto.hide()
    
    $infoParana.hide()
    $infoSanta.show()
    $infoRio.hide()

})

// Botão Rio Grande do Sul Pressionado

$botaoRio.on('click', function (event) {

    event.preventDefault()

    $tituloParana.hide()
    $tituloSanta.hide()
    $tituloRio.show()
    
    $fotoCuritiba.hide()
    $fotoFloripa.hide()
    $fotoPorto.show()
    
    $curitiba.hide()
    $floripa.hide()
    $porto.show()
    
    $bandeiraParana.hide()
    $bandeiraSanta.hide()
    $bandeiraPorto.show()
    
    $infoParana.hide()
    $infoSanta.hide()
    $infoRio.show()
})