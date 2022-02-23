export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

function request(url=''){
    return  fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    });
}

export function getSchedule(){
    const url = API_BASE_URL + '/games';
    console.log(url);
    return request(url);
}

export function getLeaders(stat){
    const url = API_BASE_URL + '/players/leaders/' + stat;
    return request(url)
}

export function getStandings(){
    const url = API_BASE_URL + '/teams/leaders/';
    return request(url)
}

export async function getTeams(team){
    const url = API_BASE_URL + '/teams/' + team;
    return fetch(url).then(response => response.json())
}
