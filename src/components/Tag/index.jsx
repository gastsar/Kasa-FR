
export default function Tag({tags}){
    return (
        <ul className='tag-wrapper'>  
        {tags.map((tag, index) => {
            return <li  key={index} >{tag}</li>
        })}
    </ul>
    )
}

