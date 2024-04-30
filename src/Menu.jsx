import Item from "./Item";


let Menu = ({ items }) => {
    // console.log(items);
    return (
        <div className=" w-[85%] min-h-[80vh] max-h-[auto] grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-2 place-items-start">
            {items.map((item) => {
                return (
                    <Item item={item} key={item.id} />
                )
            })}
        </div>
    )
}


export default Menu;