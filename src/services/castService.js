const Cast = require('../models/cast')

exports.create = (castData) => Cast.create(castData)

exports.getAll = () => Cast.find()