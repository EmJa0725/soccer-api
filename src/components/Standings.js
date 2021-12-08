import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { api_key } from '../config/variables'

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
        <div className="container mt-5">
            <h1 className="mb-5 text-center">{data}</h1>
            <Table striped bordered hover variant="secondary">
                <thead>
                    <tr>
                        <th>Club</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((item, index) => 
                        <tr key={index}>
                            <td>{item.team.name}</td>
                            <td>{item.points}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Standings
