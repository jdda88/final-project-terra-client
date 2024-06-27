// backend: cloudinary middleware -- done
// backend: route for image upload -- done
// front end: form for uploading image -- done
// front end: submit handler --> -- done
// front end: ---> create results variable -- done
// front end: ---> loop the files into the results variable --done
// front end: ---> step through each file to upload them to cloudinary --done
// front end: ---> get cloudinary string --done
// front end: ---> compile strings into single variable --done
// front end: ---> integrate this data to the create form request create object --
import React, { useState } from "react";
import api from "../service/api";

function ImageForm() {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFiles([...e.target.files]);
    console.log("These are the files I'm setting up ===>", files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("picture", file);
      try {
        const response = await api.post("/image/upload", formData);
        result.push(response.data.image);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setImages((prev) => [...prev, ...result]);
    console.log("Images uploaded:", result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageUpload"> Upload images </label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="file"
          accept="image/*"
          multiple
          name="images"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
        >
          Upload image(s)
        </button>
      </form>
    </div>
  );
}

export default ImageForm;
