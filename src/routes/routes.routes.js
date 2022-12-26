const { Router } = require("express");
const router = Router();

router.get("/dashboard", (req, res) => {
    res.send({message: "dashboard"})
});



module.exports = router;