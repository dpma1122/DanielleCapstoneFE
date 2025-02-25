export default function Journal({ el}) {
    return (<>
        <div>
            <p>{el.name}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </>
    ); 
}