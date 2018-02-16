
module.exports = function(app) {

    const model = require('../model/transactions')(app);

    app.post('/getAllTxns', (req, res) => {
        let payload = req.body;
        model.getAllTransactionsForUser(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });
    app.post('/addUserTransaction', (req, res) => {
        let payload = req.body;
        model.addUserTransaction(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });

    app.post('/getUserTransactionById', (req, res) => {
        let payload = req.body;
        model.getUserTransactionById(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });

    app.post('/updateTransaction', (req, res) => {
        let payload = req.body;
        model.updateTransaction(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });

    app.post('/deleteTransaction', (req, res) => {
        let payload = req.body;
        model.deleteTransaction(payload).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err);
        });
    });
}