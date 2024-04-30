let Button = ({ categories, FilteredItems }) => {

    // console.log(categories);

    return (
        <div className="xl:w-[40%] md:w-[50%] w-[60%] mx-auto mb-5 p-2 flex justify-evenly items-center flex-wrap gap-2">
            {categories.map((catBtn, index) => {
                return <button type="button" className="bg-yellow-400 rounded-md py-1 px-3 text-[1.2rem] text-black capitalize text-white hover:shadow-md" onClick={() => { FilteredItems(catBtn) }} key={index}>{catBtn}</button>
            })}
        </div>
    )
}


export default Button;