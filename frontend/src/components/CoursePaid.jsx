import React from 'react'
import Card from './Card'
import list from '../../public/list.json'

const CoursePaid = () => {
  return (
    <div className='x-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 text-center justify-center items-center'>
        <h1 className='text-2xl font-semibold md:text-4xl '>Some Paid Courses</h1>

        <p className='mt-12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, necessitatibus. Necessitatibus voluptatum vero itaque vitae quae corporis aspernatur reprehenderit cum voluptatibus. Odio aliquam unde iure amet ab, consectetur repudiandae quidem?</p>

<div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
    {list.map((item)=>(
        <Card item={item} key={item.id}></Card>
    ))
        }
</div>
      </div>
    </div>
  )
}

export default CoursePaid
