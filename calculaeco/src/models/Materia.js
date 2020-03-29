const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
    id_disciplina: {
        type: String
    },
    nome_disciplina: {
        type: String
    },
    creditos: {
        type: String
    },
    periodo: {
        type: String
    },
    curso: {
        type: String
    },
    valido: {
        type: String
    }
}, {collection: 'materias'});

MateriaSchema.set('toObject', { virtuals: true })

module.exports = mongoose.model('Materia', MateriaSchema);
