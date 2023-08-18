// import ReactPaginate from 'react-paginate';
// import { useEffect, useState } from 'react';

// function ReactPagination() {
//   const [items, setItems] = useState([]);

//   const [pageCount, setpageCount] = useState(0);
//   const [startPage, setStartPage] = useState(1);
//   const [endPage, setEndPage] = useState(3);
//   let limit = 10;

//   useEffect(() => {
//     const getComments = async () => {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
//       );
//       const data = await res.json();
//       const total = res.headers.get('x-total-count');
//       setpageCount(Math.ceil(total / limit));
//       // console.log(Math.ceil(total/12));
//       setItems(data);
//     };

//     getComments();
//   }, [limit]);

//   const fetchComments = async (currentPage) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
//     );
//     const data = await res.json();
//     return data;
//   };

//   // const handlePageClick = async (data) => {
//   //   console.log(data.selected);

//   //   let currentPage = data.selected + 1;
//   //   console.log(currentPage);
//   //   const commentsFormServer = await fetchComments(currentPage);

//   //   setItems(commentsFormServer);
//   // };

//   const handlePageClick = async (data) => {
//     let currentPage = data.selected + 1;

//     // Calculate the range of page numbers to display
//     let startPage = currentPage - 1;
//     let endPage = currentPage + 1;

//     // Ensure the startPage is never less than 1
//     if (startPage < 1) {
//       startPage = 1;
//       endPage = Math.min(pageCount, 3);
//     }

//     // Ensure the endPage is never greater than pageCount
//     if (endPage > pageCount) {
//       endPage = pageCount;
//       startPage = Math.max(1, pageCount - 2);
//     }

//     // Fetch and update items for the selected page
//     const commentsFormServer = await fetchComments(currentPage);
//     setItems(commentsFormServer);

//     // Update the page range to display
//     setStartPage(startPage);
//     setEndPage(endPage);
//   };

//   return (
//     <div className='container'>
//       <div className='row m-2'>
//         {items.map((item) => {
//           return (
//             <div key={item.id} className='col-sm-6 col-md-4 v my-2'>
//               <div className='card shadow-sm w-100' style={{ minHeight: 225 }}>
//                 <div className='card-body'>
//                   <h5 className='card-title text-center h2'>Id :{item.id} </h5>
//                   <h6 className='card-subtitle mb-2 text-muted text-center'>
//                     {item.email}
//                   </h6>
//                   <p className='card-text'>{item.body}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <ReactPaginate
//         previousLabel={'<'}
//         nextLabel={'>'}
//         breakLabel={'...'}
//         pageCount={endPage - startPage + 1}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={3}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination justify-content-center'}
//         pageClassName={'page-item'}
//         pageLinkClassName={'page-link'}
//         previousClassName={'page-item'}
//         previousLinkClassName={'page-link'}
//         nextClassName={'page-item'}
//         nextLinkClassName={'page-link'}
//         breakClassName={'page-item'}
//         breakLinkClassName={'page-link'}
//         activeClassName={'active'}
//       />
//     </div>
//   );
// }

// export default ReactPagination;
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function ReactPagination() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, [currentPage]);

  const fetchComments = async (page) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className='container'>
      <div className='row m-2'>
        {items.map((item) => {
          return (
            <div key={item.id} className='col-sm-6 col-md-4 v my-2'>
              <div className='card shadow-sm w-100' style={{ minHeight: 225 }}>
                <div className='card-body'>
                  <h5 className='card-title text-center h2'>Id :{item.id} </h5>
                  <h6 className='card-subtitle mb-2 text-muted text-center'>
                    {item.email}
                  </h6>
                  <p className='card-text'>{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(100 / limit)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default ReactPagination;
