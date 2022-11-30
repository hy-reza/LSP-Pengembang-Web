const express = require("express");
const cors = require("cors");
require("dotenv").config();
const itemsRoutes = require("./routes/itemsRoutes.js");
const customersRoutes = require("./routes/customersRoutes.js");
const transactionsRoutes = require("./routes/transactionsRoutes.js");
const swaggerUI = require("swagger-ui-express");
const app = express();

//swagger api docs
const apiDocs = require("../docs/apidocs.json");
app.use("/LSP-UI", swaggerUI.serve, swaggerUI.setup(apiDocs, {customSiteTitle: "UKOM"}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/items", itemsRoutes);
app.use("/api/v1/customers", customersRoutes);
app.use("/api/v1/transactions", transactionsRoutes);

app.listen(8000, () => {
  console.info(
    "Server allready listening for request on http://localhost:8000/"
  );
});
