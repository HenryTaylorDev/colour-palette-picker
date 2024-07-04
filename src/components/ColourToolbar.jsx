import { FaLock, FaLockOpen, FaMinus, FaPlus } from "react-icons/fa";

import { IconButton } from "@mui/material";
import './styles/components.scss';

const ColourToolbar = ({ onAddColourBar, handleRemove, isLocked, toggleLock }) => (
    <div className="bar-buttons">
        <IconButton label="Add" onClick={() => onAddColourBar()}>
            <FaPlus color="inherit" /> </IconButton>
        <IconButton label="Subtract" onClick={() => handleRemove()} >
            <FaMinus color="inherit" />
        </IconButton>
        <IconButton
            label="toggle lock"
            onClick={toggleLock}
        >
            {isLocked ? <FaLock color="inherit" /> : <FaLockOpen color="inherit" />}
        </IconButton>
    </div>
);

export default ColourToolbar;