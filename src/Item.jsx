let Item = ({ item }) => {
    let { id, title, category, price, img, desc } = item;
    // console.log(item);
    return (
        <div>
            <article className="h-[auto] bg-slate-100 p-3 rounded-md shadow-md hover:shadow-xl">
                <img src={img} className="mb-5 rounded-sm h-[250px] w-[100%] object-cover" alt={title} />
                <div className=" flex justify-between my-7">
                    <h3 className="text-2xl capitalize font-medium">{title}</h3>
                    <button className="bg-yellow-300 rounded-md py-0 px-2">$ {price}</button>
                </div>
                <hr />
                <p className="text-[1.4rem] tracking-wide py-3">{desc}</p>
            </article>
        </div>
    )
}


export default Item;