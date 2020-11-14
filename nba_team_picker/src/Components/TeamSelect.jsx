import React from 'react';
import Select from 'react-select';
import './TeamSelect.css';

const teamList = [
    {team: 'Philadelphia 76ers', era: 'Current', tier: '1'},
    {team: '1976-77 Philadelphia 76ers', era: 'Classic', tier: '3'},
    {team: '2000-01 Philadelphia 76ers', era: 'Classic', tier: '1'},
    {team: 'All-Time Philadelphia 76ers', era: 'All-Time', tier: '1'},
    {team: 'Milwaukee Bucks', era: 'Current', tier: '1'},
    {team: '1970-71 Milwaukee Bucks', era: 'Classic', tier: '3'},
    {team: '1984-85 Milwaukee Bucks', era: 'Classic', tier: '3'},
    {team: 'All-Time Milwaukee Bucks', era: 'All-Time', tier: '2'},
    {team: 'Chicago Bulls', era: 'Current', tier: '3'},
    {team: '1985-86 Chicago Bulls', era: 'Classic', tier: '1'},
    {team: '1988-89 Chicago Bulls', era: 'Classic', tier: '2'},
    {team: '1990-91 Chicago Bulls', era: 'Classic', tier: '2'},
    {team: '1992-93 Chicago Bulls', era: 'Classic', tier: '1'},
    {team: '1995-96 Chicago Bulls', era: 'Classic', tier: '1'},
    {team: '1997-98 Chicago Bulls', era: 'Classic', tier: '1'},
    {team: '2010-11 Chicago Bulls', era: 'Classic', tier: '1'},
    {team: 'All-Time Chicago Bulls', era: 'All-Time', tier: '1'},
    {team: 'Cleveland Cavaliers', era: 'Current', tier: '3'},
    {team: '1989-90 Cleveland Cavaliers', era: 'Classic', tier: '3'},
    {team: '2006-07 Cleveland Cavaliers', era: 'Classic', tier: '2'},
    {team: '2015-16 Cleveland Cavaliers', era: 'Classic', tier: '1'},
    {team: 'All-Time Cleveland Cavaliers', era: 'All-Time', tier: '1'},
    {team: 'Boston Celtics', era: 'Current', tier: '1'},
    {team: '1964-65 Boston Celtics', era: 'Classic', tier: '2'},
    {team: '1985-86 Boston Celtics', era: 'Classic', tier: '2'},
    {team: '2007-08 Boston Celtics', era: 'Classic', tier: '1'},
    {team: 'All-Time Boston Celtics', era: 'All-Time', tier: '1'},
    {team: 'Los Angeles Clippers', era: 'Current', tier: '1'},
    {team: '2013-14 Los Angeles Clippers', era: '', tier: '2'},
    {team: 'All-Time Los Angeles Clippers', era: 'All-Time', tier: '3'},
    {team: 'Memphis Grizzlies', era: 'Current', tier: '2'},
    {team: '2005-06 Memphis Grizzlies', era: 'Classic', tier: '3'},
    {team: '2012-13 Memphis Grizzlies', era: 'Classic', tier: '3'},
    {team: 'All-Time Memphis Grizzlies', era: 'All-Time', tier: '3'},
    {team: 'Atlanta Hawks', era: 'Current', tier: '3'},
    {team: '1985-86 Atlanta Hawks', era: 'Classic', tier: '3'},
    {team: 'All-Time Atlanta Hawks', era: 'All-Time', tier: '3'},
    {team: 'Miami Heat', era: 'Current', tier: '2'},
    {team: '1996-97 Miami Heat', era: 'Classic', tier: '3'},
    {team: '2005-06 Miami Heat', era: 'Classic', tier: '2'},
    {team: '2012-13 Miami Heat', era: 'Classic', tier: '1'},
    {team: 'All-Time Miami Heat', era: 'All-Time', tier: '1'},
    {team: 'Charlotte Hornets', era: 'Current', tier: '3'},
    {team: '1992-93 Charlotte Hornets', era: 'Classic', tier: '3'},
    {team: 'All-Time Charlotte Hornets', era: 'All-Time', tier: '3'},
    {team: 'Utah Jazz', era: 'Current', tier: '2'},
    {team: '1997-98 Utah Jazz', era: 'Classic', tier: '2'},
    {team: 'All-Time Utah Jazz', era: 'All-Time', tier: '2'},
    {team: 'Sacramento Kings', era: 'Current', tier: '3'},
    {team: '2001-02 Sacramento Kings', era: 'Classic', tier: '1'},
    {team: 'All-Time Sacramento Kings', era: 'All-Time', tier: '3'},
    {team: 'New York Knicks', era: 'Current', tier: '3'},
    {team: '1971-72 New York Knicks', era: 'Classic', tier: '3'},
    {team: '1994-95 New York Knicks', era: 'Classic', tier: '3'},
    {team: '1998-99 New York Knicks', era: 'Classic', tier: '3'},
    {team: '2011-12 New York Knicks', era: 'Classic', tier: '1'},
    {team: 'All-Time New York Knicks', era: 'All-Time', tier: '2'},
    {team: 'Los Angeles Lakers', era: 'Current', tier: '1'},
    {team: '1964-65 Los Angeles Lakers', era: 'Classic', tier: '3'},
    {team: '1970-71 Los Angeles Lakers', era: 'Classic', tier: '3'},
    {team: '1986-87 Los Angeles Lakers', era: 'Classic', tier: '1'},
    {team: '1990-91 Los Angeles Lakers', era: 'Classic', tier: '3'},
    {team: '1997-98 Los Angeles Lakers', era: 'Classic', tier: '2'},
    {team: '2000-01 Los Angeles Lakers', era: 'Classic', tier: '1'},
    {team: '2003-04 Los Angeles Lakers', era: 'Classic', tier: '1'},
    {team: 'All-Time Los Angeles Lakers', era: 'All-Time', tier: '1'},
    {team: 'Orlando Magic', era: 'Current', tier: '2'},
    {team: '1994-95 Orlando magic', era: '', tier: '2'},
    {team: 'All-Time Orlando Magic', era: 'All-Time', tier: '1'},
    {team: 'Dallas Mavericks', era: 'Current', tier: '2'},
    {team: '2002-03 Dallas Mavericks', era: 'Classic', tier: '2'},
    {team: '2010-11 Dallas Mavericks', era: 'Classic', tier: '2'},
    {team: 'All-Time Dallas Mavericks', era: 'All-Time', tier: '3'},
    {team: 'Brooklyn Nets', era: 'Current', tier: '1'},
    {team: '2001-02 New Jersey Nets', era: 'Classic', tier: '2'},
    {team: 'All-Time Brooklyn Nets', era: 'All-Time', tier: '2'},
    {team: 'Denver Nuggets', era: 'Current', tier: '1'},
    {team: '1993-94 Denver Nuggets', era: 'Classic', tier: '3'},
    {team: '2007-08 Denver Nuggets', era: 'Classic', tier: '1'},
    {team: 'All-Time Denver Nuggets', era: 'All-Time', tier: '3'},
    {team: 'Indiana Pacers', era: 'Current', tier: '3'},
    {team: '2013-14 Indiana Pacers', era: 'Classic', tier: '2'},
    {team: 'All-Time Indiana Pacers', era: 'All-Time', tier: '3'},
    {team: 'New Orleans Pelicans', era: 'Current', tier: '3'},
    {team: 'All-Time New Orleans Pelicans', era: 'All-Time', tier: '3'},
    {team: 'Detroit Pistons', era: 'Current', tier: '3'},
    {team: '1988-89 Detroit Pistons', era: 'Classic', tier: '2'},
    {team: '2003-04 Detroit Pistons', era: 'Classic', tier: '2'},
    {team: 'All-Time Detroit Pistons', era: 'All-Time', tier: '2'},
    {team: 'Toronto Raptors', era: 'Current', tier: '1'},
    {team: '1999-00 Toronto Raptors', era: 'Classic', tier: '1'},
    {team: '2018-19 Toronto Raptors', era: 'Classic', tier: '1'},
    {team: 'All-Time Toronto Raptors', era: 'All-Time', tier: '2'},
    {team: 'Houston Rockets', era: 'Current', tier: '1'},
    {team: '1993-94 Houston Rockets', era: 'Classic', tier: '2'},
    {team: '2007-08 Houston Rockets', era: 'Classic', tier: '1'},
    {team: 'All-Time Houston Rockets', era: 'All-Time', tier: '1'},
    {team: 'San Antonio Spurs', era: 'Current', tier: '2'},
    {team: '1997-98 San Antonio Spurs', era: 'Classic', tier: '3'},
    {team: '2004-05 San Antonio Spurs', era: 'Classic', tier: '1'},
    {team: '2013-14 San Antonio Spurs', era: 'Classic', tier: '1'},
    {team: 'All-Time San Antonio Spurs', era: 'All-Time', tier: '2'},
    {team: 'Phoenix Suns', era: 'Current', tier: '3'},
    {team: '2002-03 Phoenix Suns', era: 'Classic', tier: '3'},
    {team: '2004-05 Phoenix Suns', era: 'Classic', tier: '1'},
    {team: 'All-Time Phoenix Suns', era: 'All-Time', tier: '2'},
    {team: 'Oklahoma City Thunder', era: 'Current', tier: '2'},
    {team: '1995-96 Seattle Supersonics', era: 'Classic', tier: '2'},
    {team: '2011-12 Oklahoma City Thunder', era: 'Classic', tier: '1'},
    {team: 'All-Time Oklahoma City Thunder', era: 'All-Time', tier: '1'},
    {team: 'Minnesota Timberwolves', era: 'Current', tier: '3'},
    {team: '2003-04 Minnesota Timberwolves', era: 'Classic', tier: '3'},
    {team: 'All-Time Minnesota Timberwolves', era: 'All-Time', tier: '2'},
    {team: 'Portland Trailblazers', era: 'Current', tier: '2'},
    {team: '1990-91 Portland Trailblazers', era: 'Classic', tier: '3'},
    {team: '1999-00 Portland Trailblazers', era: 'Classic', tier: '3'},
    {team: '2009-10 Portland Trailblazers', era: 'Classic', tier: '3'},
    {team: 'All-Time Portland Trailblazers', era: 'All-Time', tier: '2'},
    {team: 'Golden State Warriors', era: 'Current', tier: '1'},
    {team: '1990-91 Golden State Warriors', era: 'Classic', tier: '2'},
    {team: '2006-07 Golden State Warriors', era: 'Classic', tier: '2'},
    {team: '2015-16 Golden State Warriors', era: 'Classic', tier: '1'},
    {team: '2016-17 Golden State Warriors', era: 'Classic', tier: '1'},
    {team: 'All-Time Golden State Warriors', era: 'All-Time', tier: '1'},
    {team: 'Washington Wizards', era: 'Current', tier: '2'},
    {team: '2006-07 Washington Wizards', era: 'Classic', tier: '2'},
    {team: 'All-Time Washington Wizards', era: 'All-Time', tier: '3'},
    {team: 'All-Decade 2010s All-Stars', era: 'All-Time'},
    {team: 'All-Decade 2000s All-Stars', era: 'All-Time'},
    {team: 'All-Decade 1990s All-Stars', era: 'All-Time'},
    {team: 'All-Decade 1980s All-Stars', era: 'All-Time'},
    {team: 'All-Decade 1970s All-Stars', era: 'All-Time'},
    {team: 'All-Decade 1960s All-Stars', era: 'All-Time'},
    {team: 'Team LeBron', era: 'Current'},
    {team: 'Team Giannis', era: 'Current'},
    {team: 'Team USA', era: 'Current'},
    {team: 'Team World', era: 'Current'},
    {team: '2012 USA Basketball', era: 'Classic'},
    {team: '2016 USA Basketball', era: 'Classic'}
];

