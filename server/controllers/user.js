import User from "../models/user.js";

const setProfilePicture = async (req, res) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.avatar;
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: { avatarImage: avatarImage },
      },
      {
        new: true,
      }
    );
    return res.json({
      isSet: user.isAvatarImageSet,
      image: user.avatarImage,
    });
  } catch (error) {
    console.log(error);
  }
};

export { setProfilePicture };
