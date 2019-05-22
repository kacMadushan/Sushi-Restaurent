import React from 'react';
import PropTypes from 'prop-types';

export default function SearchOption(props) {
    const { searchValue, handleSearchRecipe } = props;
    return (
        <div className="col-sm-6">
            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchRecipe}
                />
            </div>
        </div>
    );
};

SearchOption.propTypes = {
    searchValue: PropTypes.string,
    handleSearchRecipe: PropTypes.func
}