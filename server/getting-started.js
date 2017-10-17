var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');

mongoose.connection.on('connected', function(){
    console.log('MongoDB connected success.....');
});

mongoose.connection.on('error', function(){
    console.log('MongoDB connected error.....');
});

mongoose.connection.on('disconnected', function(){
    console.log('MongoDB connected disconnected.....');
});

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });

console.log(silence.name); // 'Silence'

