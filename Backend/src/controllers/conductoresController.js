import { Conductor } from "../models/conductor.js";

export const getAllConductors = async (req, res) => {
  try {
    const conductors = await Conductor.getAll();
    res.json(conductors);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getConductorById = async (req, res) => {
  try {
    const { id } = req.params;
    const conductor = await Conductor.findById(id);
    if (!conductor) {
      return res.status(404).json({ message: "Conductor no encontrado" });
    } else {
      return res.json(conductor);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createConductor = async (req, res) => {
  try {
    const newConductor = await Conductor.create(req.body)
    res.status(201).json(newConductor)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateConductor = async (req, res) => {
  try {
    const { id } = req.params;
    const conductor = await Conductor.update(id);
    if (!conductor) {
      return res.status(404).json({ message: "Conductor no encontrado" });
    } else {
      await conductor.update(req.body);
      return res.json(conductor);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteConductor = async (req, res) => {
  try {
    const { id } = req.params;
    const conductor = await Conductor.delete(id);
    if (!conductor) {
      return res.status(404).json({ message: "Conductor no encontrado" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};