import React from 'react'
import { categories } from '../../../data/categories'

function ShopByCategory() {
  return (
    <section className='mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8'>
      <h2 className='text-[20px] lg:text-[32px] mb-4'>Shop by Category</h2>
          <div className='flex gap-10'>
              {
                  categories.map((category) => (
                      <div className='min-w-0' key={category.id}>
                          <img src={category.image} alt={category.name} ></img>
                          <h3 className='text-[18px] py-4'>{category.name}</h3>
                      </div>
                  ))
              }
          </div>
    </section>
  )
}

export default ShopByCategory