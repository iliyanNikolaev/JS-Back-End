## PLAN 
 1. collections
    * users

    * items
    --- laptops
    --- pc's
    
    * accessories
    --- brands
    --- cpu's
    --- gpu's

2. Models
    users {
        username: string,
        password: string
        cpuAds: [Types.ObjectId] ref("CPU's");
        laptopAds: [Types.ObjectId] ref("Laptops");
        questions: []
    }
  * items  
    laptops/pc's {
        brand: Types.ObjectId, ref["Brands"],
        cpu: Types.ObjectId, ref["CPU's"],
        gpu: Types.ObjectId, ref["GPU's"],
        ssd: String,
        price: Number
    }

  * accessories
    brands: {
        title: String,
        PCs: [Types.ObjectId] ref: ["PC's"],
        Laptops: [Types.ObjectId] ref: ["Laptops"]
    }

    cpu's: {
        title: String,
        PCs: [Types.ObjectId] ref: ["PC's"],
        Laptops: [Types.ObjectId] ref: ["Laptops"]
    }

    gpu's: {
        title: String,
        PCs: [Types.ObjectId] ref: ["PC's"],
        Laptops: [Types.ObjectId] ref: ["Laptops"]
    }

  * others
    questions: {
        buyer: [Types.ObjectId] ref: ["Users"],
        seller: [Types.ObjectId] ref: ["Users"],
        approved: boolean,
        phone: String
        address: String
    }

3. Views
    Home [non auth, auth]
    Register [non auth]
    Login [non auth]
    All Laptops [non auth, auth]
    All PC's [non auth, auth]
    Brands => All Laptops from brand, All PC's from brand [auth]
    CPU's => All Laptops with current CPU, All PC's with current CPU [auth]
    CPU's => All Laptops with current GPU, All PC's with current GPU [auth]

4. Functionalities
