import {books} from "../../../data"

export default (req,res) =>{  
    
    
}

// const getBook = (req,res) =>{
    //     const {bookId} = req.query
    //     const book = books.find((book) => book.id == bookId)
    //     if(!book) 
    // res.status(404).json({message: `book with id ${bookId} not found`})
    // res.status(200).json(book)

// }

// const deleteBook = (req, res) => {
//     const { bookId } = req.query;
//     const index = books.findIndex((book) => book.id == bookId);
//     books.splice(index, 1);
//     res.status(200).json({ message: `Book with id ${bookId} deleted` });
//   };

// const updateBook = (req, res) => {
//     const { bookId } = req.query;
//     const index = books.findIndex((book) => book.id == bookId);
//     books.splice(index, 1, req.body);
//     res.status(200).json({ message: `Book with id ${bookId} updated` });
//   };
  
  