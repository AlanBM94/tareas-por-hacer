const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colores = require('colors');
let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let lista = porHacer.obtenerListado();
        for(let tarea of lista){
            console.log('-----------Tarea por hacer-----------------'.green);
            console.log(`${tarea.descripcion}`.blue);
            console.log(`Estado: ${tarea.completado}`.red);
            console.log('-------------------------------------------'.green);
        }
    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`La tarea ${borrado} ha sido eliminado de la bd`);
    break;
    default:
        console.log('Comando no reconocido');
}
