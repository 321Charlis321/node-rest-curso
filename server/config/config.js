//============================
//        Puerto
//============================

process.env.PORT = process.env.PORT || 3000;
puerto = process.env.PORT;

//============================
//       Entornno
//============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; // Si esta variable no existe supongo que estoy en dessarrollo 'dev'


//============================
//        Base de Datos
//============================

let urlBD;

if (process.env.NODE_ENV === 'dev') { // si esta en desarrollo
    urlBD = 'mongodb://localhost:27017/cafe';

} else {
    // urlBD = 'mongodb+srv://gibran1:D5CeLUjiVnRYJpNk@cluster0-eaqs3.mongodb.net/cafe';
    // urlBD = 'mongodb+srv://gibran1:D5CeLUjiVnRYJpNk@cluster0-eaqs3.mongodb.net/cafe?retryWrites=true&w=majority';
    urlBD = process.env.MONGO_URI;
}
process.env.URLBD = urlBD;