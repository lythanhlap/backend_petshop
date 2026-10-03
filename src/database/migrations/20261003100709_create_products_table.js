/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(
    "products",
    function (table) {
      table.increments("id").primary();

      table
        .integer("category_id")
        .unsigned()
        .nullable();

      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("SET NULL");

      table
        .string("name", 255)
        .notNullable();

      table
        .string("slug", 255)
        .notNullable()
        .unique();

      table
        .string("description");

      table
        .decimal("price", 12, 2)
        .notNullable();

      table
        .decimal("sale_price", 12, 2)
        .nullable();

      table
        .integer("stock")
        .unsigned()
        .notNullable()
        .defaultTo(0);

      table
        .string("sku", 100) /**mã quản lý sản phẩm nội bộ */
        .nullable()
        .unique();

      table
        .string("image", 500)
        .nullable();

      table
        .enum("status", ["active", "inactive"])
        .notNullable()
        .defaultTo("active");

      table.timestamps(true, true);

      table.index("category_id");
      table.index("price");
      table.index("status");
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(
    "products"
  )
};
