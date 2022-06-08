const mysql = require('mysql');
const connection = require('./login.js');

class Queries {
    constructor(query, values) {
        this.query = query;
        this.values = values;
    }
    genTableQuery(nextStep) {
        connection.query(this.query, this.values, function (err, res) {
            if (err) throw err;
            nextStep(res);
        })
    }

QueryLoop(nextStep, requiredforNextStep) {
    connection.query(this.query, this.values, function (err, res) {
        if (err) throw err
        let titleParams = []
        for (let i = 0; i < res.length; i++) {
            if (!titleParams.includes(res[i].title)) {
                titleParams.push(res[i].title);
            }
        }
        nextStep(titleParams, requiredforNextStep);
    })
}
delete(nextStep) {
    connection.query(this.query, this.values, function (err, res) {
        if (err) throw err
        nextStep();
    })
}
update (nextStep, message) {
    connection.query(this.query, this.values, function (err, res) {
        if (err) throw err
        nextStep(message);
    })
};
queryReturn(nextStep) {
    connection.query(this.query, this.values, function (err, res) {
        if (err) throw err
        nextStep(res);
    })
}
}
module.exports = Queries;