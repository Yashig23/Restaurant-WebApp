import { menu } from '../../constants/index'
import { useState } from 'react'

const MenuSection = () => {

  const [selectedDiv, setSelectedDiv] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (categoryId) => {
    setSelectedDiv(prevSelectedDiv => (prevSelectedDiv === categoryId ? null : categoryId));
    console.log("clicked")
  };

  const handleSelectOption = (optionId) => {
    setSelectedOption(prevSelectedOption => (prevSelectedOption === optionId ? null : optionId));
  }
  return (
    <>
      <section >
        <div className=' overflow-x-hidden h-[500px] w-[300px] overflow-y-scroll m-2 border-r-2 border-slate-200'>
          {menu.map((category) => (
            <div id={category.id} className='bg-neutral-100 p-4  justify-between m-2  border-b-2 border-black rounded hover:bg-neutral-200 hover:duration-300 hover:scale-100'>
              <h2 onClick={() => handleSelect(category.id)} className='font-light text-[17px] '>{category.name}</h2>
              {selectedDiv === category.id && <div>
                {category.subcategories ? (category.subcategories.map((subCat) => (
                  <div className='m-2'>
                    <div id={subCat.subId} onClick={() => handleSelectOption(subCat.subId)} className='bg-neutral-100 border-b-2 border-slate-300 p-2 font-light text-[17px] hover:bg-neutral-300 hover:duration-300 hover:scale-110'>{subCat.name}</div>
                    {selectedOption === subCat.subId && <div>
                      {subCat.subsubcategories ? (
                        subCat.subsubcategories.map((subSubCat) => (
                          <div className='bg-neutral-100  p-2'>
                            <h4>{subSubCat.name}</h4>
                            {subSubCat.items.map((item) => (
                              <div id={item.itemId} className='bg-slate-800 text-white p-3 m-0 text-[16px] font-extralight border-b-2 border-b-white hover:bg-white hover:text-black hover:scale-100 hover:duration-300'>
                                {item.name}
                              </div>
                            ))}
                          </div>
                        ))
                      ) : (
                        subCat.items.map((item) => (

                          <div id={item.itemId} className='bg-slate-800 text-white p-3 m-0 text-[16px] font-extralight border-b-2 border-b-white hover:bg-white hover:text-black hover:scale-100 hover:duration-300'>
                            {item.name}

                          </div>
                        ))
                      )}
                    </div>}
                  </div>

                )))

                  : category.items ? (
                    category.items.map((item) => (
                      <div key={item.itemId} id={item.itemId} className='bg-slate-800 text-white p-3 m-0 text-[16px] font-extralight border-b-2 border-b-white hover:bg-white hover:text-black hover:scale-100 hover:duration-300'>
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