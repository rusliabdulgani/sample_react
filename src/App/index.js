import { Component } from "react";
import {
  Container,
  CircularProgress,
  Card,
  CardActionArea,
  Button,
  CardContent,
  CardActions,
  Typography,
  withStyles,
  CardMedia,
} from "@material-ui/core";
import Input1 from "./Input1";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      //   nilai2: 20,
      //   nilai3: 0,
    };
  }

  async componentDidMount() {
    try {
      let heroesRaw = await fetch("https://api.opendota.com/api/heroes");
      let heroes = await heroesRaw.json();
      console.log("heroes....", heroes);
      this.setState({
        heroes,
      });
    } catch (e) {
      console.log("error fetch dota api", e);
    }
  }

  render() {
    const { classes } = this.props;
    console.log(
      "ini nilai 1 dan nilai 2",
      this.state.nilai1,
      this.state.nilai2
    );
    return (
      <Container>
        {this.state.heroes.length === 0 ? (
          <CircularProgress />
        ) : (
          this.state.heroes.map((item) => {
            return (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.localized_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.primary_attr}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.roles.map((item) => {
                        return (
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {item}
                          </Typography>
                        );
                      })}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })
        )}
      </Container>
    );
  }
}

export default withStyles(styles)(App);
