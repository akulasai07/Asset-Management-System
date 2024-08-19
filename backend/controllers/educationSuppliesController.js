const EducationSuppliesSchema = require("../models/educationSuppliesModel")



exports.addEducationSupplies = async (req, res) => {
    //console.log('Hello World');
    const {  type,
                subject_or_grade,
                quantity_on_hand,
                reorder_level,
                condition,
                last_purchase_date,
                location } = req.body

    const educationSupply = EducationSuppliesSchema({
        type,
        subject_or_grade,
        quantity_on_hand,
        reorder_level,
        condition,
        last_purchase_date,
        location
    })
    try {
        if( !type || !location ){
            return res.status(400).json({message: 'Required Fields must not be empty!'})
        }
        
        await educationSupply.save()
        res.status(200).json({message : 'EducationSupplies sucessfully registered'})
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }

    console.log(educationSupply)
}

exports.getEducationSupplies = async(req,res) =>{
    try {
        const educationSupplys= await EducationSuppliesSchema.find().sort({createdAt:-1})
        res.status(200).json(educationSupplys)
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }
}
exports.getEducationSuppliesById = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    EducationSuppliesSchema.findById(id)
        .then((educationSupply) => {
            res.status(200).json(educationSupply)
            
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.deleteEducationSupplies = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    EducationSuppliesSchema.findByIdAndDelete(id)
        .then((educationSupply) => {
            res.status(200).json({messgae : 'educationSupply Deleted'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.updateEducationSuppliesById =async(req,res) =>{
    const {id} =req.params
    console.log(req.params)
    EducationSuppliesSchema.findByIdAndUpdate(id , req.body, { new: true })
        .then((educationSupply) => {
            res.status(200).json({messgae : 'educationSupply Updated'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}