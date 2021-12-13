import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, ListItem, ListItemText } from "@mui/material";
import { cloneElement } from "react";
import { NavLink } from "react-router-dom";

export interface ListItemLinkProps {
  text: any;
  to: string;
  open?: boolean;
  expandable?: boolean;
  onClick?: any;
  onExpandClick?: any;
}

const ListItemLink: React.FC<ListItemLinkProps> = ({
  open,
  to,
  text,
  onClick,
  onExpandClick,
  expandable,
}) => {
  const expandBtn = function () {
    if (!expandable) return null;

    let icon = open ? <ExpandLess /> : <ExpandMore />;

    return cloneElement(icon, {
      onClick: onExpandClick,
      sx: { paddingRight: "10px" },
    });
  };

  return (
    <li>
      <ListItem button component={NavLink} to={to}>
        {expandBtn()}
        <ListItemText primary={text} onClick={onClick} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
