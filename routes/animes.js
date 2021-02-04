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

//find anime ordered by novelty
router.get("/novelty", async (req, res) => {
    try {
        const result = await connection.query(
            `SELECT * FROM anime
            ORDER BY start_date DESC`
    );
    res.status(200).json({
        result
    })
} catch(err) {
    console.log(err);
    res.status(500).send("error get animes")
}
});

//find anime with action genre
router.get("/actionGenre", async (req, res) => {
    try {
        const result = await connection.query(
            `SELECT * FROM anime
            where genre = "action"`
    );
    res.status(200).json({
        result
    })
} catch(err) {
    console.log(err);
    res.status(500).send("error get animes with genre action")
}
});

//find anime with comédie genre
router.get("/comicGenre", async (req, res) => {
    try {
        const result = await connection.query(
            `SELECT * FROM anime
            where genre = "comédie"`
    );
    res.status(200).json({
        result
    })
} catch(err) {
    console.log(err);
    res.status(500).send("error get animes with genre comédie")
}
});


module.exports = router;

