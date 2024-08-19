const SafetySchema = require("../models/safetyModel")



exports.addSafetyItem = async (req, res) => {
    //console.log('Hello World');
    const {  type,
    manufacturer,
    certification,
    last_inspection_date,
    next_inspection_due,
    location,
    usage_history,
    warranty_information } = req.body

    const safetyItem = SafetySchema({
        type,
    manufacturer,
    certification,
    last_inspection_date,
    next_inspection_due,
    location,
    usage_history,
    warranty_information 
    })
    try {
        if( !type || !manufacturer || !location || !warranty_information ){
            return res.status(400).json({message: 'Required Fields must not be empty!'})
        }
        
        await safetyItem.save()
        res.status(200).json({message : 'Safety Item sucessfully registered'})
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }

    console.log(safetyItem)
}

exports.getSafetyItem = async(req,res) =>{
    try {
        const safetyItems= await SafetySchema.find().sort({createdAt:-1})
        res.status(200).json(safetyItems)
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }
}
exports.getSafetyItemById = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    SafetySchema.findById(id)
        .then((safetyItem) => {
            res.status(200).json(safetyItem)
            
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.deleteSafetyItem = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    SafetySchema.findByIdAndDelete(id)
        .then((safetyItem) => {
            res.status(200).json({messgae : 'safetyItem Deleted'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.updateSafetyItemById =async(req,res) =>{
    const {id} =req.params
    console.log(req.params)
    SafetySchema.findByIdAndUpdate(id , req.body, { new: true })
        .then((safetyItem) => {
            res.status(200).json({messgae : 'safetyItem Updated'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}