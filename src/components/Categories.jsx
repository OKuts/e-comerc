export const Categories = ({categories, currentCategory, setCurrentCategory}) => {
    return (
        <div className='categories'>
            {categories.map(category => 
                <div 
                    onClick = {() => setCurrentCategory(category)}
                    className={category === currentCategory ? 'current' : ''}
                    key={category}>
                    {category}
                </div>
            )}
        </div>
    );
}