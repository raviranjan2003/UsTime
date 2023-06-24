import React, { useEffect, useState, useContext } from "react";
import "./Setavatar.css";
import axios from "axios";
import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../API/api.js";
import Loader from "../../components/Loader/Loader";
import AuthContext from "../../auth/authContext";

function Setavatar() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const api = `https://api.multiavatar.com/`;
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const setProfile = async() => {
    const data = {
      avatar: avatars[selectedAvatar],
    };
    try {
      await axios.post(
        `${baseUrl}/user/avatar/${authContext.userId}}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${authContext.token}}`,
          },
        }
      )
      .then((res) => {
        console.log(res)
      if (res.status === 200) {
        navigate("/");
      }
    });
    } catch (error) {
      console.log(error);
    }
  }

  const fetchAvatar = async () => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      setIsLoading(true);
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 10000)}/?apikey=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const buffer = new Buffer.from(image.data);
      const base64 = buffer.toString("base64");
      data.push(base64);
      setIsLoading(false);
    }
    setAvatars(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="avatar_container">
          <div className="avatar_box">
            <div className="avatar_title">
              <h1>Choose your avatar</h1>
            </div>
            <div className="avatar_images">
              {avatars.map((avatar, index) => {
                return (
                  <div
                    className={`avatar ${
                      selectedAvatar === index ? "selected" : ""
                    }`}
                    key={index}
                  >
                    <img
                      src={`data:image/svg+xml;base64,${avatar}`}
                      className="avatar_image"
                      alt="avatar"
                      key={avatar}
                      onClick={() => setSelectedAvatar(index)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="avatar_button_container">
              <button
                onClick={setProfile}
                className="avatar_button"
              >
                Choose Avatar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Setavatar;
