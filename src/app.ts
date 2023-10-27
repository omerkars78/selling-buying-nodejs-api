// import express from 'express';
// import { sequelize, User, Product, Message, Like, Comment, Payment, Invoice, PaymentCard } from './models';

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('API is running...');
// });

// const initializeDatabase = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Database connection has been established successfully.');

//         await sequelize.sync({force:true});

//         app.listen(PORT, () => {
//             console.log(`Server is running on http://localhost:${PORT}`);
//         });
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// };

// initializeDatabase();
// app.ts
import express from 'express';
import { sequelize, User, Product, Message, Like, Comment, Payment, Invoice, PaymentCard } from './models';
import cors from 'cors';

// Diğer import ifadeleri ...

const app = express();
const PORT = 3000;

// CORS politikasını etkinleştir
app.use(cors({
    origin: 'http://localhost:3001',  // Frontend uygulamanızın URL'si
    credentials: true,
}));

// Diğer middleware ve rotalar ...

const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        await sequelize.sync({force:true});

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

initializeDatabase();
