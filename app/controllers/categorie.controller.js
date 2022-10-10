const { categorie } = require("../models");
const db = require("../models");
const Categorie = db.categorie;
const Op = db.Sequelize.Op;

    exports.create = (req, res) => {
        const categories = {
            name: req.body.name,
            update: req.body.update,
            delete: req.body.delete 
        };
        Categorie.create(categories).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
    };

    exports.findAllCategories = (req, res  ) => {
        categorie.findAll({ order: [
          ['id', 'DESC']
      ],})
        .then(data => {
            res.render('categories',{'categories':data,'is_linked':'categories'})
          })
      .catch(err => {
            console.log(err )  
      });
    }

    exports.findOne = (req, res) => {
        const id = req.params.id;
    
        categorie.findByPk(id)
        .then(data => {
            if (data) {
            res.send(data);
            } else {
            res.status(404).send({
                message: `Cannot find Tutorial with id=${id}.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving Tutorial with id=" + id
            });
        });
    };

    exports.update = (req, res) => {
        const id = req.params.id;
    
        categorie.update(req.body, {
        where: { id: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "categorie was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update categorie with id=${id}. Maybe categorie was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating categorie with id=" + id
            });
        });
    };

    exports.delete = (req, res) => {
        const id = req.params.id;
    
        categorie.destroy({
        where: { id: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Categorie was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete Categorie with id=${id}. Maybe Categorie was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Categorie with id=" + id
            });
        });
    };