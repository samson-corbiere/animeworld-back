const router = require("express").Router();
const connection = require("../db");

// search name of an anime
router.post("/nameAnime", async (req,res) => {
  try {
    const {search} = req.body;
    const result = await connection.query(
      `SELECT * FROM anime
      where name LIKE "%"?"%"`, [search]
    )
    res.status(200).json(result)
  } catch (err) {
    console.log(err);
    res.status(500).send("error search name anime")
  }
})

module.exports = router