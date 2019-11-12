import React from "react";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";

class Players extends React.Component {
  state = {
    player: [{}]
  };

  componentDidMount = () => {
    fetch(`http://localhost:5000/api/players`)
      .then(player => player.json(player))
      .then(player => {
        this.setState({
          player: player
        });
      })
      .catch(err => console.log(err, "not working right"));
  };
  render() {
    return (
      <div className="players">
        {this.state.player.map(props => (
          <Card key={[0]}>
            <CardActionArea>
              <CardContent>
                <Typography key={[1]} component="h2" color="textPrimary">
                  {props.name}
                </Typography>
                <Typography key={[2]} component="h3" color="secondary">
                  Country: {props.country}
                </Typography>
                <Typography key={[3]} component="h4" color="textSecondary">
                  # of Searches: {props.searches}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    );
  }
}

export default Players;
