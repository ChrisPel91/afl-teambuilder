/**
 * AFL & VFL Team Builder — Version 10.d (Safe Positioning)
 */

import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./index.css";
import playersRaw from "./players_array_formatted";

const PLAYERS = (playersRaw || []).map((p) => ({
  name: p.name || p.Player,
  team: p.team || p.Team || "Unknown",
}));

const PLAYERS_BY_TEAM = PLAYERS.reduce((acc, p) => {
  if (!acc[p.team]) acc[p.team] = [];
  acc[p.team].push({ value: p.name, label: p.name });
  return acc;
}, {});

const TEAM_OPTIONS = Object.keys(PLAYERS_BY_TEAM).sort().map((team) => ({
  value: team,
  label: team,
}));

const FOLLOWER_POS = ["Ruck", "Ruck Rover", "Rover", "Sub"];
const INTERCHANGE_POS = ["IC1", "IC2", "IC3", "IC4"];
const FIELD_POS = [
  { id: "BP-L", label: "BP" }, { id: "FB", label: "FB" }, { id: "BP-R", label: "BP" },
  { id: "HBF-L", label: "HBF" }, { id: "CHB", label: "CHB" }, { id: "HBF-R", label: "HBF" },
  { id: "W-L", label: "W" }, { id: "C", label: "C" }, { id: "W-R", label: "W" },
  { id: "HFF-L", label: "HFF" }, { id: "CHF", label: "CHF" }, { id: "HFF-R", label: "HFF" },
  { id: "FP-L", label: "FP" }, { id: "FF", label: "FF" }, { id: "FP-R", label: "FP" },
];

/* Dark mode styles for all Select dropdowns */
const selectStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#1b1d22",
    color: "white",
    borderColor: "#444",
    minHeight: "28px",
    fontSize: "12px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1b1d22",
    zIndex: 9999,
  }),
  singleValue: (base) => ({ ...base, color: "white" }),
  input: (base) => ({ ...base, color: "white" }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "#2f7a4f" : "#1b1d22",
    color: "white",
  }),
};

/* Two-stage dropdown (Team -> Player OR display name if chosen) */
function TwoStageSelect({ value, onChange }) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    if (!value) setSelectedTeam(null);
  }, [value]);

  if (value) {
    // Show chosen player's name + reset button
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span className="chosen-name">{value}</span>
        <button className="reset-btn" onClick={() => onChange("")}>⟳</button>
      </div>
    );
  }

  // Default: team select first, then player select
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {!selectedTeam && (
        <Select
          options={TEAM_OPTIONS}
          value={selectedTeam}
          onChange={(team) => setSelectedTeam(team)}
          placeholder="Select Team..."
          styles={selectStyles}
          classNamePrefix="Select"
          menuPortalTarget={document.body}
        />
      )}
      {selectedTeam && (
        <Select
          options={PLAYERS_BY_TEAM[selectedTeam.value]}
          onChange={(player) => onChange(player.value)}
          placeholder="Select Player..."
          styles={selectStyles}
          classNamePrefix="Select"
          menuPortalTarget={document.body}
        />
      )}
    </div>
  );
}

function Team({ title, team, setTeam, interchangeSide }) {
  const setPos = (id, val) => setTeam((t) => ({ ...t, [id]: val }));

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {interchangeSide === "left" && (
        <div className="interchange-panel">
          <h4>Interchange</h4>
          {INTERCHANGE_POS.map((slot) => (
            <div className="interchange-slot" key={slot}>
              <span className="pos-label">{slot}</span>
              <TwoStageSelect value={team[slot]} onChange={(val) => setPos(slot, val)} />
            </div>
          ))}
        </div>
      )}

      <div className="field">
        <h2>{title}</h2>
        <div className="field-wrapper">
          <div className="oval">
            <div className="center-square" />
            <div className="center-circle" />
            <div className="mini-circle" />
            <div className="curve-line curve-top" />
            <div className="curve-line curve-bottom" />

            {FIELD_POS.map(({ id, label }) => (
              <div key={id} className={`pos-slot pos-${id}`}>
                <span className="pos-label">{label}</span>
                <TwoStageSelect value={team[id]} onChange={(val) => setPos(id, val)} />
              </div>
            ))}
          </div>
        </div>

        <div className="followers-panel">
          {FOLLOWER_POS.map((slot) => (
            <div className="follower-slot" key={slot}>
              <span className="pos-label">{slot}</span>
              <TwoStageSelect value={team[slot]} onChange={(val) => setPos(slot, val)} />
            </div>
          ))}
        </div>
      </div>

      {interchangeSide === "right" && (
        <div className="interchange-panel">
          <h4>Interchange</h4>
          {INTERCHANGE_POS.map((slot) => (
            <div className="interchange-slot" key={slot}>
              <span className="pos-label">{slot}</span>
              <TwoStageSelect value={team[slot]} onChange={(val) => setPos(slot, val)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [aflTeam, setAflTeam] = useState({});
  const [vflTeam, setVflTeam] = useState({});
  const [cusp, setCusp] = useState([]);
  const [trade, setTrade] = useState([]);
  const [delist, setDelist] = useState([]);

  const resetAFL = () => setAflTeam({});
  const resetVFL = () => setVflTeam({});
  const resetAll = () => { setAflTeam({}); setVflTeam({}); setCusp([]); setTrade([]); setDelist([]); };

  return (
    <div className="app">
      <h1>AFL & VFL Team Builder</h1>
      <div className="header">
        <div className="top-buttons">
          <button onClick={resetAFL}>Reset AFL</button>
          <button onClick={resetVFL}>Reset VFL</button>
          <button onClick={resetAll}>Reset All</button>
        </div>
      </div>

      <div className="field-row">
        <Team title="AFL Team" team={aflTeam} setTeam={setAflTeam} interchangeSide="left" />

        <div className="cusp">
          <h3>On the Cusp of AFL Selection ({cusp.length}/5)</h3>
          <TwoStageSelect
            value={null}
            onChange={(val) => val && cusp.length < 5 && setCusp((c) => [...c, val])}
          />
          <ul>{cusp.map((p, i) => <li key={`${p}-${i}`}>{p}</li>)}</ul>
        </div>

        <Team title="VFL Team" team={vflTeam} setTeam={setVflTeam} interchangeSide="right" />
      </div>

      <div className="extras">
        <div className="list-box">
          <h3>Trade List ({trade.length}/15)</h3>
          <div className="grid-list">
            {Array.from({ length: 15 }).map((_, i) => (
              <TwoStageSelect key={`t-${i}`} value={trade[i] || ""} onChange={(val) => {
                const newList = [...trade]; newList[i] = val; setTrade(newList);
              }} />
            ))}
          </div>
        </div>

        <div className="list-box">
          <h3>Delist List ({delist.length}/15)</h3>
          <div className="grid-list">
            {Array.from({ length: 15 }).map((_, i) => (
              <TwoStageSelect key={`d-${i}`} value={delist[i] || ""} onChange={(val) => {
                const newList = [...delist]; newList[i] = val; setDelist(newList);
              }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
