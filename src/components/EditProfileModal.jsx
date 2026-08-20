import React from "react";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";

function EditProfileModal({ isShow, setIsShow }) {
  if (!isShow) return null;
  const handleUpdateProfile = (e) => {
    e.preventDefault();
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
            <div className="w-20 h-20 lg:h-30 lg:w-30 border border-gray-300 rounded-full mt-2 flex items-center justify-center text-color-text">
              edit image
              <img src="" alt="" />
            </div>
            <input hidden type="file" id="photo-profile" name="photo-profile" />
          </label>
          <div className="pt-2 w-full">
            <label htmlFor="">Full Name</label>
            <input
              className="border w-full rounded-md focus:outline-none px-2 border-gray-300 "
              type="text"
            />
          </div>
          <div className="pt-2 w-full">
            <label htmlFor="">Location</label>
            <input
              className="border w-full rounded-md focus:outline-none px-2 border-gray-300 "
              type="text"
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
