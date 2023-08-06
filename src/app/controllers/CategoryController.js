const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(_req, res) {
    const categories = await CategoryRepository.findAll();
    res.status(200).json(categories);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Field 'name' is required." });
    }

    const newCategory = await CategoryRepository.create({ name });
    return res.status(201).json(newCategory);
  }
}

module.exports = new CategoryController();
