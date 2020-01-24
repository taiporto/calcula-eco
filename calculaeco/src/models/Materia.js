const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
    id_disciplina: {
        type: Number,
        required: true
    },
    nome_disciplina: {
        type: String,
        required: true
    },
    creditos: {
        type: Number,
        required: true
    },
    periodo: {
        type: Number,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    valido: {
        type: Number,
        required: true
    }
}, {collection: "materias"});

module.exports = mongoose.model('Materia', MateriaSchema);
