const FurnitureSchema = require("../models/furnitureModel")


exports.addFurniture = async (req, res) => {
    //console.log('Hello World');
    const { type,
    material,
    manufacturer,
    condition,
    last_maintenance_date,
    maintenance_history,
    location,
    purchase_date,
    cost,
    vendor_information} = req.body

    const furniture = FurnitureSchema ({
        type,
        material,
        manufacturer,
        condition,
        last_maintenance_date,
        maintenance_history,
        location,
        purchase_date,
        cost,
        vendor_information
    })
    try {
        if( !type || !purchase_date || !cost || !vendor_information){
            return res.status(400).json({message: 'Required Fields must not be empty!'})
        }
        if(  !cost === 'number'){
            return res.status(400).json({message: 'Enter a Correct Amount'})
        }
        await furniture.save()
        res.status(200).json({message : 'Furniture sucessfully registered'})
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }

    console.log(furniture)
}

exports.getFurniture = async(req,res) =>{
    try {
        const furnitures = await FurnitureSchema.find().sort({createdAt:-1})
        res.status(200).json(furnitures)
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }
}

exports.getFurnitureById = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    FurnitureSchema.findById(id)
        .then((furniture) => {
            res.status(200).json(furniture)
            
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.deleteFurniture = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    FurnitureSchema.findByIdAndDelete(id)
        .then((furniture) => {
            res.status(200).json({messgae : 'Furniture Deleted'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.updateFurnitureById =async(req,res) =>{
    const {id} =req.params
    console.log(req.params)
    FurnitureSchema.findByIdAndUpdate(id , req.body, { new: true })
        .then((furniture) => {
            res.status(200).json({messgae : 'Furniture Updated'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}