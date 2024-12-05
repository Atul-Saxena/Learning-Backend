import user from "../models/user.model.js";

export const createUser = async(req, res) => {
    try{
        const { username, email, password } = req.body;
        const newUser = new user({ username, email, password });
        await newUser.save();
        res.status(201).send({"user created":newUser});
        console.log(newUser);
    }catch(err){
        console.log(err);
        res.status(404).send(err);
    }
}

export const updateUser = async(req, res) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}


export const deleteUser = async(req, res) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const getUser = async(req, res) => {
    try {
        const User = await user.findById(req.params.id);
        if (!User) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(User);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}