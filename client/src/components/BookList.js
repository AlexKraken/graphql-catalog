import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries'

// components
import BookDetails from './BookDetails'

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery)
    const [selection, setSelection] = useState("")
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
        <div>
            <ul>
            {
                data.books.map(book => {
                    return(
                        <li key={book.id} onClick={e => {
                            setSelection(book.id)
                            console.log(book.id)
                        }}>{book.name}</li>
                    )
                })
            }
            </ul>
        <BookDetails bookId={selection}/>
        </div>
    )
}

export default BookList

