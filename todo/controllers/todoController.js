var bodyParser = require('body-parser');
var datas = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'do some coding' }];
var urlencodedpar = bodyParser.urlencoded({extended: false}); 

module.exports = function (app) {

    app.get('/todo', (req, res) => {
        res.render('todo', { todos: datas });
    });

    app.post('/todo', urlencodedpar, (req, res) => {
        datas.push(req.body);
        console.log(req.body);
        res.json(datas);
    });

    app.delete('/todo/:item', (req, res) => {
        datas = datas.filter((todo)=>{
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(datas);
    });
};