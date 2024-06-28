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
