const Cube = require('../models/Cube');

function getCubeById(id){
    return Cube.findById(id);
}

module.exports = {
    getCubeById
}