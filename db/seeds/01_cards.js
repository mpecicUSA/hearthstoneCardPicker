
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {mana: 3, attack: 6, health: 4, description: 'Hmalkdjfahotiulkja TAUNT'},
        {mana: 4, attack: 3, health: 10, description: 'JJJKOUItiulkja'},
        {mana: 2, attack: 4, health: 4, description: 'Some text TAUNT'},
        {mana: 2, attack: 7, health: 4, description: 'Hmalkdjfahotiulkja TAUNT'},
        {mana: 1, attack: 2, health: 2, description: 'Minon TAUNT'},
      ]);
    });
};
