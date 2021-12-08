import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { api_key } from '../config/variables'
import premier from "../assets/premier-logo-horizontal.png";

function Standings() {
    const [standings, setStandings] = useState([])

    const location = useLocation();
    const { data } = location.state;
    const config = {
        method: 'get',
        url: 'https://v3.football.api-sports.io/standings?league=39&season=2021',
        headers: {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    };

    const getLeagueStandings = async () => {
        try {
            const res = await axios(config);
            const standings = res.data.response[0].league.standings[0];
            console.log(standings);
            setStandings([...standings]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLeagueStandings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="container mt-1">
            <img className="img-responsive league-img" src={premier} alt={premier} />
            <Table hover variant="secondary">
                <thead>
                    <tr>
                        <th></th>
                        <th>Club</th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Drawn</th>
                        <th>Lost</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Points</th>
                        <th>Form</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((item, index) =>
                        <tr key={index}>
                            <td>{item.rank}</td>
                            <td>
                                <img src={item.team.logo}
                                    alt={item.team.name}
                                    style={{ width: '1.8rem' }}
                                    className="img-fluid me-2"
                                />
                                {item.team.name}
                            </td>
                            <td>{item.all.played}</td>
                            <td>{item.all.win}</td>
                            <td>{item.all.draw}</td>
                            <td>{item.all.lose}</td>
                            <td>{item.all.goals.for}</td>
                            <td>{item.all.goals.against}</td>
                            <td>{item.goalsDiff}</td>
                            <td className="fw-bold">{item.points}</td>
                            <td>{[...item.form].map((char, index) => 
                                <span key={index} className={`${char === "W" ? "win-style" : char === "D" ? "draw-style" : "lose-style"} me-2`}>
                                    {char}
                                </span>
                            )}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Standings
