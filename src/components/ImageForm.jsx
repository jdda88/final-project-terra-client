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


function ImageForm({setFiles}) {

  const handleChange = (e) => {
    setFiles([...e.target.files]);
  };

  
  return (
    <div>
      
        <label htmlFor="imageUpload"></label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="file"
          accept="image/*"
          multiple
          name="images"
          onChange={handleChange}
        />
        
      
    </div>
  );
}

export default ImageForm;
