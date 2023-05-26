import Image from 'next/image'
import About from './(components)/(About)/About'
import Featured from './(components)/(Featured)/Featured'


export default function Home() {
  return (
    <div>
      <About/>
      <Featured/>
    </div>
  )
}
