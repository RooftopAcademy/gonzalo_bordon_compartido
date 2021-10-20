const path = require("path");

const ROOT_PATH = [__dirname, "..", ".."];

const ROOT = path.join(...ROOT_PATH);
const PUBLIC_DIR = path.join(...ROOT_PATH, "public");
const DATABASE_DIR = path.join(...ROOT_PATH, "database");

const TABLES = ["config", "products", "users", "favorites", "categories"];

export { PUBLIC_DIR, DATABASE_DIR, TABLES };
