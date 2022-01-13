import { useState } from 'react'
function AddWord({words, addWord}){
    let [newWord, setNewWord] = useState('')
    function handleWordAdd(e, addWord, newWord){
        e.preventDefault()                          /*   A component that used for adding words to the selection list.
                                                                                                                        */
        addWord([...words, newWord])
        setNewWord('')
    }
    return (
    <form onSubmit={(e)=>handleWordAdd(e, addWord, newWord)}>
        <label for='newWord' > Add new word:
            <input type='text' name='newWord' value={newWord}  onChange={(e)=>setNewWord(e.target.value)}/>
        </label>
            <input type='submit' value='Submit'/>
    </form>
)
}
export default AddWord
