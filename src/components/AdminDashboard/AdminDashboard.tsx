'use client'

import { useState } from "react";

import "./AdminDashboard.scss";
import ShortURLTable from "../ShortURLTable/ShortURLTable";
import EventEditorTable from "../EventEditorTable/EventEditorTable";
import { GoogleSignOutButton } from "../AuthButtons/AuthButtons";

export default function AdminDashboard() {

    const [selected, setSelected] = useState("Events");

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            
            <div>
                <div className="dashboard-selector">
                    <button onClick={() => setSelected("Short URLs")} className={selected == "Short URLs" ? "active" : ""}>Short URLs</button>
                    <button onClick={() => setSelected("Events")} className={selected == "Events" ? "active" : ""}>Events</button>
                    <GoogleSignOutButton />
                </div>
                <div className="dashboard-content">
                    {selected === "Short URLs" && <ShortURLTable />}
                    {selected === "Events" && <EventEditorTable />}
                </div>
            </div>
        </div>
    );
}