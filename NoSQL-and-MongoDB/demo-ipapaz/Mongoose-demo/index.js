const mongoose = require('mongoose');

//creating Schema and model
const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    breed: String
});

//Method
catSchema.methods.sayHi = function(){
    console.log(`${this.name} says meooow...`);
}

//Virtual property
catSchema.virtual('info').get(function(){
    return `Cat info: -name: ${this.name} -breed: ${this.breed}`; 
})

const Cat = mongoose.model('Cat', catSchema);


async function main(){
    mongoose.set('strictQuery', false); 
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb', );

    console.log('database connected!');
    try {
        const cats = await readCats();
        cats.forEach(x => {
            x.sayHi();
            console.log(x.info);
        });
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
