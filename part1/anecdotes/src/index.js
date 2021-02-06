import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const initialVotes = Array(props.anecdotes.length).fill(0)
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(initialVotes)

    // Generate a random number between 0 and 5
    const generateRandomNum = () => {
        return Math.floor(Math.random() * 6);
    }

    // Show random anecdote when button is clicked.
    const nextAnecdote = () => {
        let randomNum = generateRandomNum()

        // If randomNum is same as selected, generate new random number
        while (randomNum === selected) {
            randomNum = generateRandomNum()
        }
        setSelected(randomNum)
    };

    const voteAnecdote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div>
            <Anecdotes
                text="Anecdote of the day"
                anecdote={props.anecdotes[selected]}
                votes={votes[selected]}
            />
            <Button handleClick={voteAnecdote} text={"vote"}/>
            <Button handleClick={nextAnecdote} text={"next anecdote"} />

            <Anecdotes
                text="Anecdote with most votes"
                anecdote={props.anecdotes[votes.indexOf(Math.max(...votes))]}
                votes={Math.max(...votes)}
            />


        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Anecdotes = ({text, anecdote, votes}) => {
    return (
        <div>
            <h1>{text}</h1>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </div>

    )
}



const Button = ({handleClick, text}) => {
    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
}



ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)