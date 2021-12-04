const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'ClickFlix',
    description: 'Find out where to watch your favorite films!',
  });
});

module.exports = router;