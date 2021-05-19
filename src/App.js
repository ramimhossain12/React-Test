import React from 'react'
 
import Card from './components/Card'
import Card2 from './components/Card2'
 
import STATE from './components/STATE'

export default function App() {
    return (
        <div>

      <h1 className='heading'>Test Project</h1>

       <Card />,
       <Card2 />,
       <STATE count ='0'/>
     
        </div>
    )
}


 