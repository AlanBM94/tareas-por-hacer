const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
        fs.writeFile(`bd/data.json`, data, (err) => {
          if (err) throw new Error('No se pudo grabar');
        });
}


const cargarBD = () => {
    try {
        listadoPorHacer = require('../bd/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = descripcion => {
    cargarBD();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    cargarBD();
    guardarDB();
    return porHacer;
}


const obtenerListado = () => {
    cargarBD();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarBD();
    let indexEliminado = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(indexEliminado >= 0) listadoPorHacer.splice(indexEliminado, 1);
    else console.log('Esa tarea no existe');
    guardarDB();
    return descripcion;
}


module.exports = {
    crear,
    obtenerListado,
    actualizar,
    borrar
}