const eraOptions = [
    {value: 'All', label: 'All'},
    {value: 'Current', label: 'Current'},
    {value: "Classic", label: "Classic"},
    {value: "All-Time", label: "All-Time"}
];

const tierOptions = [
    {value: 'All', label: 'All'},
    {value: '1', label: 'Tier 1'},
    {value: "2", label: "Tier 2"},
    {value: "3", label: "Tier 3"}
];

class TeamSelect extends React.Component {

    state = {
        selectTierErrorMessage: "Select Tier",
        selectEraErrorMessage: "Select Era",
        selectTeamBtnDirty: false,
        selectTierDirty: false,
        selectEraDirty: false,
        selectedEra: null,
        selectedTier: null,
        filteredTeams: teamList,
        filteredTeamsByEra: null,
        filteredTeamsByTier: null,
        filteredTeamList: teamList.filter(teamName => teamName.team) // team names only
    };

    onChangeEraHandler = selectedItem => {
        if (this.state.selectTierDirty === true || this.state.selectEraDirty === true) {
            this.setState({filteredTeams: teamList});
        }
        this.setState({selectedEra: selectedItem.value, selectEraDirty: true});
    };

    onChangeTierHandler = selectedItem => {
        if (this.state.selectTierDirty === true || this.state.selectEraDirty === true) {
            this.setState({filteredTeams: teamList});
        }
        this.setState({selectedTier: selectedItem.value, selectTierDirty: true});
    };

