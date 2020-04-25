import React, {useState, useEffect} from 'react'
import { Row,Col } from 'antd';
import Movie from '../Movie/index'
function WatchLater(){    
    const [laterlist, setLaterlist] = useState([]);
    useEffect(() => {
        if(localStorage.getItem("user")){
            let user = JSON.parse(localStorage.getItem("user"));            
            let values = {ids:user.favourite_list};
            console.log("values", values);
            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            };
            fetch('/.netlify/functions/api/getMovieDetailsWithIds', requestOptions)
            .then(response => response.json())
            .then(response=>{
                setLaterlist(response.movies);            
            });
        }                
    },[])    
    return(
        <>
            <h1 style={{textAlign:"center", marginTop: 4}}>Watch Later</h1> 
            <Row>
            {laterlist.map((m,index)=><Col xs={24} md={{offset: 0,span:4}} style={{marginTop:"4em"}} key={index}><Movie movie={m}/></Col>)}             
            </Row>
        </>
    )
}
export default WatchLater;