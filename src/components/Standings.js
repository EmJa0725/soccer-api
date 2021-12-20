import React, { useState, useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import { api_key } from '../config/variables'


const Standings = () => {
    const [standings, setStandings] = useState([])
    const location = useLocation();    
    const { id, headerLogo, name } = location.state.data;
    const [standingData,setStandingData] = useState({
        id: '',
        headerLogo: '',
        name: ''
    });
    
    const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/standings?league=${id}&season=2021`,
        headers: {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    };

    const getLeagueStandings = async () => {
        try {
            const res = await axios(config);
            const standings = res.data.response[0].league.standings[0];
            setStandings([...standings]);
            setStandingData({ 
                id: id,
                headerLogo: headerLogo,
                name: name
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setStandings([]);
        getLeagueStandings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <div className="container mt-1">
            {!standings.length ? <Spinner className="mt-2" animation="grow" variant="danger" />
                :
                <Fragment>
                    <div className="col-12  text-center">
                        <img className="img-responsive league-img" src={standingData.headerLogo} alt={standingData.name} />
                    </div>
                    <div className="table-container">
                        <Table hover responsive variant="secondary">
                            <thead>
                                <tr>
                                    <th className="table-header"></th>
                                    <th className="table-header">Club</th>
                                    <th className="table-header">Played</th>
                                    <th className="table-header">Won</th>
                                    <th className="table-header">Drawn</th>
                                    <th className="table-header">Lost</th>
                                    <th className="table-header">GF</th>
                                    <th className="table-header">GA</th>
                                    <th className="table-header">GD</th>
                                    <th className="table-header">Points</th>
                                    <th className="table-header">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standings.map((item, index) =>
                                    <tr key={index}>
                                        <td className="text-center">{item.rank}</td>
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
                                        <td className="form-column">{[...item.form].map((char, index) =>
                                            <span key={index} className={`form ${char === "W" ? "win" : char === "D" ? "draw" : "lose"} me-2`}>
                                                {char}
                                            </span>
                                        )}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default Standings
