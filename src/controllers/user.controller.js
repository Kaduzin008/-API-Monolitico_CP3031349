const userService = require('../services/user.service');

exports.create = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }

    try {
        const user = await userService.createUser(nome, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
};

exports.findAll = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
};

exports.findById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
};

exports.update = async (req, res) => {
    const { nome, status } = req.body;

    if (!nome || !status) {
        return res.status(400).json({ error: 'Nome e status são obrigatórios.' });
    }

    try {
        const updated = await userService.updateUser(req.params.id, nome, status);

        if (updated === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.status(200).json({ message: 'Usuário atualizado.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await userService.deleteUser(req.params.id);

        if (deleted === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.status(200).json({ message: 'Usuário desativado.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao desativar usuário.' });
    }
};