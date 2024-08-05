const express = require('express');
const { getBook } = require('../controller/book.controller.js'); // Adjust the path if needed

const router = express.Router();

router.get("/", getBook);

module.exports = router;
