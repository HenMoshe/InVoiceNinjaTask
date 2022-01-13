function DropSelection({handleWords, delWords, addWords, delFunc, addFunc}){
    return (
    <select name={'menu'}  value={delWords} 
               onChange={(e)=>handleWords(parseInt(e.target.value), addWords, addFunc, delFunc, delWords)}>
        <option value='' selected >Please select a word!</option>
            {delWords.map((item, index) =><option index={index} key={index} value={index}>{item}</option>)}      
    </select>
)}
export default DropSelection  
  /*  A component that creates the srop selection.     */
