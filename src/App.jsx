import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./index.css";
import playersRaw from "./players_array_formatted";

// ===== Players & Teams =====
const PLAYERS = (playersRaw || []).map((p) => ({
  name: p.name || p.Player,
  team: p.team || p.Team || "Unknown",
}));

const PLAYERS_BY_TEAM = PLAYERS.reduce((acc, p) => {
  if (!acc[p.team]) acc[p.team] = [];
  acc[p.team].push({ value: p.name, label: p.name });
  return acc;
}, {});

const TEAM_OPTIONS = Object.keys(PLAYERS_BY_TEAM)
  .filter((t) => t !== "Team A" && t !== "Team B" && t !== "Team C") // remove dummy teams
  .sort()
  .map((team) => ({ value: team, label: team }));

const FOLLOWER_POS = ["Ruck", "Ruck Rover", "Rover", "Sub"];
const INTERCHANGE_POS = ["IC1", "IC2", "IC3", "IC4"];
const FIELD_POS = [
  { id: "BP-L", label: "BP" }, { id: "FB", label: "FB" }, { id: "BP-R", label: "BP" },
  { id: "HBF-L", label: "HBF" }, { id: "CHB", label: "CHB" }, { id: "HBF-R", label: "HBF" },
  { id: "W-L", label: "W" }, { id: "C", label: "C" }, { id: "W-R", label: "W" },
  { id: "HFF-L", label: "HFF" }, { id: "CHF", label: "CHF" }, { id: "HFF-R", label: "HFF" },
  { id: "FP-L", label: "FP" }, { id: "FF", label: "FF" }, { id: "FP-R", label: "FP" },
];

// ===== Dropdown Styles =====
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

