export const registerUser = async (req, res) => {
  try {
    res.status(201).json({ message: "User Reistered Succesfullly" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
