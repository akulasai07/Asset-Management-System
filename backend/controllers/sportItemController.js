const SportSchema = require("../models/sportItemModel");

exports.addSport = async (req, res) => {
    const {
        type,
        sport_name,
        condition,
        last_maintenance_date,
        quantity_on_hand,
        reorder_level,
        usage_history,
        location
    } = req.body;

    const sportItem = new SportSchema({
        type,
        sport_name,
        condition,
        last_maintenance_date,
        quantity_on_hand,
        reorder_level,
        usage_history,
        location
    })

    try {
        // Validate required fields
        if ( !type || !sport_name || !condition || !quantity_on_hand || !reorder_level || !location) {
            return res.status(400).json({ message: 'Required fields must not be empty!' });
        }

        await sportItem.save();
        res.status(200).json({ message: 'Sport item successfully registered' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }

    console.log(sportItem);
};

exports.getSports = async (req, res) => {
    try {
        const sports = await SportSchema.find().sort({ createdAt: -1 });
        res.status(200).json(sports);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getSportById = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);

    try {
        const sportItem = await SportSchema.findById(id);
        if (!sportItem) {
            return res.status(404).json({ message: 'Sport item not found' });
        }
        res.status(200).json(sportItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteSport = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);

    try {
        const sportItem = await SportSchema.findByIdAndDelete(id);
        if (!sportItem) {
            return res.status(404).json({ message: 'Sport item not found' });
        }
        res.status(200).json({ message: 'Sport item deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateSportById = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);

    try {
        const sportItem = await SportSchema.findByIdAndUpdate(id, req.body, { new: true });
        if (!sportItem) {
            return res.status(404).json({ message: 'Sport item not found' });
        }
        res.status(200).json({ message: 'Sport item updated', sportItem });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};