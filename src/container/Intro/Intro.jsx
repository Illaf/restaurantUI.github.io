import {React,useState,useRef} from 'react';
import {BsFillPlayFill, BsPauseFill,vidRef} from 'react';
import {meal} from '../../constants';
import './Intro.css';

const Intro=()=>{
  const[playVideo,setPlayVideo]=useState(false);
  const vidRef=useRef();
  const handleVideo=()=>{
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo)
    if(playVideo){
      vidRef.current.pause();

    }else{
      vidRef.current.play();
    }
  }
  return(

  <div className='app__video'>
    <video src={meal}
    ref={vidRef}
    type="video/mp4"
    Loop
    controls={false}
    muted/>
    <div className='app__video-overlay' flex__center>
      <div className='app__video-overlay_circle flex-center' onClick={handleVideo}>
        <h4 className='play_button' style={{color:"white"}}>play</h4>
        {/* {playVideo
        ?(
          <BsPauseFill color="#fff" fontSize={30}/>
       ) :<BsFillPlayFill color="#fff" fontSize={30}/>}  */}
      </div>
    </div>
  </div>
  )
  
  }

export default Intro;
