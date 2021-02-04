const router = require("express").Router();
const connection = require("../db");

// search actor of an anime
router.get("/:animeId", async (req,res) => {
  try {
    const {animeId} = req.params;
    const result = await connection.query(
      `SELECT * FROM anime WHERE id = ?`, [animeId]
    )
    res.status(200).json(result)
  } catch (err) {
    console.log(err);
    res.status(500).send("error search name anime")
  }
})

module.exports = router;