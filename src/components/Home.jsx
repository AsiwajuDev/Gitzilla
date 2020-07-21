import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { useState } from "react";
// import axios from "axios";

const useStyles = makeStyles({
  button: {
    backgroundColor: "rgb(122, 72, 216)",
    color: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    transform: "rotate(-0.12deg)",
  },
});
const Home = (props) => {
  // const [userName, setuserName] = useState("");
  const classes = useStyles();
  const handleChange = async (e) => {
    const newUser = e.target.value;
    props.changeName(newUser);
  };
  return (
    <>
      <div className="sidebar">
        <h1 className="heading">Resume Builder</h1>
        <p>Create a simple yet elegant resume instantly</p>
        <ul>
          <li>Fetches your skills</li>
          <li>Fetches your projects</li>
          <li>Links to your repos</li>
          <li>Fetches your Profile image</li>
        </ul>

        <div className="inputContainer">
          <label htmlFor="Username" className="inputLabel">
            Enter your GitHub Username
          </label>
          <input
            name="Username"
            type="text"
            value={props.userName}
            onChange={handleChange}
          />
          {/* <Link to={`/users/${props.userName}`} className="button">
            Generate Resume
          </Link> */}
          <Button
            variant="outlined"
            // color="secondary"
            size="small"
            className={classes.button}
            href={`/users/${props.userName}`}
            disabled={props.userName ? false : true}
          >
            Generate Resume
          </Button>
        </div>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <div className="footer">Made with ❤️ by Khushbu</div>
      </div>
      <div className="main home">
        <img src={require("../assets/background.svg")} alt=" resume builder" />
      </div>
    </>
  );
};
export default Home;
