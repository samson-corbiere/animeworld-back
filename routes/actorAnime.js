const router = require("express").Router();
const connection = require("../db");

// search actor of an anime
router.get("/:animeId", async (req,res) => {
  try {
    const {animeId} = req.params;
    const result = await connection.query(
      `SELECT actor.* FROM actor
      JOIN anime_has_actor ON anime_has_actor.actor_id = actor.id
      JOIN anime ON anime.id = anime_has_actor.anime_id
      WHERE anime.id = ?`, [animeId]
    )
    res.status(200).json(result)
  } catch (err) {
    console.log(err);
    res.status(500).send("error search name anime")
  }
})

module.exports = router;