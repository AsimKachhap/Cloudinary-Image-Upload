export const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ message: "User Registered Succesfullly" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
