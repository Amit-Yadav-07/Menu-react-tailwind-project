let Title = ({ text }) => {

    return (
        <div className="mx-auto my-10">
            <h1 className="text-4xl text-slate-100">{text || 'default value'}</h1>
        </div>
    )
}



export default Title;