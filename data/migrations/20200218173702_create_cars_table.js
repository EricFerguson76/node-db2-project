exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl
      .string('VIN', 17)
      .notNullable()
      .index();

    tbl
      .string('make', 255)
      .notNullable()
      .index();

    tbl
      .string('model', 255)
      .notNullable()
      .index();

    tbl
      .string('mileage')
      .notNullable()
      .index();

    tbl.string('transmission', 150).index();

    tbl.string('title_status', 150).index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
