const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let tarefas = [
    { id: 1, descricao: 'Estudar Swagger', finalizada: false },
    { id: 2, descricao: 'Criar uma API', finalizada: false },
];

//Rota para obter todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

//Rota para obter uma tarefa específica
app.get('/tarefas/:id', (req, res) => {
    const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
    tarefa ? res.json(tarefa) : res.status(404).json({mensagem: 'Tarefa não encontrada'});
});

//Rota para criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        descricao: req.body.descricao,
        finalizada: req.body.finalizada
    };
    tarefas.push(novaTarefa); // Corrigido: antes estava "tarefa"
    res.status(201).json(novaTarefa);
});


//Rota para atualizar uma tarefa
app.put('/tarefas/:id', (req, res) => {
    const index = tarefas.findIndex(t => t.id === parseInt(req.params.id));
    if (index !== -1) {
        tarefas[index] = {...tarefas[index], ...req.body};
        res.json(tarefas[index]);
    } else {
        res.status(404).json({mensagem: 'Tarefa não encontrada'});
    }
});

//Rota para deletar uma tarefa
app.delete('/tarefas/:id', (req, res) => {
   tarefas = tarefas.filter((t) => t.id !== parseInt(req.params.id));
   res.json({mensagem: 'Tarefa deletada com sucesso'});
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});