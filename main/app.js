import express from "express";
import sequelize from "./config/database_conf.js";
import { User } from "./models/user_model.js"

const port = 3000 || process.env.PORT;
const app = express();

app.get("/", async (req, res) => {
    const users = await User.findAll();

    return res.json({"Users": users});
});

try {
    sequelize.sync({ force: false })
    .then(console.log("Banco de dados acessado!"));

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.error("Banco de dados não acessado!");
}
