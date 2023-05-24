const { getById } = require('../services/databaseService');
const { createFacility, getAllFacilities, addFacilitiesToItem } = require('../services/facilityService');

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
        if (label == '' || iconUrl == '') {
            throw new Error('All fields are required!');
        }

        await createFacility(label, iconUrl);

        res.redirect('/catalog');
    } catch (err) {
        res.render('createFacility', {
            title: 'Create new facility',
            error: [err.message]
        });
    }
});

facilityController.get('/:itemId/addToItem', async (req, res) => {
    const item = await getById(req.params.itemId);
    const facilities = await getAllFacilities();

    res.render('addFacilityToItem', {
        title: 'Add Facility',
        facilities,
        item
    });
});

facilityController.post('/:itemId/addToItem', async (req, res) => {
    await addFacilitiesToItem(req.params.itemId, Object.keys(req.body));
    const item = await getById(req.params.itemId);
    res.render('details', {
        title: 'Details',
        item
    })
});

module.exports = facilityController;