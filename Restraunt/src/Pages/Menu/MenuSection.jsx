import { menu } from '../../constants/index'
import { useState } from 'react'

const MenuSection = () => {

  const [selectedDiv, setSelectedDiv] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);


//  function handleSelect(data){
//     setSelectedDiv(prevSelectedDiv => !prevSelectedDiv)
//  }
const handleSelect = (categoryId) => {
  setSelectedDiv(prevSelectedDiv => (prevSelectedDiv === categoryId ? null : categoryId));
  console.log("clicked")
};

const handleSelectOption =(optionId) =>{
  setSelectedOption(prevSelectedOption => (prevSelectedOption === optionId? null: optionId));
}
  return (
    <>
      <section>
        <div className=' overflow-x-hidden h-[500px]  overflow-y-scroll'>
          {menu.map((category) => (
            <div id={category.id}  className='bg-red-300 p-4  justify-between m-2 '>
              <h2 onClick={() => handleSelect(category.id)}>{category.name}</h2>
              {selectedDiv === category.id && <div>
              {category.subcategories ? (category.subcategories.map((subCat) => (
                <div>
                <div id={subCat.subId} onClick={() => handleSelectOption(subCat.subId)} className='bg-slate-300 p-2'>{subCat.name}</div>
                {selectedOption === subCat.subId && <div>
                {subCat.subsubcategories ? (
                      subCat.subsubcategories.map((subSubCat) => (
                        <div  className='bg-gray-200 p-2'>
                          <h4>{subSubCat.name}</h4>
                          {subSubCat.items.map((item) => (
                            <div  id={item.itemId} className='bg-black text-white p-1'>
                              {item.name} 
                            </div>
                          ))}
                        </div>
                      ))
                    ) : (
                      subCat.items.map((item) => (
                        <div  id={item.itemId} className='bg-black text-white p-1'>
                          {item.name} 
                        </div>
                      ))
                    )}
                     </div>}
                </div>
                
              )))
             
              : category.items ? (
                category.items.map((item) => (
                  <div key={item.itemId} id={item.itemId} className='bg-green-200 p-2'>
                    {item.name} - {item.price}
                  </div>
                ))
              ) : (
                <div className='bg-red-300 p-2'>Null</div>
              )}
              </div>}
            </div>
            

          ))}
        </div>
      </section>
    </>
  )
}

export default MenuSection