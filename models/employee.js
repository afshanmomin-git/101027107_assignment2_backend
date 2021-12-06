let mongoose = require('mongoose') 

const EmployeeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        


    },
    firstName: {
        type : String,
        require:true,
        trim:true,
        lowercase:true ,
        // required: 'First Name is required'
    },
    lastName: {
        type : String,
        require:true,
        trim:true,
        lowercase:true ,
        // required: 'Last Name is required'
    },
    emailId: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    }
})

const Employee = mongoose.model("employee",EmployeeSchema)
module.exports = Employee
