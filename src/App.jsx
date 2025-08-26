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

function TwoStageSelect({ value, onChange, onSetCaptain, onSetVice, isCaptain, isVice, captainTaken, viceTaken }) {
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
      </div>
    );
  }

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

function Team({ title, team, setTeam, interchangeSide, captain, vice, setCaptain, setVice }) {
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
              />
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
              <TwoStageSelect
                value={team[slot]}
                onChange={(val) => setPos(slot, val)}
                onSetCaptain={setCaptain}
                onSetVice={setVice}
                isCaptain={captain === team[slot]}
                isVice={vice === team[slot]}
                captainTaken={!!captain}
                viceTaken={!!vice}
              />
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
  const [captain, setCaptain] = useState(null);
  const [vice, setVice] = useState(null);

  // Reset buttons
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

  // ===== Share link system =====
  const handleShare = () => {
    const encode = (team) => Object.entries(team).map(([k,v]) => `${k}:${v}`).join(";");
    const params = new URLSearchParams({
      afl: encode(aflTeam),
      vfl: encode(vflTeam),
      c: captain || "",
      vc: vice || "",
    });
    const url = `${window.location.origin}?${params.toString()}`;
    navigator.clipboard.writeText(url);
    alert("Team link copied! Share it anywhere:\n" + url);
  };

  // ===== Load from URL (auto-fill) =====
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const parseTeam = (str) => {
      if (!str) return {};
      return str.split(";").reduce((acc, pair) => {
        const [pos, player] = pair.split(":");
        if (pos && player) acc[pos] = player;
        return acc;
      }, {});
    };

    const aflStr = params.get("afl");
    const vflStr = params.get("vfl");
    const c = params.get("c");
    const vc = params.get("vc");

    if (aflStr) setAflTeam(parseTeam(aflStr));
    if (vflStr) setVflTeam(parseTeam(vflStr));
    if (c) setCaptain(c);
    if (vc) setVice(vc);
  }, []);

  return (
    <div className="app">
      <h1>AFL & VFL Team Builder</h1>
      <div className="header">
        <div className="top-buttons">
          <button onClick={resetAFL}>Reset AFL</button>
          <button onClick={resetVFL}>Reset VFL</button>
          <button onClick={resetAll}>Reset All</button>
          <button onClick={handleShare}>Share</button>
        </div>
      </div>

      <div className="field-row">
        <Team
          title="AFL Team"
          team={aflTeam}
          setTeam={setAflTeam}
          interchangeSide="left"
          captain={captain}
          vice={vice}
          setCaptain={setCaptain}
          setVice={setVice}
        />

        <div className="cusp">
          <h3>On the Cusp of AFL Selection ({cusp.length}/5)</h3>
          <TwoStageSelect
            value={null}
            onChange={(val) => val && cusp.length < 5 && setCusp((c) => [...c, val])}
          />
          <ul>{cusp.map((p, i) => <li key={`${p}-${i}`}>{p}</li>)}</ul>
        </div>

        <Team
          title="VFL Team"
          team={vflTeam}
          setTeam={setVflTeam}
          interchangeSide="right"
          captain={captain}
          vice={vice}
          setCaptain={setCaptain}
          setVice={setVice}
        />
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
