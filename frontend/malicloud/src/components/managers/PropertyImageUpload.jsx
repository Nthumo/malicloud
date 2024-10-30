import React, {useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import { Crop, Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';


export default function PropertyImageUpload() {
  // State for main property image
  const [mainImage, setMainImage] = useState([]);
  const [crop, setCrop] = useState({ x: 0, y: 0});
  const [zoom, setZoom] = useState(1);
  const [showCropper, setShowCropper] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  // State for gallery images
  const[galleryImages, setGalleryImages] = useState([]);

  // Dropzone for property main image
  const onDropMainImage = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMainImage(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps: getMainImageRootProps, getInputProps: getMainImageInputProps} = useDropzone({
    onDrop: onDropMainImage,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    multiple: false
  });

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

  // Handle Cropping Complete
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    // Handle the cropped image here
    setCroppedImage(mainImage);
  }, [mainImage]);

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
          {!showCropper && !croppedImage && (
            <div
            {...getMainImageRootProps()}
            className='border-2 border-dashed border-gray-300 rounded-lg mt-6 p-12 text-center cursor-pointer hover:border-primary'
            >
              <input type='file' {...getMainImageInputProps()}/>
              <Upload className='mx-auto h-12 w-12 text-gray-400'/>
              <p className='mt-2'>Drag & drop main property image here, or click to select</p>
            </div>
          )}

          {/* {showCropper && mainImage && (
            <div className='h-96 relative'>
              <Cropper
              image={mainImage}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              />
              <div className='mt-4 absolute flex justify-end'>
                <Button
                onClick={() => {
                  setShowCropper(false);
                  setCroppedImage(mainImage);
                }}
                >
                  Finish Cropping
                </Button>
              </div>
            </div>
          )} */}
          
          {mainImage == 1 && (
            <div className='h-auto'>
            {mainImage.map((image, index) => (
            <div key={index} className='relative'>
              <img
              src={image.preview}
              alt='cropped image'
              className='w-full h-64 object-cover rounded-lg'
              />
              
            </div>
          ))}
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
              <Upload className=' h-6 w-6 '/>
              <p className="">Upload photo</p>
            </div>
          </div>
          
          {galleryImages.length > 0 && (
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
              {galleryImages.map((image, index) => (
                <div key={index} className='relative'>
                  <img src={image.preview} alt={`Gallery ${index + 1}`} 
                  className='w-[400px] h-[100px] object-contain rounded-lg'
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
