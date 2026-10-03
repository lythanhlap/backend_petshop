/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("products").del();

  await knex("products").insert([
    {
      category_id: 1,

      name:
        "Royal Canin Mini Adult",

      slug:
        "royal-canin-mini-adult",

      description:
        "Thức ăn dành cho chó trưởng thành giống nhỏ.",

      price: 350000,

      sale_price: 320000,

      stock: 50,

      sku: "RC-DOG-001",

      image:
        "https://example.com/royal-canin.jpg",

      status: "active"
    },

    {
      category_id: 2,

      name:
        "Royal Canin Kitten",

      slug:
        "royal-canin-kitten",

      description:
        "Thức ăn dành cho mèo con.",

      price: 300000,

      sale_price: 280000,

      stock: 40,

      sku: "RC-CAT-001",

      image:
        "https://example.com/kitten.jpg",

      status: "active"
    },

    {
      category_id: 3,

      name:
        "Bóng cao su cho chó",

      slug:
        "bong-cao-su-cho-cho",

      description:
        "Bóng cao su đồ chơi cho chó.",

      price: 80000,

      sale_price: null,

      stock: 100,

      sku: "TOY-DOG-001",

      image:
        "https://example.com/ball.jpg",

      status: "active"
    }
  ]);
};
