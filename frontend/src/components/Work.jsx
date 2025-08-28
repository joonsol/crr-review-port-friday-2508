import React from 'react'
import { works } from '../utils/works'
const Work = () => {
  return (
    <div className='inner'>
      <ul className='work-lst'>

        {works.map((work) => (
          <li key={work.id}>
            {work.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Work