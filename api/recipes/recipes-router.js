const router = require('express').Router()
Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
      .then(resource => {
        res.status(200).json(resource)
      })
      .catch(next)
  })

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })
  
  module.exports = router