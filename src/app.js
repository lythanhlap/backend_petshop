const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const db = require("./config/database")
const app = express();

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
);

app.use(compression());

app.use(
  express.json({
    limit: "1mb"
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb"
  })
);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Connected"
  })
})

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "OK"
  });
});
app.get("/db-test", async (req, res) => {
  const result =
    await db.raw("SELECT NOW() AS now");

  res.json({
    success: true,
    data: result[0]
  });
});

app.get("/products", async (req, res) => {
  const result = 
    await db.raw("SELECT * FROM products");

    res.json({
      success: true,
      data: result[0]
    });
})

app.get("/categories", async (req, res) => {
  try {
    const result = 
    await db.raw("SELECT * FROM categories");

    res.status(200).json({
      success: true,
      data: result[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
})

app.get("/a", async(req, res) => {
  try {
    const product = 
      await db("products")

      .leftJoin(
        "categories",
        "products.category_id",
        "category_id"
      )

      .select(
        "products.id",
        "products.name",
        "products.price",
        "categories.name as category_name"
      );
      
  } catch (error) {
    
  }
})

module.exports = app;