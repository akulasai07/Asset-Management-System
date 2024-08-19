const ElectronicSchema = require("../models/electronicModel")



exports.addElectronic = async (req, res) => {
    //console.log('Hello World');
    const {  type,
            brand,
            model,
            specifications,
            condition,
            installed_software,
            service_history,
            warranty_information,
            location } = req.body

    const electronic = ElectronicSchema({
        type,
        brand,
        model,
        specifications,
        condition,
        installed_software,
        service_history,
        warranty_information,
        location
    })
    try {
        if( !type || !brand || !model || !location || !warranty_information){
            return res.status(400).json({message: 'Required Fields must not be empty!'})
        }
        
        await electronic.save()
        res.status(200).json({message : 'Electronic sucessfully registered'})
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }

    console.log(electronic)
}

exports.getElectronic = async(req,res) =>{
    try {
        const electronics= await ElectronicSchema.find().sort({createdAt:-1})
        res.status(200).json(electronics)
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }
}
exports.getElectronicById = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    ElectronicSchema.findById(id)
        .then((electronic) => {
            res.status(200).json(electronic)
            
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.deleteElectronic = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    ElectronicSchema.findByIdAndDelete(id)
        .then((electronic) => {
            res.status(200).json({messgae : 'electronic Deleted'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.updateElectronicById =async(req,res) =>{
    const {id} =req.params
    console.log(req.params)
    ElectronicSchema.findByIdAndUpdate(id , req.body, { new: true })
        .then((electronic) => {
            res.status(200).json({messgae : 'electronic Updated'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}