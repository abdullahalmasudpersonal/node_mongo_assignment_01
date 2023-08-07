const express = require('express');
const { allUsers } = require('../../controllars/user.controller');
const router = express.Router();

router
    .route("/")
    .get(allUsers);

module.exports = router;
