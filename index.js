const app = require('./app');
const cabinRouter = require('./route/cabin.route');
const doctorRouter = require('./route/doctor.route');

app.use('/doctor', doctorRouter);
app.use('/cabin', cabinRouter);

app.listen(3000, () => console.log('servidor escuchando por el puerto 3000'));
