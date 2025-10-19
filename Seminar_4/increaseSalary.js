function increaseSalary(salaries, percent) {
  if (!Array.isArray(salaries)) {
    throw new Error("Primul parametru trebuie să fie un array!");
  }
  if (typeof percent !== "number") {
    throw new Error("Al doilea parametru trebuie să fie un număr!");
  }

  return salaries.map((s) => s + (s * percent) / 100);
}

try {
  console.log(increaseSalary([3000, 4500, 6000], 10));

  console.log(increaseSalary("3000,4500", 10));
} catch (err) {
  console.warn("Eroare:", err.message);
}
