/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("categories").del();

  await knex("categories").insert([
    {
      id: 1,
      name: "Thức ăn cho chó",
      slug: "dog-food",
      description:
        "Các loại thức ăn dành cho chó",
      is_active: true
    },
    {
      id: 2,
      name: "Thức ăn cho mèo",
      slug: "cat-food",
      description:
        "Các loại thức ăn dành cho mèo",
      is_active: true
    },
    {
      id: 3,
      name: "Đồ chơi thú cưng",
      slug: "pet-toys",
      description:
        "Đồ chơi dành cho chó và mèo",
      is_active: true
    },
    {
      id: 4,
      name: "Phụ kiện",
      slug: "accessories",
      description:
        "Phụ kiện cho thú cưng",
      is_active: true
    }
  ]);
};