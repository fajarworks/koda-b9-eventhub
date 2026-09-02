import { useState } from "react";
import toast from "react-hot-toast";
import { FiCamera, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../redux/slices/registerSlices";
import { useAuth } from "../hooks/useAuth";

function EditProfileModal({ isShow, setIsShow }) {
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { users } = useSelector((state) => state.users);
  const dataUser = users?.find((u) => u.email === user.email);

  if (!isShow) return null;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    const updateProfile = {
      email: user.email,
      fullName: form.fullName,
      location: form.location,
      bio: form.bio,
      photoProfile: previewPhoto,
    };

    console.log(updateProfile);

    dispatch(updateUserThunk(updateProfile));
    setIsShow(false);
    toast.success("update profile success");
  };

  return (
    <div
      onClick={() => setIsShow(false)}
      className=" w-screen h-screen inset-0 bg-black/50 fixed z-50 flex justify-center items-center px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-xl mx-auto w-full rounded-xl px-6 py-3"
      >
        <div className=" justify-between w-full">
          <div className="flex justify-between border-b border-b-gray-300 py-1">
            <h1 className="font-medium">Edit Profile</h1>
            <button
              onClick={() => setIsShow((prev) => !prev)}
              className="cursor-pointer"
            >
              <FiX />
            </button>
          </div>
        </div>
        <form
          action=""
          className="flex justify-center flex-col items-center"
          onSubmit={handleUpdateProfile}
        >
          <label className="cursor-pointer" htmlFor="photo-profile">
            <div className=" w-20 h-20 lg:h-30 lg:w-30 border border-gray-300 rounded-full mt-2 flex items-center justify-center text-color-text overflow-hidden relative">
              edit image
              <img
                className="object-cover absolute"
                src={previewPhoto || dataUser.photoProfile}
                alt=""
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white rounded-full">
                   <FiCamera size={20} />
                   <span className="text-xs mt-1">Ganti Foto</span>
                 </div>
            </div>
            <input
              hidden
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPreviewPhoto(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              type="file"
              id="photo-profile"
              name="photo-profile"
            />
          </label>
          <div className="pt-2 w-full">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="border w-full rounded-md focus:outline-none px-2 border-gray-300"
              name="fullName"
              id="fullName"
              type="text"
              defaultValue={dataUser?.fullName}
            />
          </div>
          <div className="pt-2 w-full">
            <label htmlFor="location">Location</label>
            <input
              name="location"
              className="border w-full rounded-md focus:outline-none px-2 border-gray-300 "
              type="text"
              defaultValue={dataUser?.location}
            />
          </div>
          <div className="pt-2 w-full">
            <label htmlFor="bio">bio</label>
            <textarea
              className="border w-full rounded-md focus:outline-none px-2 border-gray-300"
              placeholder="tell the community a little about yourself..."
              rows={5}
              name="bio"
              id="bio"
              defaultValue={dataUser?.bio}
            ></textarea>
          </div>
          <div className=" flex self-end gap-2">
            <button
              onClick={() => setIsShow((prev) => !prev)}
              className="rounded-md bg-gray-200 px-2 py-1 cursor-pointer"
            >
              Cancel
            </button>
            <button className="rounded-md bg-orange-500 text-orange-50 px-2 py-1 cursor-pointer">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
