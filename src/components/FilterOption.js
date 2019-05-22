import React from 'react';
import PropTypes from 'prop-types';

export default function FilterOption(props) {
    const { categorys, options, handleSelectValue } = props;
    const optionList = categorys.map((category) => 
        <option 
            key={category} 
            value={category}
        >
            {category}
        </option>
    );
    return (
        <div className="col-sm-6">
            <div className="form-group">
                <select className="form-control" value={options} onChange={handleSelectValue}>
                    <option defaultValue="All" value="All">All</option>
                   {optionList}
                </select>
            </div>
        </div>
    );
};

FilterOption.propTypes = {
    categorys: PropTypes.array,
    options: PropTypes.string,
    handleSelectValue: PropTypes.func
};