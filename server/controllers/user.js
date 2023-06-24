import User from "../models/user.js";

const setProfilePicture = async (req, res) => {
  console.log(req.params.id, req.body.avatar);
  try {
    const userId = req.params.id;
    const avatarImage = req.body.avatar;
    await User.findByIdAndUpdate(
      userId,
      {
        $set: { avatarImage: avatarImage },
      },
      {
        new: true,
      }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (error) {
    console.log(error);
  }
};

export { setProfilePicture };
