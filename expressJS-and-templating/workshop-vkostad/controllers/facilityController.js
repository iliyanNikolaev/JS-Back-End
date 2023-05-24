const { createFacility } = require('../services/facilityService');

const facilityController = require('express').Router();

facilityController.get('/create', (req, res) => {
    res.render('createFacility', {
        title: 'Create new facility'
    });
});

facilityController.post('/create', async (req, res) => {
    try {
        const label = req.body.label;
        const iconUrl = req.body.iconUrl;
        if(label == '' || iconUrl == ''){
            throw new Error('All fields are required!');
        }

        await createFacility(label, iconUrl);

        res.redirect('/catalog');
    } catch (err) {
        res.render('createFacility', {
            title: 'Create new facility',
            error: err.message
        });
    }
});

module.exports = facilityController;