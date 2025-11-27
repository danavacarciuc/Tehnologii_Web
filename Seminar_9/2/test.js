const sequelize = require("./sequelize");
const Employee = require("./models/employee");

async function test() {
  await sequelize.sync({ alter: true });

  const emp = await Employee.create({
    firstName: "John",
    lastName: "Test",
    email: "test@example.com",
    birthYear: 1990,
    salary: 1500,
  });

  console.log(emp.toJSON());
}

test();
