import axios from 'axios'
import styles from '../styles/Home.module.css'
import { useEffect , useState} from 'react'

export default function Home() {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    axios.get("/api/books").then((res)=>setBooks(res.data))
  })


  return (
    <div className={styles.container}>
      <h1>mis libros</h1>

      <ul>
        {books.map((book,i)=>(
          <li key={i}>{book.name}</li>
        ))}
        <li></li>
      </ul>
    </div>
  )
}
