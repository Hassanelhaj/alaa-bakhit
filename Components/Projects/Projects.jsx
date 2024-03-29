import React from 'react'
import SubTitle from '../SubTitle'
import Articles from './articles/Articles'


const Projects = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center 
    items-center gap-4' id='projects'>
      <SubTitle title={"projects"}/>
      <div>
  
        <Articles/>
      </div>
    

    </div>
  )
}

export default Projects