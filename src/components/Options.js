import React from 'react';
import PropTypes from 'prop-types';
import SearchOption from './SearchOption';
import FilterOption from './FilterOption';

export default function Options(props) {
    const { categorys, searchValue, handleSearchRecipe, optionValue, handleSelectValue } = props;
    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-6">
                <div className="options">
                    <div className="row">
                        <SearchOption
                            searchValue={searchValue} 
                            handleSearchRecipe={handleSearchRecipe}
                        />
                        <FilterOption 
                            categorys={categorys}
                            options={optionValue}
                            handleSelectValue={handleSelectValue}
                        />
                    </div> 
                </div>       
            </div>
        </div>
    );
};

Option.propTypes = {
    categorys: PropTypes.array,
    searchValue: PropTypes.string,
    handleSearchRecipe: PropTypes.func,
    optionValue: PropTypes.string,
    handleSelectValue: PropTypes.func
}