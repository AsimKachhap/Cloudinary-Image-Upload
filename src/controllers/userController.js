import User from "../models/User.model.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";

export const registerUser = async (req, res) => {
  try {
    const { name } = req.body;

    if (req.file) {
      const avtarLocalPath = await req.file?.path;
      const avtarUrl = await uploadOnCloudinary(avtarLocalPath);

      const user = await User.create({ name: name, avtar: avtarUrl });
      res
        .status(201)
        .json({ message: "User Registered Succesfully", data: user });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
