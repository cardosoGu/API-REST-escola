import User from '../models/user';
// create

const create = async (req, res) => {
  try {
    const novoUser = await User.create(req.body);

    return res.json(novoUser);
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
};
// index
const index = async (req, res) => {
  try {
    const showUsers = await User.findAll({
      attributes: ['id', 'nome', 'email'],
      order: [['id', 'DESC']],
    });

    return res.json(showUsers);
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
};
// show
const show = async (req, res) => {
  try {
    const showUser = await User.findByPk(req.userId); // id - JWT
    if (!showUser) {
      return res.status(400).json({ errors: ['ID de usuario não encontrado'] });
    }
    const { id, nome, email } = showUser;
    return res.json({ id, nome, email });
  } catch (e) {
    return res.status(404).json({ errors: e.errors.map((err) => err.message) });
  }
};

// update

const update = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ errors: ['ID de usuario não encontrado'] });
    }

    const newUser = await user.update(req.body);

    return res.json(newUser);
  } catch (e) {
    return res.status(404).json({ errors: e.errors.map((err) => err.message) });
  }
};

// delete
const Delete = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(400).json({ errors: ['ID de usuario não encontrado'] });
    }
    await user.destroy();

    return res.json('Usuario deletado');
  } catch (e) {
    return res.status(404).json({ errors: e.errors.map((err) => err.message) });
  }
};

export default {
  create, index, show, update, Delete,
};
