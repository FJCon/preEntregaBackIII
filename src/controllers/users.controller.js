import multer from 'multer';
import { upload } from './utils/multerConfig';
import { usersService } from "../services/index.js"

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}

const uploadFile = async(req,res)=>{
    const userId = req.params.uid;
    try {
        upload.single('file')(req, res, async (err) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
    
          const user = await User.findById(userId);
          user.documents.push({
            name: req.file.originalname,
            path: req.file.path
          });
          await user.save();
    
          res.json({ message: 'Archivo subido correctamente' });
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al subir el archivo' });
      }

}

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
    uploadFile
}