'use strict';

module.exports = function (sequelize, DataTypes) {
    let School = sequelize.define('School', {
            name: {
                type: DataTypes.STRING,

            },
            size: {
                type: DataTypes.INTEGER
            },
            district: {
                type: DataTypes.STRING
            }

        },
        {
            classMethods: {
                associate: (models) => {
                    School.hasMany(models.Student)
                }
            }
        });
    return School;

};


