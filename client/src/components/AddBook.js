import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../queries/queries'

function AuthorList() {
    const { loading, error, data } = useQuery(getAuthorsQuery)
    
    const displayAuthors = () => {
        if (loading) return <option disabled>Loading authors...</option>;
        if (error) return <option disabled>Error</option>;

        return data.authors.map(author => {
            return (<option key={author.id} value={author.id}>{author.name}</option>)
        })
    }

    return (
        <form id="add-book">

            <div className="field">
                <label>Book name:</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>

        </form>
    )
}

export default AuthorList

