import { useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { ChangePasswordThunk } from "../redux/slices/userSlices";

function ChangePasswordModal({ showModal, setShowModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();

  if (!showModal) return null;
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const oldPass = e.target.oldPass.value;
      const newPass = e.target.newPass.value;
      const data = {
        old_password: oldPass,
        new_password: newPass,
      };
      await dispatch(ChangePasswordThunk(data)).unwrap();
      toast.success("success change password", { duration: 1500 });
      setShowModal(false)
    } catch (err) {
      toast.error(err || "failed to change password", { duration: 1500 });
    }
  };

  return (
    <div className="inset-0 bg-black/50 w-screen h-screen flex items-center justify-center fixed p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-2xl bg-white"
      >
        <div className="flex items-center border-b-2 border-b-gray-300 p-4 font-semibold justify-between">
          <p className="font-semibold">Change Password</p>
          <button
            className="cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <FiX />
          </button>
        </div>
        <form onSubmit={handleChangePassword} className="px-4">
          <div className="mt-2">
            <label htmlFor="oldPass"> Current Password</label>
            <div className="relative">
              <input
                className="w-full border border-gray-500 rounded-lg px-3 py-1.5 pr-10 :focus outline-none"
                type={showPassword ? "text" : "password"}
                name="oldPass"
                id="oldPass"
                placeholder="Input Your Current Password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="newPass">New Password</label>
            <div className="relative">
              <input
                className="w-full border border-gray-500 rounded-lg px-3 py-1.5 pr-10 :focus outline-none"
                type={showNewPass ? "text" : "password"}
                name="newPass"
                id="newPass"
                placeholder="Input Your New Password"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2"
                type="button"
                onClick={() => setShowNewPass((prev) => !prev)}
              >
                {showNewPass ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="confirmPass">Confirm New Password</label>
            <div className="relative">
              <input
                className="w-full border border-gray-500 rounded-lg px-3 py-1.5 pr-10 :focus outline-none"
                type={showConfirmPass ? "text" : "password"}
                name="confirmPass"
                id="confirmPass"
                placeholder="Confirm Your New Password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowConfirmPass((prev) => !prev)}
              >
                {showConfirmPass ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </div>
          <div className="flex gap-2 py-4 ml-auto w-fit">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-white text-gray-500 border-gray-500 border rounded-lg px-3 py-1.5 cursor-pointer"
            >
              Cancel
            </button>
            <button className="bg-orange-500 text-white rounded-lg px-3 py-1.5 cursor-pointer">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordModal;
