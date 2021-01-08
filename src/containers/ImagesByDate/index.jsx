import React, { useState, useRef } from 'react'
import axios from "axios"
import Pagination from '../../components/Pagination'
import './style.css'

const ROVERS_CURIOSITY_API_BY_DATE = (date) => `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=DEMO_KEY&page=1`
const ITEMS_PER_PAGE = 10

const ImagesByDate = () => {
  const inputEl = useRef(null)
  const [marsImagesByDate, setMarsImagesByDate] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const getImagesByDate = () => {
    const dateInput = inputEl.current.value

    axios.get(ROVERS_CURIOSITY_API_BY_DATE(dateInput)).then(response => {
      console.log(response.data.photos, 'response.data.photos')
      setMarsImagesByDate(response.data.photos)
    })
  }

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const getCurrentSlice = () => {
    if(currentPage === 1) {
      return marsImagesByDate.slice(0, ITEMS_PER_PAGE * currentPage)
    } else {
      return marsImagesByDate.slice(ITEMS_PER_PAGE * (currentPage - 1))
    }
  }

  return (
    <div className='container-images-by-date'>
      <h1>Mars Images By Date</h1>
      <div className='search-bar'>
        <div>
          <span>Earth date:</span>
          <input ref={inputEl} type="text" placeholder={'Example: 2020-11-1'}/>
        </div>
        <button onClick={() => { getImagesByDate()}}>Search &#128269;</button>
      </div>
      <div className='image-list'>
        {getCurrentSlice().map(image => <img key={image.id} src={image.img_src} alt="" />)}
      </div>
      {marsImagesByDate.length > 0 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          itemAmount={marsImagesByDate.length}
        />)}
    </div>
  )
}

export default ImagesByDate
