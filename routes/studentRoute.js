const router = require('express').Router();
const models = require('../models');



const getStudent = (req, res)=>{
    models.Student.findOne({where:{id:req.params.id}})
        .then(student=> res.send(student))

};

const getAllStudents = (req, res)=>{
    models.Student.findAll()
        .then(students=> res.send(students))
};

const createStudent = (req, res)=>{
    models.Student.create({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade
    }).then(student=>{
        console.log('student',student.dataValues);
        student.dataValues.student = {
            name:student.dataValues.name,
            age:student.dataValues.age,
            grade:student.dataValues.grade
        };

        student.dataValues.message= 'Student successfully added!';
        console.log('student after',student.dataValues)

        res.send(student)
    })
};


router.route('/')
    .get(getAllStudents)
    .post(createStudent);

router.route('/:id')
    .get(getStudent);

module.exports = router;