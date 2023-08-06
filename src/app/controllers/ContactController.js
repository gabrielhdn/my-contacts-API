const ContactRepository = require('../repositories/ContactRepository');
const isUUIDValid = require('../utils/isUUIDValid');

class ContactController {
  async index(req, res) {
    const { orderBy } = req.query;
    const contacts = await ContactRepository.findAll(orderBy);

    // 200: OK
    res.status(200).json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!isUUIDValid(id)) {
      return res.status(400).json({ error: 'Invalid contact ID.' });
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return res.status(404).json({ error: 'Contact not found!' });
    }

    return res.status(200).json(contact);
  }

  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;

    if (category_id && !isUUIDValid(category_id)) {
      return res.status(400).json({ error: 'Invalid category.' });
    }

    if (!name) {
      // 400: Bad Request
      return res.status(400).json({ error: "Field 'name' is required." });
    }

    if (email) {
      const contactExists = await ContactRepository.findByEmail(email);

      if (contactExists) {
        return res.status(400).json({ error: 'This e-mail has already been taken!' });
      }
    }

    const newContact = await ContactRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,

      // condições evitam mandar strings vazias para o banco
    });

    // 201: Created
    return res.status(201).json(newContact);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Field 'name' is required." });
    }

    if (!isUUIDValid(id)) {
      return res.status(400).json({ error: 'Invalid contact ID.' });
    }

    if (category_id && !isUUIDValid(category_id)) {
      return res.status(400).json({ error: 'Invalid category.' });
    }

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return res.status(404).json({ error: 'Contact not found!' });
    }

    if (email) {
      const contactByEmail = await ContactRepository.findByEmail(email);

      if (contactByEmail && contactByEmail.id !== id) {
        return res.status(400).json({ error: 'This e-mail has already been taken!' });
      }
    }

    const updatedContact = await ContactRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    return res.status(200).json(updatedContact);
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!isUUIDValid(id)) {
      return res.status(400).json({ error: 'Invalid contact ID.' });
    }

    await ContactRepository.delete(id);

    // 204: No Content
    return res.sendStatus(204);
  }
}

module.exports = new ContactController();
