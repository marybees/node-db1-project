const express = require("express");

const db = require("./data/dbConfig");

const router = express.Router();

// router.get("/", (req, res) => {
//     // get a list of posts from the database
//     // SELECT * FROM posts
//     db.select("*")
//         .from("posts")
//         .then(posts => {
//             res.status(200).json({ data: posts });
//         })
//         .catch(error => {
//             handleError(error, res);
//         });

//     // return the list of posts
// });

// router.get("/:id", (req, res) => {
//     const { id } = req.params;

//     // select * from posts where id=1;
//     db.select("*")
//         .from("posts")
//         // .where("id", "=", id)
//         // .where("id", id)
//         .where({ id })
//         .first() // same as grabbing the first element from the array manuall with post[0]
//         .then(post => {
//             res.status(200).json({ data: post });
//         })
//         .catch(error => {
//             handleError(error, res);
//         });
// });

// router.post("/", (req, res) => {
//     const postData = req.body;

//     // validate the data

//     db("posts")
//         .insert(postData, "id")
//         .then(ids => {
//             db("posts")
//                 .where({ id: ids[0] })
//                 .first()
//                 .then(post => {
//                     res.status(200).json({ data: post });
//                 });
//         })
//         .catch(error => {
//             handleError(error, res);
//         });
// });

// router.put("/:id", (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;

//     db("posts")
//         .where({ id })
//         .update(changes) // don't forget to have a WHERE
//         .then(count => {
//             // count is the number of records updated
//             if (count > 0) {
//                 res.status(200).json({ data: count });
//             } else {
//                 res.status(404).json({ message: "there was no record to update" });
//             }
//         })
//         .catch(error => {
//             handleError(error, res);
//         });
// });

// router.delete("/:id", (req, res) => {
//     const { id } = req.params;

//     db("posts")
//         .where({ id })
//         .del() // don't forget to have a where
//         .then(count => {
//             // count is the number of records deleted
//             if (count > 0) {
//                 res.status(200).json({ data: count });
//             } else {
//                 res.status(404).json({ message: "there was no record to delete" });
//             }
//         })
//         .catch(error => {
//             handleError(error, res);
//         });
// });

// function handleError(error, res) {
//     console.log("error", error);
//     res.status(500).json({ message: error.message });
// }

module.exports = router;