// ===== TwoStageSelect =====
function TwoStageSelect({ value, onChange, onSetCaptain, onSetVice, isCaptain, isVice, captainTaken, viceTaken, showCaptainButtons = true, teamFilter }) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    if (!value) setSelectedTeam(null);
  }, [value]);

  if (value) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="chosen-name">{value}</span>
          <button className="reset-btn" onClick={() => onChange("")}>⟳</button>
        </div>
        {showCaptainButtons && (
          <div className="cv-buttons">
            {!isCaptain && !captainTaken && (
              <button className="c-btn" onClick={() => onSetCaptain(value)}>C</button>
            )}
            {isCaptain && <span className="c-tag">C</span>}
            {!isVice && !viceTaken && (
              <button className="vc-btn" onClick={() => onSetVice(value)}>VC</button>
            )}
            {isVice && <span className="vc-tag">VC</span>}
          </div>
        )}
      </div>
    );
  }

  const options = selectedTeam
    ? PLAYERS_BY_TEAM[selectedTeam.value] || []
    : teamFilter
      ? PLAYERS_BY_TEAM[teamFilter.value] || []
      : null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {!selectedTeam && !teamFilter && (
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
      {options && (
        <Select
          options={options}
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

// ===== Team Component (AFL / VFL) =====
function Team({ title, team, setTeam, interchangeSide, captain, vice, setCaptain, setVice, teamFilter }) {
  const setPos = (id, val) => {
    setTeam((t) => ({ ...t, [id]: val }));
    if (captain === val) setCaptain(null);
    if (vice === val) setVice(null);
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {interchangeSide === "left" && (
        <div className="interchange-panel">
          <h4>Interchange</h4>
          {INTERCHANGE_POS.map((slot) => (
            <div className="interchange-slot" key={slot}>
              <span className="pos-label">{slot}</span>
              <TwoStageSelect
                value={team[slot]}
                onChange={(val) => setPos(slot, val)}
                onSetCaptain={setCaptain}
                onSetVice={setVice}
                isCaptain={captain === team[slot]}
                isVice={vice === team[slot]}
                captainTaken={!!captain}
                viceTaken={!!vice}
                teamFilter={teamFilter}
              />
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
                <TwoStageSelect
                  value={team[id]}
                  onChange={(val) => setPos(id, val)}
                  onSetCaptain={setCaptain}
                  onSetVice={setVice}
                  isCaptain={captain === team[id]}
                  isVice={vice === team[id]}
                  captainTaken={!!captain}
                  viceTaken={!!vice}
                  teamFilter={teamFilter}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="followers-panel">
          {FOLLOWER_POS.map((slot) => (
            <div className="follower-slot" key={slot}>
              <span className="pos-label">{slot}</span>
              <TwoStageSelect
                value={team[slot]}
                onChange={(val) => setPos(slot, val)}
                onSetCaptain={setCaptain}
                onSetVice={setVice}
                isCaptain={captain === team[slot]}
                isVice={vice === team[slot]}
                captainTaken={!!captain}
                viceTaken={!!vice}
                teamFilter={teamFilter}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== App =====
export default function App() {
  const [aflTeam, setAflTeam] = useState({});
  const [vflTeam, setVflTeam] = useState({});
  const [cusp, setCusp] = useState([]);
  const [trade, setTrade] = useState([]);
  const [delist, setDelist] = useState([]);
  const [captain, setCaptain] = useState(null);
  const [vice, setVice] = useState(null);

  // Master filters
  const [aflFilterOn, setAflFilterOn] = useState(false);
  const [vflFilterOn, setVflFilterOn] = useState(false);
  const [listFilterOn, setListFilterOn] = useState(false);
  const [aflFilter, setAflFilter] = useState(null);
  const [vflFilter, setVflFilter] = useState(null);
  const [listFilter, setListFilter] = useState(null);

  // Reset
  const resetAFL = () => setAflTeam({});
  const resetVFL = () => setVflTeam({});
  const resetAll = () => {
    setAflTeam({});
    setVflTeam({});
    setCusp([]);
    setTrade([]);
    setDelist([]);
    setCaptain(null);
    setVice(null);
  };

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
        <div>
          <label>Filter AFL squad by team</label>
          <input type="checkbox" checked={aflFilterOn} onChange={(e) => setAflFilterOn(e.target.checked)} />
          {aflFilterOn && (
            <Select options={TEAM_OPTIONS} value={aflFilter} onChange={setAflFilter} styles={selectStyles} />
          )}
          <Team title="AFL Team" team={aflTeam} setTeam={setAflTeam} interchangeSide="left"
            captain={captain} vice={vice} setCaptain={setCaptain} setVice={setVice}
            teamFilter={aflFilterOn ? aflFilter : null}
          />
        </div>

        <div className="cusp">
          <h3>On the Cusp</h3>
          <label>Filter Cusp/Trade/Delist by team</label>
          <input type="checkbox" checked={listFilterOn} onChange={(e) => setListFilterOn(e.target.checked)} />
          {listFilterOn && (
            <Select options={TEAM_OPTIONS} value={listFilter} onChange={setListFilter} styles={selectStyles} />
          )}
          {Array.from({ length: 5 }).map((_, i) => (
            <TwoStageSelect key={`cusp-${i}`} value={cusp[i] || ""} onChange={(val) => {
              const newList = [...cusp]; newList[i] = val; setCusp(newList);
            }} showCaptainButtons={false} teamFilter={listFilterOn ? listFilter : null} />
          ))}
        </div>

        <div>
          <label>Filter VFL squad by team</label>
          <input type="checkbox" checked={vflFilterOn} onChange={(e) => setVflFilterOn(e.target.checked)} />
          {vflFilterOn && (
            <Select options={TEAM_OPTIONS} value={vflFilter} onChange={setVflFilter} styles={selectStyles} />
          )}
          <Team title="VFL Team" team={vflTeam} setTeam={setVflTeam} interchangeSide="right"
            captain={captain} vice={vice} setCaptain={setCaptain} setVice={setVice}
            teamFilter={vflFilterOn ? vflFilter : null}
          />
        </div>
      </div>

      <div className="extras">
        <div className="list-box">
          <h3>Trade List</h3>
          {Array.from({ length: 15 }).map((_, i) => (
            <TwoStageSelect key={`t-${i}`} value={trade[i] || ""} onChange={(val) => {
              const newList = [...trade]; newList[i] = val; setTrade(newList);
            }} showCaptainButtons={false} teamFilter={listFilterOn ? listFilter : null} />
          ))}
        </div>
        <div className="list-box">
          <h3>Delist List</h3>
          {Array.from({ length: 15 }).map((_, i) => (
            <TwoStageSelect key={`d-${i}`} value={delist[i] || ""} onChange={(val) => {
              const newList = [...delist]; newList[i] = val; setDelist(newList);
            }} showCaptainButtons={false} teamFilter={listFilterOn ? listFilter : null} />
          ))}
        </div>
      </div>
    </div>
  );
}
