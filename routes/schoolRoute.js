const router = require('express').Router();
const models = require('../models');



const getSchool = (req, res)=>{
    models.School.findOne({
        where:{
            id:req.params.id
            },
            include:[
                {model: models.Student}]
         }
         )
        .then(school=>
        {
            console.log(school);
            res.send(school)
        })

};

const getAllSchools = (req, res)=>{
    models.School.findAll()
        .then(schools=> {
            console.log('schools',schools);
            res.send(schools)});
        // .then(()=> res.sendStatus(200))
};

const createSchool = (req, res)=>{
    models.School.create({
        name: req.body.name,
        district: req.body.district,
        size: req.body.size
    })
        .then(school=>{
            school.dataValues.message = 'School successfully added!';
            res.send(school)
            }
        )
};


router.route('/')
    .get(getAllSchools)
    .post(createSchool);

router.route('/:id')
    .get(getSchool);

module.exports = router;