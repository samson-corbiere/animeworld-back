const router = require("express").Router();
const connection = require("../db");

// search actor of an anime
router.post("/", async (req,res) => {
  try {
    const {search} = req.body;
    console.log(search)
    const result = await connection.query(
      `SELECT Actor.* FROM Actor
      JOIN anime_has_actor ON anime_has_actor.Actor_id = Actor.id
      JOIN anime ON anime.id = anime_has_actor.anime_id
      WHERE anime.id = ?`, [search]
    )
    res.status(200).json(result)
  } catch (err) {
    console.log(err);
    res.status(500).send("error search name anime")
  }
})

module.exports = router;