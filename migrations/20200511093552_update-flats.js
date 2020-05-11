
exports.up = function (knex) {
  return knex.schema.alterTable('flats', (table) =>{
    table.string('city');
  });
};

exports.down = function (knex) {
  return knex.dropColumn('city');
};
