const sequelize = require("./config/sequelize");
const Employee = require("./models/employee");

async function test() {
  await sequelize.sync({ force: true });

  const emp = await Employee.create({
    firstName: "Dana",
    lastName: "Tested",
    email: "Dana@test.com",
    birthYear: 2002,
    salary: 2000
  });

  console.log(emp.toJSON());
}

test();
