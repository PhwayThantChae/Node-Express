
// Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options
});

const connection = 'postgres://postgres:root@localhost/puppies';
// const connection = 'postgres://localhost:5432/puppies'
const db = pgp(connection);

var getAllPuppies = (req,res,next) => {
    db.any('select * from pups')
    .then(function (data) {
        res.status(200)
        .json({
            status: 'success',
            data: data,
            message: 'Retreived all puppies'
        });
    })
    .catch(function(err) {
        return next(err);
    })
}

module.exports = {
    getAllPuppies: getAllPuppies
    // getSinglePuppy: getSinglePuppy,
    // createPuppy: createPuppy,
    // updatePuppy: updatePuppy,
    // removePuppy: removePuppy
  };