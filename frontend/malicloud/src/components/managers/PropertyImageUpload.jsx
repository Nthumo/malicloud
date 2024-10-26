import React, {useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import { Crop, Upload, X } from 'lucide-react';
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

  const { getRootProps: getMainImageRootProps, getInputProps: getMainImageUnitProps} = useDropzone({
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

  const {getRootProps: getGalleryRootProps, getInputProps: getGalleryUnitProps} = useDropzone({
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
    setGalleryImages(prev = prev.filter((_, i) => i !== index));
  };


  return (
    <>
      <div>
        <h2>PropertyImageUpload</h2>
      </div>
    </>
  )
}
