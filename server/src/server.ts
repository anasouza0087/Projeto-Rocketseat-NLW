import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Lista de usuários');

    response.json([
        'Ana',
        'Paula',
        'Pitty',
    ])
});

app.listen(3333);
