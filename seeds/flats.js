
exports.seed = function (knex) {
  return knex('flats').insert([
    {
      title: 'flat1',
      price: 12425,
      floorArea: 2,
      country: 'Hungary',
      zip: 1234,
      city: 'Szeged',
      street: 'Kossuth'
    },
    {
      title: 'flat2',
      price: 1242531,
      floorArea: 1,
      country: 'Hungary',
      zip: 12124,
      city: 'Szeged',
      street: 'Kossuth'
    },
    {
      title: 'flat3',
      price: 124256,
      floorArea: 5,
      country: 'Austria',
      zip: 1454,
      city: 'Wien',
      street: 'Kossuth'
    }

  ]);
};
