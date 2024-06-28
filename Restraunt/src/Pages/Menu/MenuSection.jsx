import { menu } from '../../constants/index'
import { useState } from 'react'

function menuList(value){
  console.log(value)
  if(subcategories){
    console.log("yes")
  }
  else{
    console.log("Ture");
  }
  console.log("1")
  
}

const MenuSection=()=>{
    return (
        <>
       <section>
        <div className='scroll-smooth w-auto h-auto '>
        {menu.map((category)=>(
     <div id= {menu.id}  onClick={()=>menuList(category.id)} className='bg-red-300 p-4  justify-between m-2 '>
       <h2>{category.name}</h2>
      <select>
        <option>Option 1</option>
      </select>
    {category.subcategories? (category.subcategories.map((subCat)=>(
        <div id={subCat.subId} className='bg-slate-300 p-2'>{subCat.name}</div>
    ))) 
    :category.subcategories && category.subcategories.items? (category.subcategories.items.map((data)=>(
        <div id={data.itemId} className='bg-black text-white'>{data.name}</div>

    )))
    : category.items ? (
        category.items.map((subItem) => (
          <div key={subItem.itemId} id={subItem.itemId} className='bg-green-200 p-2'>
            {subItem.name}
          </div>
        ))
      ) : <div className='bg-red-300 p-2'>Null</div>}
     </div>

    ))}
        </div>
       </section>
        </>
    )
}

export default MenuSection