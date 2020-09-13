import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Switch } from "antd";
import { Global, css } from "@emotion/core";
import { Context } from "./../res/Store";

const Navbar = () => {
  const [state, setState] = useContext(Context);
  const switchTheme = () => {
    if (state.theme === "LIGHT") {
      setState({
        theme: "DARK",
        fontColor: "#00ffff",
        color1: "#00ffff",
        color2: "#7fffd4",
      });
    } else {
      setState({
        theme: "LIGHT",
        fontColor: "#1c1c1c",
        color1: "#565387",
        color2: "#3498db",
      });
    }
  };
  const color = (
    <Global
      styles={css`
        body {
          color: ${state.fontColor} !important;
        }
        .nav-link {
          color: ${state.color1} !important;
        }
        .navbar-brand {
          color: ${state.color1} !important;
        }
        .menu_active {
          border-bottom: 1px solid ${state.color1};
        }
        .navbar a:hover {
          color: ${state.color2} !important;
        }
      `}
    />
  );
  let navbarTheme;
  let background;
  if (state.theme === "LIGHT") {
    navbarTheme = "navbar-light";
    background = (
      <Global
        styles={css`
          body {
            background: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
          }
        `}
      />
    );
  } else {
    navbarTheme = "navbar-dark";
    background = (
      <Global
        styles={css`
          body {
            background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
          }
        `}
      />
    );
  }
  return (
    <>
      {color}
      {background}
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className={"navbar navbar-expand-lg bg-light " + navbarTheme}>
              <div className="container-fluid">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="navbar-brand"
                  to="/"
                >
                  Instant CV
                </NavLink>

                <div>
                  <span>
                    <strong>Dark Theme </strong>
                  </span>
                  <Switch onClick={switchTheme} />
                </div>

                {/* =========== Navbar Toggler =============== */}
                <button
                  className={"navbar-toggler " + navbarTheme}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* =========== Navbar Toggler End =============== */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        to="/templates"
                      >
                        Templates
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
