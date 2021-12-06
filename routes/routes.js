const express = require('express');
const employeeModel = require('../models/employee');
const app = express();



app.get('/api/v1/employees', async (req, res) => {
    const employees = await employeeModel.find({});

    try {
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.post('/api/v1/employees', async (req, res) => {
    let employee = new employeeModel(req.body);

    try {
        await employee.save();
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/api/v1/employees/:id', async (req, res) => {
    const employees = await employeeModel.findById(req.params.id);

    try {
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/api/v1/employees/:id', async (req, res) => {
    try {
        await employeeModel.findByIdAndUpdate(req.params.id, req.body)
        employee = await employeeModel.save()
        res.send(employee)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.delete('/api/v1/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findByIdAndDelete(req.params.id)

        if (!employee) res.status(404).send("No item found")
        res.status(200).send("Deleted successfully")
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app