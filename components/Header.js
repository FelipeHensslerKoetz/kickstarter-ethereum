import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">
          Kickstarter
        </a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">
            Campanhas
          </a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">
            +
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};