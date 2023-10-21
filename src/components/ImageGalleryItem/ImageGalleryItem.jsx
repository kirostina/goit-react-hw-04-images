import React, { useState } from 'react';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen (!isModalOpen);
    };

        return (
            <StyledGalleryItem>
                <img src={webformatURL} alt={tags} onClick={toggleModal} width="400" height="200" loading="lazy"/>
                {isModalOpen && (
                    <Modal modalImage={largeImageURL} tags={tags} closeModal={toggleModal} />
                )}
            </StyledGalleryItem>
        );
    }
