import React from 'react'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai"

import Layout from 'components/Layout'
import { CardHome } from 'components/Card'

const index = () => {
  return (
    <Layout>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full p-10 bg-[#E5E5E5] rounded-lg">
          <h1 className="font-bold text-2xl text-black pb-5">New Product!</h1>
          <div className='grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-3 m-3'>
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
            <CardHome
              title='Jual Celana Panjang'
              price={20.00}
              label={"add to cart"}
              onclick={() => console.log("haha")}
            />
          </div>
          <div className="flex w-full my-10 ">
            <div className='flex w-full justify-end mr-5 text-base-100 dark:text-black'>
              <div className='mx-2'>
                <AiOutlineLeftCircle size={35}
                // onClick={() => prevPage()}
                />
              </div>
              <div className='mx-2'>
                <AiOutlineRightCircle size={35}
                // onClick={() => nextPage()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index