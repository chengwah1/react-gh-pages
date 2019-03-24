import React from 'react';

const Stats = (props) => {
    const totalPlayer = props.players.length;
    const totalPoint = props.players.reduce((total,players)=>{
        return total+players.score;
    },0);
    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Player:</td>
                    <td>{totalPlayer}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoint}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;