import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Upload } from 'lucide-react';

const PropertyImageUpload = () => {
  // State for main property image
  const [mainImage, setMainImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);

  // State for gallery images
  const [galleryImages, setGalleryImages] = useState([]);

  // Dropzone for main property image
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

  const { getRootProps: getMainImageRootProps, getInputProps: getMainImageInputProps } = useDropzone({
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

  const { getRootProps: getGalleryRootProps, getInputProps: getGalleryInputProps } = useDropzone({
    onDrop: onDropGallery,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    multiple: true
  });

  // Handle cropping completion
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    // Here you would typically handle the cropped image
    // For this example, we'll just store the original image
    setCroppedImage(mainImage);
  }, [mainImage]);

  // Remove gallery image
  const removeGalleryImage = (index) => {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Main Property Image Section */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Main Property Image</h2>
        {!showCropper && !croppedImage && (
          <div 
            {...getMainImageRootProps()} 
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-primary"
          >
            <input {...getMainImageInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2">Drag & drop main property image here, or click to select</p>
          </div>
        )}

        {showCropper && mainImage && (
          <div className="h-96 relative">
            <Cropper
              image={mainImage}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <div className="mt-4 flex justify-end">
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
        )}

        {croppedImage && !showCropper && (
          <div className="relative">
            <img 
              src={croppedImage} 
              alt="Cropped property" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => {
                setMainImage(null);
                setCroppedImage(null);
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Card>

      {/* Gallery Images Section */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Property Gallery</h2>
        <div 
          {...getGalleryRootProps()} 
          className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-primary"
        >
          <input {...getGalleryInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2">Drag & drop gallery images here, or click to select</p>
        </div>

        {galleryImages.length > 0 && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.preview}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => removeGalleryImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default PropertyImageUpload;