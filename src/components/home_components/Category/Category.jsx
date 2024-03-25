import PropTypes from 'prop-types';

const Category = ({category}) => {

    const {logo, category_name, availability} = category

    return (
        <div className='bg-[#f1f3ff] p-10 space-y-4 rounded-lg'>

            <img className='bg-[#dbe0ff] p-4 rounded-lg' src={logo} alt="" />
            <h4 className='text-xl font-bold'>{category_name}</h4>
            <p className='text-sm font-light'>{availability}</p>

        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
}

export default Category;