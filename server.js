require("dotenv").config();
const app = require("./src/app");
const db = require("./src/config/database");

const PORT = Number(process.env.PORT || 3000);

async function startServer() {
  try {
    await db.raw("SELECT 1");

    console.log("Database connected");

    const server = app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

    const shutdown = async () => {
      console.log("Shuting down...");
      server.close(async () => {
        await db.destroy();

        process.exit(0);
      });
    };

    process.on("SIGTERM", shutdown);
    process.on("SIGINT", shutdown);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
