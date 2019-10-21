const pets = require('../controllers/pets');

module.exports = function(app) {
    app.get("/api/petshelter", pets.GetAll);
    app.get("/api/petshelter/:_id", pets.GetOne);
    app.post("/api/petshelter", pets.Create);
    app.put("/api/petshelter/:_id/edit", pets.Update);
    app.delete("/api/petshelter/:_id", pets.Delete);
}