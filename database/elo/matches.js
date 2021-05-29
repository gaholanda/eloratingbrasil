const FS = require("fs");
const CSV2JSON = require("convert-csv-to-json");
const CalcElo = require("./calcelo");

const RootFolder = "database";
const RatingsTeamsFolder = `${RootFolder}/ratings/teams`;

function teamRatingsFileExists(team_id) {
  let file = `${RatingsTeamsFolder}/${team_id}.csv`;
  let fileExists = FS.existsSync(file);
  return fileExists;
}

function getTeamRatings(team_id) {
  return CSV2JSON.getJsonFromCsv(`${RatingsTeamsFolder}/${team_id}.csv`);
}

function updateTeamRatings(team_id, content) {
  let file = `${RatingsTeamsFolder}/${team_id}.csv`;
  let fileExists = FS.existsSync(file);

  if (!fileExists) {
    FS.writeFileSync(
      file,
      `date;result;team_id;team_Ro;team_goals;opp_team_goals;opp_team_id;opp_team_Ro;tournament_id;team_Rn;\n${content}`
    );
  } else {
    FS.appendFileSync(file, `\n${content}`);
  }
}

function CalcRatings() {
  console.log(">>> Calculando ratings...");
  let file = process.argv[2];
  let teams = CSV2JSON.getJsonFromCsv(`${RootFolder}/teams.csv`);
  let matches = CSV2JSON.getJsonFromCsv(`${RootFolder}/matches/${file}.csv`);
  let tournaments = CSV2JSON.getJsonFromCsv(`${RootFolder}/tournaments.csv`);

  matches.map((match, i) => {
    if (i > -1) {
      let home_team = {
        ...teams.filter((team) => team.id === match.home_team_id)[0],
        Ro: 1500,
        Rn: 0,
      };
      let away_team = {
        ...teams.filter((team) => team.id === match.away_team_id)[0],
        Ro: 1500,
        Rn: 0,
      };

      let tournament = tournaments.filter(
        (t) => t.id === match.tournament_id
      )[0];

      let home_team_ratings = [];
      let away_team_ratings = [];

      if (teamRatingsFileExists(home_team.id)) {
        home_team_ratings = getTeamRatings(home_team.id);
      }

      if (teamRatingsFileExists(away_team.id)) {
        away_team_ratings = getTeamRatings(away_team.id);
      }

      if (home_team_ratings.length > 0) {
        home_team.Ro = parseInt(home_team_ratings.pop().team_Rn);
      }

      if (away_team_ratings.length > 0) {
        away_team.Ro = parseInt(away_team_ratings.pop().team_Rn);
      }

      home_team.Rn = CalcElo({
        Ro: home_team.Ro,
        K: parseInt(tournament.k),
        goals_for: parseInt(match.home_team_goals),
        goals_against: parseInt(match.away_team_goals),
        goals_diff:
          parseInt(match.home_team_goals) - parseInt(match.away_team_goals),
        rating_one: home_team.Ro,
        rating_two: away_team.Ro,
        playing_home: true,
      });

      (home_team.result =
        parseInt(match.home_team_goals) > parseInt(match.away_team_goals)
          ? "win"
          : parseInt(match.home_team_goals) === parseInt(match.away_team_goals)
          ? "draw"
          : "loss"),
        (away_team.Rn = CalcElo({
          Ro: away_team.Ro,
          K: parseInt(tournament.k),
          goals_for: parseInt(match.away_team_goals),
          goals_against: parseInt(match.home_team_goals),
          goals_diff:
            parseInt(match.away_team_goals) - parseInt(match.home_team_goals),
          rating_one: away_team.Ro,
          rating_two: home_team.Ro,
        }));
      (away_team.result =
        parseInt(match.away_team_goals) > parseInt(match.home_team_goals)
          ? "win"
          : parseInt(match.away_team_goals) === parseInt(match.home_team_goals)
          ? "draw"
          : "loss"),
        updateTeamRatings(
          home_team.id,
          `${match.date};${home_team.result};${home_team.id};${home_team.Ro};${match.home_team_goals};${match.away_team_goals};${away_team.id};${away_team.Ro};${match.tournament_id};${home_team.Rn}`
        );
      updateTeamRatings(
        away_team.id,
        `${match.date};${away_team.result};${away_team.id};${away_team.Ro};${match.away_team_goals};${match.home_team_goals};${home_team.id};${home_team.Ro};${match.tournament_id};${away_team.Rn}`
      );
    } else {
      return false;
    }
  });
}

CalcRatings();
