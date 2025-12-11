const Student = require("./student");
const University = require("./university");

University.hasMany(Student, { foreignKey: "universityId" });
Student.belongsTo(University, { foreignKey: "universityId" });

module.exports = { Student, University };
