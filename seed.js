const models = require('./models');

const seedFunction = ()=> {
        models.School.bulkCreate([
            {name: 'c4q', district: 'LIC', size: 30},
            {name: 'Laguardia', district: 'LIC', size: 3000},
            {name: 'FlatIron', district: 'FlatIron', size: 100},
            {name: 'NYU', district: 'Manhattan', size: 5000}

        ])

            models.Student.bulkCreate([
                {name: 'Jung', age: 30, grade: 'A', SchoolId: 1},
                {name: 'puppy', age: 4, grade: 'B', SchoolId: 1}

            ])

};

module.exports = seedFunction;
