import './style.css'

const ITEMS_PER_PAGE = 10

const Pagination = ({ itemAmount, currentPage, onPageChange }) => {
  const pages =  Math.ceil(itemAmount / ITEMS_PER_PAGE)

  return (
    <div className='pagination'>
      <button disabled={currentPage === 1} className='button-pre' onClick={() => onPageChange(currentPage - 1)}>&#60;</button>
      {Array.from(Array(pages)).map((page, index) => (
        <span
          onClick={() => onPageChange(index + 1)}
          className={index + 1 === currentPage ? 'is-active' : '' }
          key={index}>
          {index + 1}
        </span>))}
      <button disabled={pages === currentPage} className='button-next' onClick={() =>  onPageChange(currentPage + 1)}>&#62;</button>
    </div>
  )
}

export default Pagination
