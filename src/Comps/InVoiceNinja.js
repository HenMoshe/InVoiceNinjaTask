import { useState } from 'react'
import DropSelection from "./DropSelection";
import ListOfWords from './ListOfWords';
import AddWord from './AddWord';
import Note from './Note';
function handleWords(index, addWords, addFunc, delFunc, delWords){
    let item = delWords.splice(index, 1)[0]
    delFunc([...delWords])                   /* the main function for moving words from selection drop to wordlist and backwards. */
    return addFunc([...addWords, item])
    }
function InvoiceNinjaInterview(){
    let [selectionWords, setSelectionWords] = useState(['Client', 'Users', 'Technology'])
    let [listWords, setListWords] = useState(['Development', 'Invoice Ninja'])
  
    return (  /* the main state handling component. */
    <>
        <DropSelection handleWords={handleWords} delWords={selectionWords} addWords={listWords} delFunc={setSelectionWords} addFunc={setListWords}/>
        <hr/>
        <AddWord words={selectionWords} addWord={setSelectionWords}/>
        <hr/>
        <ListOfWords handleWords={handleWords} delWords={listWords} addWords={selectionWords} delFunc={setListWords} addFunc={setSelectionWords}/>
        <hr />
        <Note />
    </>
)
}
export default InvoiceNinjaInterview
