const opciones = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
            .command('crear', 'Crea una nueva tarea por hacer', opciones)
            .command('actualizar', 'Actualiza una nueva tarea por hacer', opciones)
            .command('borrar', 'Elimina una tarea que ha sido completada', opciones)
            .help()
            .argv;

module.exports = {
    argv
}