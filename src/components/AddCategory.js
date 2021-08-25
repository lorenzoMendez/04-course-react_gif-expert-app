 

 import React, {useState} from 'react';
 import PropTypes from 'prop-types';
 
 const AddCategory = ({setCategories}) => {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (value.trim().length > 0) {
            setCategories(item => [value, ...item]);
            setValue('');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='tex'
                value={value}
                onChange={onChange} 
            />
        </form>
    );
 }

 AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired
 }
 
 export default AddCategory
 