import {useState} from 'react'
/* const pics = ["https://static.wixstatic.com/media/1aa746_f0ed94c1afb94630a9233161b67ac92a~mv2.jpg/v1/fill/w_893,h_670,al_c,q_85,usm_0.66_1.00_0.01/%D7%A7%D7%9C%D7%99%D7%A0%D7%99%D7%A7%D7%94_edited.webp" ,"https://static.wixstatic.com/media/1aa746_f86a39b0ccb7477597312c479699db8d~mv2.jpg/v1/fill/w_1373,h_828,al_c,q_85,usm_0.66_1.00_0.01/1aa746_f86a39b0ccb7477597312c479699db8d~mv2.webp", "https://static.wixstatic.com/media/1aa746_ee7b209425cb43388e2ed3a02797cfcf~mv2.jpg/v1/fill/w_528,h_408,al_c,q_80,usm_0.66_1.00_0.01/%D7%91%D7%90%D7%99%D7%9C%D7%95%20%D7%91%D7%A2%D7%99%D7%95%D7%AA%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%98%D7%A4%D7%9C%D7%AA%20(2).webp"]
    const data = [0,0,0]*/
function Carousel({pics ,data}){
    const picNum = pics.length-1
    const [item, setItem] = useState(0)
    const [like, setLike] = useState(false)
    function handleNextItem(picNum, item, setItem){
        if(item >= picNum){
            setItem(0)

        }
        else{
            setItem(item+=1)
        }}
    function handlePrevItem(picNum, item, setItem){
        if(item < 1){
            setItem(picNum)
        }
        else{
            setItem(item-=1)
        }
    }
    function handleLikes(data, item, setLike){
        if(!like){
            setLike(true)
            data[item]++
    }
        else{
            setLike(false)
            data[item]--
    }
    }
    return(
    <div>
    <img alt='pisscture' src={pics[item]} width='300px' height='300px'/>
    <button onClick={()=> handleLikes(data, item, setLike)}>{like?"like":"unlike"}</button>
   <button onClick={()=>handlePrevItem(picNum, item, setItem)}>prev</button>{item}{data[item]}<button onClick={()=> handleNextItem(picNum, item, setItem)}>next</button>
    </div>
)
}
export default Carousel