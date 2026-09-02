import { useState } from "react";
import { FiArrowRight, FiUploadCloud } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateEvent } from "../redux/slices/eventSlices";

function CreateEvent() {
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateEvent({
        image: preview,
        title: e.target.title.value,
        description: e.target.description.value,
        tags: [e.target.tags.value],
        community: e.target.community.value,
      }),
    );
    navigate("/create-event/2");
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div>
          <h1 className="font-bold text-2xl">Basic Information</h1>
          <p className="text-color-text">
            Tell Attendees what your event is about.
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="pt-6">
            <label className="block mb-2 font-medium" htmlFor="image">
              Cover Image
            </label>
            <label htmlFor="image" className="block cursor-pointer">
              <div className="w-full h-64 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-center overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-4">
                    <FiUploadCloud className="text-4xl text-gray-400 mb-3" />{" "}
                    <p className="font-medium text-gray-700">
                      Click to upload your cover image
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PNG or JPG up to 10MB
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      16:9 recommended
                    </p>
                  </div>
                )}
              </div>
              <input
                hidden
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              />{" "}
            </label>{" "}
          </div>
          <div className="pt-6">
            {" "}
            <label htmlFor="title">Event Title</label>{" "}
            <input
              className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              type="text"
              name="title"
              id="title"
            />{" "}
          </div>
          <div className="pt-6">
            <label htmlFor="description">Description</label>
            <textarea
              className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              name="description"
              id="description"
              rows={5}
              placeholder="what will attendees learn or experience?"
            ></textarea>
          </div>
          <div className="pt-6">
            <label htmlFor="tags">Category</label>
            <select
              className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              name="tags"
              id="tags"
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="bussines">Bussines</option>
              <option value="ai">AI</option>
              <option value="career">Career</option>
              <option value="programming">Programming</option>
            </select>
          </div>
          <div className="pt-6">
            <label htmlFor="community">Community</label>
            <select
              className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              name="community"
              id="community"
            >
              <option>No Community</option>
              <option value="Bandung Go Community">
                {" "}
                Bandung Go Community{" "}
              </option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-t-gray-300">
            <button className=" px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg gap-2 cursor-pointer"
            >
              <FiArrowRight /> Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
