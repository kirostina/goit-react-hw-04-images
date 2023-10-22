import React, { useState } from 'react';
import { StyleHeader, StyledForm } from './Searchbar.styled';
const Searchbar = ({onSubmit, query}) => { 
    const [searchQuery, setSearchQuery] = useState(query);

    const handleSearchKey = (e) => {
        if (e.key === 'ENTER') {
            handleSubmit();
        }
    };


    const handleSubmit = () => {
        onSubmit(searchQuery);
    };
    
        return (
            <StyleHeader>
                <StyledForm onSubmit={(e) => e.preventDefault()}>
                    <button type="submit" onClick={handleSubmit}>
                        <span>Search</span>
                    </button>
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleSearchKey} value={searchQuery}
                        type="text" autoComplete='off' autoFocus placeholder='Search images and photos' />
                </StyledForm>
            </StyleHeader>
        )
    }

export default Searchbar;