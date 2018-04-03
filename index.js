var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const puppyRouter = require('./routes/puppyRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/puppies', puppyRouter);

// puppyRouter.get('/api/puppies/:id', db.getSinglePuppy);
// puppyRouter.post('/api/puppies', db.createPuppy);
// puppyRouter.put('/api/puppies/:id', db.updatePuppy);
// puppyRouter.delete('/api/puppies/:id', db.removePuppy);


app.listen(3000, function () {
    console.log('port listening at 8080');
});