    onClickHandler = () => {
        this.setState({selectedTeamBtnDirty: true, filteredTeams: this.filterTeamList()}, () => {
            this.randomizeTeam();
        })
    };

    render() {
        let tierErrorMessage, eraErrorMessage;
        if (!this.state.selectTierDirty && this.state.selectEraDirty) {
            tierErrorMessage = this.state.selectTierErrorMessage
        }
        else if (this.state.selectTierDirty && !this.state.selectEraDirty) {
            eraErrorMessage = this.state.selectEraErrorMessage
        }
        else if (!this.state.selectEraDirty && !this.state.selectTierDirty) {
            tierErrorMessage = this.state.selectTierErrorMessage;
            eraErrorMessage = this.state.selectEraErrorMessage;
        }

        return (
            <div>
                <Select className="cat-select" placeholder="Era" onChange={this.onChangeEraHandler} options={eraOptions} />
                <div className="error-message">{eraErrorMessage}</div>
                <Select className="cat-select" placeholder="Tier" onChange={this.onChangeTierHandler} options={tierOptions} />
                <div className="error-message">{tierErrorMessage}</div>
                <button disabled={!this.state.selectEraDirty || !this.state.selectTierDirty} className="Button" onClick={this.onClickHandler}>Select team</button>
            </div>
        )
    }

    randomizeTeam = () => {
        const ARRAY_LENGTH = this.state.filteredTeams.length;
        let randomNum = Math.floor(Math.random() * ARRAY_LENGTH);
        let randomTeam = this.state.filteredTeams[randomNum];

        console.log(randomTeam.team);
        return randomTeam.team;
    };

    filterTeamList = () => {
        return this.state.filteredTeams.filter(team => team.tier === this.state.selectedTier).filter(_team => _team.era === this.state.selectedEra);
    };
}

export default TeamSelect;