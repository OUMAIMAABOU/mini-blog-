const db = require("../models");
const Commentaire = db.commentaire;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const commentaires = {
        email: req.body.email,
        nom: req.body.nom,
        commentaire: req.body.commentaire 
      };
          Commentaire.create(commentaires)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message 
          });
        });
};

// exports.findAllcommentaire = (req, res) => {
  
//   Commentaire.findAll()
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.send({
//         message:
//           err.message
//       });
//     });
// };
exports.findAllcommentaire = () => {
  return Commentaire.findAll()
}

exports.findOne = (req, res) => {
  
};
exports.updatecommentaire = (req, res) => {
  const id = req.params.id;
  const commentaires = {
    email: req.body.email,
    nom: req.body.nom,
    commentaire: req.body.commentaire 
  };

  Commentaire.update(commentaires, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating " + id
      });
    });
};
  


exports.delete = (req, res) => {
  const id = req.params.id;
  Commentaire.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/commentaire');


      } else {
        res.send({
          message: `not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: " id=" + id +"not existe"
      });
    });
};

// exports.delete = (req, res) => {
//     const id = req.params.id;
//    Commentaire.destroy( {where: { id: id }});
//    console.log(id)
//     res.render('/commentaire');
// }
