const express = require("express");
const app = express();
app.use(express.json());

const db = require('./models');

// Routers
const postsRouter = require("./routes/Posts");
app.use("/posts", postsRouter);

db.sequelize.sync().then(()=>{
    app.listen(2424,() => {
        console.log("PORT: 2424");
    })
})
