import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
    id_reserva: {
        type: Number,
        required: true,
        unique: true
    },
    nome_cliente: {
        type: String,
        required: true
    },
    numero_quarto: {
        type: Number,
        required: true
    },
    data_checkin: {
        type: Date,
        required: true
    },
    data_checkout: {
        type: Date,
        required: true
    },
    valor_reserva: {
        type: Number,
        required: true
    }
});

const Reserva = mongoose.model('Reserva', reservaSchema);

export default Reserva;