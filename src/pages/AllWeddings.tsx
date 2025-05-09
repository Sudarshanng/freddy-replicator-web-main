import { useState, useEffect } from 'react';

interface WeddingPhoto {
  id: string;
  url: string;
  names: string;
  location: string;
}

const AllWeddings = () => {
  const [photos, setPhotos] = useState<WeddingPhoto[]>([]);

  useEffect(() => {
    fetch('http://localhost:5004/api/weddings/photos?limit=100')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 playfair">Weddings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {photos.map(photo => (
            <div key={photo.id} className="flex flex-col items-center">
              <img
                src={photo.url}
                alt={photo.names}
                className="w-full h-[500px] object-cover border border-gray-200"
              />
              <p className="mt-4 text-lg font-medium uppercase playfair">{photo.names}</p>
              <p className="text-md text-gray-600 uppercase">{photo.location}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllWeddings;