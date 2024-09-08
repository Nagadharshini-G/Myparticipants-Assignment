import express from 'express';
import pg from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
const port = 5000;
dotenv.config();

const pool = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/availability', async (req, res) => {
    const { start_time, end_time, duration } = req.body;
    if (!start_time || !end_time) {
        return res.status(400).send('Start time and end time are required.');
    }
    try {
        await pool.query(
            'INSERT INTO availability (start_time, end_time, duration) VALUES ($1, $2, $3)',
            [start_time, end_time, duration]
        );
        res.status(201).send('Availability added');
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error adding availability');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});