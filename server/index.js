const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


const db = require('./models');

// Routers
const postsRouter = require("./routes/Posts");
app.use("/posts", postsRouter);

db.sequelize.sync().then(()=>{
    app.listen(2424,() => {
        console.log("PORT: 2424");
    })
})
