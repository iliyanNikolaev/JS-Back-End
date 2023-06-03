const express = require('express');

function isCubeOwner(cube, userId, response){
    if(cube.owner != userId){
        return response.render('404', {error: 'You are not owner to this cube'});
    }
};


module.exports = isCubeOwner;