import React, {useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import { Crop, Upload, CloudUpload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';


export default function PropertyImageUpload() {
  // State for main property image
  const [mainImage, setMainImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [showCropper, setShowCropper] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // State for gallery images
  const[galleryImages, setGalleryImages] = useState([]);

  // Dropzone for property main image
  const onDropMainImage = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const preview = URL.createObjectURL(file);
        setMainImage({file, preview});
        setShowCropper(false);
      }
  }, []);

  const { getRootProps: getMainImageRootProps, getInputProps: getMainImageInputProps} = useDropzone({
    onDrop: onDropMainImage,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    maxFiles: 1
  });
  
  // Handle Cropping Complete
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    console.log('Crop area:', croppedAreaPixels);
  }, []);

  const handleCropButtonClick = () => setShowCropper(true);
  const closeCropper = () => setShowCropper(false);

  const onCropChange = () => {}
  const onCancel = () => {
    setShowCropper(false);
  }

 
  // Dropzone for gallery images
  const onDropGallery = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setGalleryImages(prev => [...prev, ...newImages]);
  }, []);

  const {getRootProps: getGalleryRootProps, getInputProps: getGalleryInputProps} = useDropzone({
    onDrop: onDropGallery,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    multiple: true
  });



  // Remove Gallery image
  const removeGalleryImage = (index) => {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
  };


  return (
    <>
      <div className='mx-auto space-y-8 p-2'>
        {/*Main property image section */}
        <Card className='p-6'>
          <h2 className='font-semibold'>Property Photo</h2>

          {!mainImage && (
            <div
            {...getMainImageRootProps()}
            className='border-2 border-dashed border-gray-300 rounded-lg mt-6 p-12 text-center cursor-pointer hover:border-primary'
            >
              <input {...getMainImageInputProps()}/>
              <CloudUpload className='mx-auto h-12 w-12 text-gray-400'/>
              <p className='mt-2'>Drag & drop main property image here, or click to select</p>
            </div>
          )}

          {mainImage && !showCropper && (
              <div className='relative mt-4'>
                <img
                src={mainImage.preview}
                alt='preview'
                className='w-full h-64 object-fill rounded-lg'
                />
                <div className='flex justify-between items-center mt-4'>
                  <button
                  onClick={handleCropButtonClick}
                  className=' text-white '
                  >
                    <Crop className='h-6'/>
                    <p className='text-[10px]'>Crop</p>
                  </button>
                  <div
                  {...getMainImageRootProps()}
                  className='flex flex-col items-center cursor-pointer'
                  >
                    <input {...getMainImageInputProps()} />
                    <CloudUpload className='h-5'/>
                    <p className='text-[10px]'>Upload Photo</p>
                  </div>
                </div>
                
              </div>
          )}

          {/* Handle Cropper */}
          {showCropper && (
            <div className='fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 overflow-hidden'>
              <div className='relative bottom-4 w-full h-[500px] max-w-screen-lg mx-auto'>
                <Cropper
                image={mainImage.preview}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                />
                </div>
                <input type="range" 
                className='absolute bottom-6' 
                min={1} 
                max={3} 
                step={0.1} 
                value={zoom} 
                onInput={(e) => {setZoom(e.target.value)}}
                />
                {/*  
                <select name="" id="">
                  {}
                </select>
                */}
               

                <div className=''>
                  <Button
                  onClick={onCancel}
                  className='absolute bottom-6 left-[120px] text-white bg-red-600 hover:bg-red-700 '
                  >
                    Cancel
                  </Button>
                  
                  <Button
                  onClick={closeCropper}
                  className='absolute bottom-6 right-[120px] bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'
                  >
                    Done
                  </Button>
                </div>
               
              
            </div>
          )}

          {/**Handle cropped image */}
          {croppedImage && !showCropper && (
            <div className='mt-4'>
              <img src={croppedImage} alt="Cropped" className='w-full h-64 object-cover'/>
            </div>
          )}
          
        </Card>

        {/*Gallery images section */}
        <Card className='p-4 overflow-auto h-auto'>
          <div className='flex justify-between'>
            <h2 className='font-semibold'>Gallery</h2>
            <div
            {...getGalleryRootProps()}
            className='flex gap-2 items-center rounded-lg text-center cursor-pointer bg-green-900 p-1 text-white'
            >
              <input {...getGalleryInputProps()} />
              <CloudUpload className=' h-6 w-6 '/>
              <p className="">Upload photo</p>
            </div>
          </div>
          
          {galleryImages.length > 0 && (
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
              {galleryImages.map((image, index) => (
                <div key={index} className='relative'>
                  <img src={image.preview} alt={`Gallery ${index + 1}`} 
                  className='w-[400px] h-[100px] object-fill rounded-lg'
                  />
                  <Button
                  variant='destructive'
                  size='icon'
                  className='absolute top-2 right-2 w-8 h-8'
                  onClick={() => removeGalleryImage(index)}
                  >
                    <X className='h-4 w-4'/>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </>
  )
}
