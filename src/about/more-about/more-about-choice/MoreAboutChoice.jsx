import React from 'react';
import { useParams } from 'react-router-dom';

function MoreAboutChoice() {
  let { about_choice } = useParams();
  return(
    <div>
      <h3>Requested More About: </h3>
      {about_choice === 'me' 
      ? 
      'I like long walks on... Er... I mean... long workshops on React' 
      : 
      'In case it was not clear, I really like React! Way better than the other ones out there.'}
    </div>
  );
}
  
export default MoreAboutChoice