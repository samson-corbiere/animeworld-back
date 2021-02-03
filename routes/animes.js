const router = require("express").Router();
const connection = require("../db");

//find all anime
router.get("/all", async (req, res) => {
    try {
        const result = await connection.query(
            `SELECT * FROM anime`
    );
    res.status(200).json({
        result
    })
} catch(err) {
    console.log(err);
    res.status(500).send("error get animes")
}
});

//find anime with more view
router.get("/view", async (req, res) => {
    try {
        const result = await connection.query(
            `SELECT * FROM anime
            ORDER BY view DESC
            LIMIT 5`
    );
    res.status(200).json({
        result
    })
} catch(err) {
    console.log(err);
    res.status(500).send("error get animes")
}
});





module.exports = router;

