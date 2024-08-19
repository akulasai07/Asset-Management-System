const VehicleSchema = require("../models/vehicleModel")



exports.addVehicle = async (req, res) => {
    //console.log('Hello World');
    const { title, model, year, license_plate, insurance_provider, policy_number, insurance_start_date, insurance_end_date, maintenance_date, fuel_consumption, daily_usage_log, driver_information, insurance_document, vehicle_documents } = req.body

    const vehicle = VehicleSchema({
        title,
        model,
        year,
        license_plate,
        insurance_provider,
        policy_number,
        insurance_start_date,
        insurance_end_date,
        maintenance_date,
        fuel_consumption,
        daily_usage_log,
        driver_information,
        insurance_document,
        vehicle_documents
    })
    try {
        if( !title || !year || !model || !license_plate || !driver_information){
            return res.status(400).json({message: 'Required Fields must not be empty!'})
        }
        if(  !year === 'number'){
            return res.status(400).json({message: 'Enter a Valid year'})
        }
        await vehicle.save()
        res.status(200).json({message : 'Vehicle sucessfully registered'})
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }

    console.log(vehicle)
}

exports.getVehicle = async(req,res) =>{
    try {
        const vehicles= await VehicleSchema.find().sort({createdAt:-1})
        res.status(200).json(vehicles)
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
    }
}
exports.getVehicleById = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    VehicleSchema.findById(id)
        .then((vehicle) => {
            res.status(200).json(vehicle)
            
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.deleteVehicle = async(req,res) =>{
    const {id} = req.params;
    console.log(req.params)
    VehicleSchema.findByIdAndDelete(id)
        .then((vehicle) => {
            res.status(200).json({messgae : 'vehicle Deleted'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}

exports.updateVehicleById =async(req,res) =>{
    const {id} =req.params
    console.log(req.params)
    VehicleSchema.findByIdAndUpdate(id , req.body, { new: true })
        .then((vehicle) => {
            res.status(200).json({messgae : 'vehicle Updated'})
        })
        .catch((error)=>{
        res.status(500).json({message : 'Server Error'})
    })
}