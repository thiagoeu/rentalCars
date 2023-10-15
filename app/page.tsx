import Image from 'next/image'
import Hero from '@/components/Hero'
import { CustomFilter,SearchBar } from '@/components'

export default function Home() {
  return (
    <main className= "overflow-hidden" >
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
           <h1 className='text-4xl font-extrabold'>
              Catálogo 
           </h1>
           <p>verifique nossos modelos</p>
        </div>

        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
             <CustomFilter title="fuel"/>
             <CustomFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  )
}
