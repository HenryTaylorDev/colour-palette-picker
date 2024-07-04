import { FaMinus, FaPlus } from "react-icons/fa";
import '../index.css';

import { IconButton } from "@mui/material";
import './components.scss';

const Toolbar = () => (
    <div className="bar-buttons">
        <IconButton label="Add" >
            <FaPlus color="inherit" /> </IconButton>
        <IconButton label="Subtract" >
            <FaMinus color="inherit" />
        </IconButton>
        <IconButton label="toggle lock"></IconButton>
    </div>
);

export default Toolbar;