function ListOfWords({handleWords, delWords, addWords, delFunc, addFunc}){
    return(
    <ol>
        {delWords.map((item, index)=>{
            return(
            <li key={`li${index}`}>
                {item} - - ->   
                {<button onClick={()=>handleWords(index, addWords, addFunc, delFunc, delWords)}>Delete word</button>}
                <hr/>
            </li>
            )})}
    </ol>
) 
}
export default ListOfWords