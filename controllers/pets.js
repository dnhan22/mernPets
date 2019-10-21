const mongoose = require("mongoose");
const petShelter = mongoose.model ("petShelter");

class PetShelterController {
    GetAll(req, res) {
        petShelter.find().sort("Type").exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    GetOne(req, res) {
        petShelter.findOne({_id:req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    Create(req, res) {
        let pet = new petShelter(req.body);
        pet.save()
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    Update(req, res) {
        petShelter.findOneAndUpdate({_id:req.params._id}, req.body, { runValidators:true })
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    Delete(req, res) {
        petShelter.findOneAndDelete({_id:req.params._id})
        .then(() => res.json({status: "ok"}))
        .catch(err => res.json(err));
    }
}

module.exports = new PetShelterController();