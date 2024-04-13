// //ideal 
// const express = require('express');
// const mongoose = require("mongoose")
// const dotenv = require('dotenv')
// const cors = require('cors')
// //const port = process.env.PORT || 8000;
// port = 8000;



// // const bodyParser = require('body-parser');

//  require('./config/connect');
// //const PORT = process.env.PORT || 3000;
// const app = express();
// app.use(express.json());
// app.use(cors())
// //

// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());
// // app.use(pino);

// //app.use(express.static(__dirname + '/'));


// const medecinRouter = require("./Routes/medecin.route");
// const patientRouter = require("./Routes/patient.route");
// const specialiteRouter = require("./routes/specialite.route");
// const rendRouter = require("./Routes/rend.route");
// const userRouter = require("./Routes/user.route");
// const adminRouter = require("./Routes/admin.route");
// const consRouter = require("./Routes/cons.route");
// const ordRouter = require("./Routes/ord.route");
// const dosRouter = require("./Routes/dossmedicale.route");
// // const dispoRouter = require("./Routes/dispo.route");
// dotenv.config()


// //BodyParser Middleware


// mongoose.set("strictQuery", false);
// // // Connexion à la base données
// // mongoose.connect('mongodb://localhost:27017/doctor', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })
// //     .then(() => {
// //         console.log (`Server running at http://localhost:${port}/`);
// //     }).catch(err => {
// //         console.log('Impossible de se connecter à la base de données', err);
// //         process.exit();
// //     });
// // app.get("/", (req, res) => {
// //     res.send("hi ");
// // });
// app.use('/api/user', userRouter);
// app.use('/api/medecin', medecinRouter);
// app.use('/api/patient', patientRouter );
// app.use('/api/admin',adminRouter);
// app.use('/api/specialite', specialiteRouter );
// // app.use('/api/disponibilite', disponibiliteRoute);
// app.use('/api/rend' , rendRouter)
// app.use('/api/ord' , ordRouter)
// app.use('/api/doss', dosRouter)
// app.use('/api/cons',consRouter)


// // app.use('/api/dispo', dispoRouter);
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// })

// //
const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

// Connexion à la base de données
mongoose.connect("mongodb://localhost:27017/doctor", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database");
}).catch(err => {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Quitte l'application en cas d'échec de connexion à la base de données
});

// Importation des routes
const medecinRouter = require("./routes/medecin.route");
const patientRouter = require("./Routes/patient.route");
const specialiteRouter = require("./routes/specialite.route");
const rendRouter = require("./Routes/rend.route");
const userRouter = require("./routes/user.route");
const adminRouter = require("./Routes/admin.route");
const consRouter = require("./Routes/cons.route");
const ordRouter = require("./Routes/ord.route");
const dosRouter = require("./Routes/dossmedicale.route");

// Utilisation des routes
app.use('/api/user', userRouter);
app.use('/api/medecin', medecinRouter);
app.use('/api/patient', patientRouter);
app.use('/api/admin', adminRouter);
app.use('/api/specialite', specialiteRouter);
app.use('/api/rend', rendRouter);
app.use('/api/ord', ordRouter);
app.use('/api/doss', dosRouter);
app.use('/api/cons', consRouter);


// Démarrage du serveur
const port = 3000; // Vous pouvez modifier ce port si nécessaire
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

