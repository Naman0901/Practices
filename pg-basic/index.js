const express = require('express');
const bodyparser = require('body-parser');
const pool = require('./db');
const app = express();

var urlencodedpar = bodyparser.urlencoded({ extended: false });
//app.use(express.json());
app.set('view engine', 'ejs');
var allTodo;
app.get('/todos', async (req, res) => {
    try {
        allTodo = await pool.query("select * from todo");
        res.render('todo', { todos: allTodo.rows });
    } catch (err) {
        console.log(err.message)
    }
});

app.get('/todos/:id', async (req, res) => {
    try {
        const onetodo = await pool.query("select * from todo where todo_id = ($1)", [req.params.id]);
        res.json(onetodo.rows);
    } catch (err) {
        console.log(err.message)
    }
})

app.post('/todos', urlencodedpar, async (req, res) => {
    try {
        const item = req.body.item;
        const newtodo = await pool.query("INSERT into todo (description) values ($1) returning *", [item]);
        res.redirect('/todos');
    } catch (err) {
        console.log(err.message)
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const item = req.body.item;
        const updatetodo = await pool.query("update todo set description = ($1) where todo_id = ($2)", [description, req.params.id]);
        res.json("todo updated");
    } catch (err) {
        console.log(err.message)
    }
})

app.delete('/todos/:des', async (req, res) => {
    var id;
    for (var i = 0; i < allTodo.rowCount; i++) {
        if (allTodo.rows[i].description === req.params.des) {
            id = allTodo.rows[i].todo_id;
            break;
        }
    }
    try {
        const deletetodo = await pool.query("delete from todo where todo_id = ($1)", [id]);
        res.json("todo deleted");
    }
    catch (err) {
        console.log(err.message)
    }
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})
