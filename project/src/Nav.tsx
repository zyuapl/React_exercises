import React from "react";
import { Link } from "react-router-dom";

export default function Nav(): React.ReactElement {
    return (
        <>
        <div className="nav">
            <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/users"><li>Users</li></Link>
                    <Link to="/add"><li>Add new</li></Link>
            </ul>
        </div>
        </>
    )
}