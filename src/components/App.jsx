import React, { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { fetchImages } from 'api/ImageApi';
import toast from 'react-hot-toast';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (!query)
        return;
      try {
        setIsLoading(true);
        const { totalHits, hits } = await fetchImages(query, page);
        if (totalHits === 0) {
          toast.error('No images found');
          return;
        }
        if (page === 1) {
          setImages(hits);
          setTotalHits(totalHits - hits.length);
        } else {
          setImages(prevImages => [...prevImages, ...hits]);
          setTotalHits(prevTotalHits => prevTotalHits - hits.length);
        }
      } catch (error) {
        toast.error(`Something went wrong with ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleQuerySubmit = query => {
    setQuery(query);
    setPage(1);
  }
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

    return (
      <div>
        <Searchbar onSubmit={handleQuerySubmit}></Searchbar>
        {images && <ImageGallery images={images} />}
        {!!totalHits && <Button onLoadMore={handleLoadMore}></Button>}
        {isLoading && <Loader />}
      </div>
    )
  }

