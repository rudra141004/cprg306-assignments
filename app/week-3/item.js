export default function Item({name,quantity,category}){
    return(
        
            <div className="bg-slate-900 m-2">
                <h2 className="text-2xl">{name}</h2>
                <p> Buy {quantity} in {category}</p>
            </div>
    );
}