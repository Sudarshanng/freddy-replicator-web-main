import { useState, useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface PhotoFile {
  file: File;
  preview: string;
  progress: number;
}

const PhotoUploader = () => {
  const [photos, setPhotos] = useState<PhotoFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newPhotos = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      progress: 0,
    }));

    setPhotos(prev => [...prev, ...newPhotos]);

    // Simulate upload progress
    newPhotos.forEach((photo, index) => {
      const interval = setInterval(() => {
        setPhotos(prevPhotos => {
          const updated = [...prevPhotos];
          const currentPhoto = updated[prev.length + index];
          if (currentPhoto.progress < 100) {
            currentPhoto.progress += 10;
          } else {
            clearInterval(interval);
          }
          return updated;
        });
      }, 200);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
    multiple: true,
  });

  const removePhoto = (index: number) => {
    setPhotos(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleUpload = async () => {
    setIsUploading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    setPhotos([]);
    alert('Photos uploaded successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg text-gray-600">
          {isDragActive
            ? 'Drop the photos here'
            : 'Drag & drop wedding photos here, or click to select files'}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Supported formats: JPG, PNG (max 10MB each)
        </p>
      </div>

      {photos.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Selected Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo.preview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => removePhoto(index)}
                    className="bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${photo.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1 truncate">
                    {photo.file.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleUpload}
            disabled={isUploading || photos.length === 0}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
          >
            {isUploading ? 'Uploading...' : 'Upload Photos'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;