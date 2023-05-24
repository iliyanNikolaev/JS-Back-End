const Facility = require('../models/Facility');
const Item = require('../models/Item');

async function getAllFacilities(){
    return Facility.find({}).lean();
}

async function createFacility(label, iconUrl){
    return Facility.create({
        label,
        iconUrl
    }).lean();
}

async function addFacilitiesToItem(itemId, facilityIds){
    const item = await Item.findById(itemId).lean();

    item.facilities = [];
    
    const facilities = await Facility.find({_id: {$in: facilityIds}}).lean();

    facilities.forEach(f => item.facilities.push(f));

    await Item.findByIdAndUpdate(itemId, item).lean();
}

module.exports = {
    getAllFacilities,
    createFacility,
    addFacilitiesToItem
}