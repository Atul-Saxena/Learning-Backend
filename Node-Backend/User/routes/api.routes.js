import express from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controller/userManager.js";

const router = express.Router();

router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router; // export the router;