const express = require("express");

const db = require("./data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then((accounts) => {
      res.status(200).json({ data: accounts });
    })
    .catch((error) => {
      handleError(error, res);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.select("*")
    .from("accounts")
    // .where("id", "=", id)
    // .where("id", id)
    .where({ id })
    .first() // same as grabbing the first element from the array manuall with post[0]
    .then((account) => {
      res.status(200).json({ data: account });
    })
    .catch((error) => {
      handleError(error, res);
    });
});

router.post("/", (req, res) => {
  const postData = req.body;

  // validate the data

  db("accounts")
    .insert(postData, "id")
    .then((ids) => {
      db("accounts")
        .where({ id: ids[0] })
        .first()
        .then((account) => {
          res.status(200).json({ data: account });
        });
    })
    .catch((error) => {
      handleError(error, res);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("accounts")
    .where({ id })
    .update(changes) // don't forget to have a WHERE
    .then((count) => {
      // count is the number of records updated
      if (count > 0) {
        res.status(200).json({ data: count });
      } else {
        res.status(404).json({ message: "there was no record to update" });
      }
    })
    .catch((error) => {
      handleError(error, res);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("accounts")
    .where({ id })
    .del() // don't forget to have a where
    .then((count) => {
      // count is the number of records deleted
      if (count > 0) {
        res.status(200).json({ data: count });
      } else {
        res.status(404).json({ message: "there was no record to delete" });
      }
    })
    .catch((error) => {
      handleError(error, res);
    });
});

function handleError(error, res) {
  console.log("error", error);
  res.status(500).json({ message: error.message });
}

module.exports = router;
