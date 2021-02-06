import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const feedbacks = [good, neutral, bad]
    const total = good + neutral + bad

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick = {() => setGood(good + 1)} text = {"good"}/>
            <Button handleClick = {() => setNeutral(neutral + 1)} text = {"neutral"}/>
            <Button handleClick = {() => setBad(bad + 1)} text = {"bad"}/>

            <h1>statistics</h1>
            <Statistics feedbacks={feedbacks} total={total}/>
        </div>
    )
}


const AllFeedback = (props) => {
    return (
        <tr>
            <th>all</th>
            <td>{props.total} </td>
        </tr>
    )
}

const Average = (props) => {
    return(
        <tr>
            <th>average</th>
            <td>{(props.feedbacks[0] * 1 + props.feedbacks[1] * 0 + props.feedbacks[2] * (-1)) /props.total}</td>
        </tr>
    )
}

const Positive = (props) => {
    return (
        <tr>
            <th>positive</th>
            <td>{props.feedbacks[0] / props.total * 100} %</td>
        </tr>
    )
}


const Statistics = (props) => {
    if(props.total === 0){
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (

            <table>

            <Statistic text={"good"} value={props.feedbacks[0]}/>
            <Statistic text={"neutral"} value={props.feedbacks[1]}/>
            <Statistic text={"bad"} value={props.feedbacks[2]}/>
            <AllFeedback total={props.total}/>
            <Average feedbacks={props.feedbacks} total={props.total}/>
            <Positive feedbacks={props.feedbacks} total={props.total}/>

            </table>


    )
}

const Statistic = (props) => {
    return (
        <tr>
            <th>{props.text}</th>
            <td> {props.value}</td>
        </tr>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
