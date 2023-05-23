const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function main(){
    mongoose.set('strictQuery', false); 
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb', );

    console.log('database connected!');
    try {
        /* 
        const cat = await readCat('Siso');
        console.log(cat); */

        await deleteCat('646ced1957923d783598ff2b');
        console.log('Deleted!');

    } catch (error) {
        console.log(error.message);
    }

    mongoose.disconnect();
}

main();

async function createCat(name, age, breed){
    /* const cat = new Cat({
        name,
        age, 
        breed
    }); */
    
    // await cat.save();
    
    await Cat.create({
        name,
        age,
        breed
    });

}

async function readCats(){
    const cats = await Cat.find();

    return cats;
}

async function readCat(name){
    const cat = await Cat.findOne({name});
    //const cat = await Cat.findById('646ca499161d22a474b7be7a');

    return cat;
}

async function updateCat(id, newName){
    //await Cat.updateOne({ name }, { name: newName });
    await Cat.findByIdAndUpdate(id, {name: newName});
}

async function deleteCat(id){
    await Cat.findByIdAndDelete(id);
}
