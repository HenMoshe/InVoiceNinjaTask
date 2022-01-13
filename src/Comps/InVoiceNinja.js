import { useState } from 'react'
import Header from "./Header";
import ListOfWords from './ListOfWords';
import AddWord from './AddWord';
import Note from './Note';
function handleWords(index, addWords, addFunc, delFunc, delWords){
    let item = delWords.splice(index, 1)[0]
    delFunc([...delWords])
    return addFunc([...addWords, item])
    }
function InvoiceNinjaInterview(){
    let [selectionWords, setSelectionWords] = useState(['Client', 'Users', 'Technology'])
    let [listWords, setListWords] = useState(['Development', 'Invoice Ninja'])
  
    return (
    <>
        <Header handleWords={handleWords} delWords={selectionWords} addWords={listWords} delFunc={setSelectionWords} addFunc={setListWords}/>
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