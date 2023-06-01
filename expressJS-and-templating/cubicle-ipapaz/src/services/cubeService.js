const Cube = require('../models/Cube');

function getCubeById(cubeId){
    return Cube.findById(cubeId);
}

function editCube(cubeId, cubeData) {
    return Cube.findByIdAndUpdate(cubeId, cubeData, { runValidators: true }); // валидаторите сме ги сетнали на true за да не се подаде някое празно поле
}

module.exports = {
    getCubeById,
    editCube
}