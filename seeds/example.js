exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Jake', email: 'Wanganui@example.com' },
        { id: 2, username: 'Bruce', email: 'EDA@example.com' },
        { id: 3, username: 'Suzuki', email: 'Japan@example.com' }
      ]);
    });
};
