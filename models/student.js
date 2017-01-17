'use strict';

module.exports = function (sequelize, DataTypes) {
    let Student = sequelize.define('Student', {
            name: {
                type: DataTypes.STRING,

            },
            age: {
                type: DataTypes.INTEGER
            },
            grade: {
                type: DataTypes.STRING
            }

        },
        {
            classMethods: {
                associate: (models)=> {
                    Student.belongsTo(models.School)
                }
            }
        })
    return Student;

};