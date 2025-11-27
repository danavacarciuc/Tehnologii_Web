router
  .route("/employees/:id")
  .get(async (req, res) => {
    // get by id
    const employee = await Employee.findOne({
      where: { id: req.params.id },
    });
    if (employee) {
      return res.status(200).json(employee);
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exist` });
    }
  })
  .put(async (req, res) => {
    // update
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      return res.status(200).json(await employee.update(req.body));
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exist` });
    }
  })
  .delete(async (req, res) => {
    // delete by id
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.destroy();
      return res
        .status(200)
        .json({ message: `Employee with id ${req.params.id} was deleted` });
    } else {
      return res
        .status(404)
        .json({ error: `Employee with id ${req.params.id} does not exist` });
    }
  });
