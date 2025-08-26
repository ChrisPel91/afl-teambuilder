/**
 * AFL & VFL Team Builder — Master Filters + Share + C/VC + Cusp 5 slots
 * (All teams/players come directly from players_array_formatted; no hard filtering)
 */

import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./index.css";
import playersRaw from "./players_array_formatted";

/* ===== Players & Teams (NO filtering — use everything in file) ===== */
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
  .filter(team => !["Team A", "Team B", "Team C"].includes(team)) // remove junk teams
  .sort()
  .map(team => ({ value: team, label: team }));

/* ===== Layout data ===== */
const FOLLOWER_POS = ["Ruck", "Ruck Rover", "Rover", "Sub"];
const INTERCHANGE_POS = ["IC1", "IC2", "IC3", "IC4"];
const FIELD_POS = [
  { id: "BP-L", label: "BP" }, { id: "FB", label: "FB" }, { id: "BP-R", label: "BP" },
  { id: "HBF-L", label: "HBF" }, { id: "CHB", label: "CHB" }, { id: "HBF-R", label: "HBF" },
  { id: "W-L", label: "W" }, { id: "C", label: "C" }, { id: "W-R", label: "W" },
  { id: "HFF-L", label: "HFF" }, { id: "CHF", label: "CHF" }, { id: "HFF-R", label: "HFF" },
  { id: "FP-L", label: "FP" }, { id: "FF", label: "FF" }, { id: "FP-R", label: "FP" },
];

/* ===== react-select dark styles ===== */
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

/**
 * TwoStageSelect
 * - If sectionTeamFilter is provided, we SKIP the team select and only show that team’s players.
 * - Otherwise: Team -> Player (two-stage) flow.
 * - C/VC buttons can be toggled (showCaptainButtons).
 */
function TwoStageSelect({
  value,
  onChange,
  sectionTeamFilter = null,
  showCaptainButtons = false,
  onSetCaptain,
  onSetVice,
  isCaptain,
  isVice,
  captainTaken,
  viceTaken,
}) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Reset internal team step when external value cleared
  useEffect(() => {
    if (!value) setSelectedTeam(null);
  }, [value]);

  // When a name is chosen, render label + optional C/VC
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
              <button className="c-btn" onClick={() => onSetCaptain?.(value)}>C</button>
            )}
            {isCaptain && <span className="c-tag">C</span>}

            {!isVice && !viceTaken && (
              <button className="vc-btn" onClick={() => onSetVice?.(value)}>VC</button>
            )}
            {isVice && <span className="vc-tag">VC</span>}
          </div>
        )}
      </div>
    );
  }

  // If a section team filter is on, only show that team's players
  if (sectionTeamFilter && PLAYERS_BY_TEAM[sectionTeamFilter]) {
    return (
      <Select
        options={PLAYERS_BY_TEAM[sectionTeamFilter]}
        onChange={(player) => onChange(player.value)}
        placeholder={`Select ${sectionTeamFilter} player...`}
        styles={selectStyles}
        classNamePrefix="Select"
        menuPortalTarget={document.body}
      />
    );
  }

  // Default: team first, then player
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

/* A small helper control row for each section’s Master Filter */
function MasterFilterRow({ label, enabled, setEnabled, team, setTeam }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0" }}>
      <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
        <span>{label}</span>
      </label>
      <Select
        options={TEAM_OPTIONS}
        value={team ? { value: team, label: team } : null}
        onChange={(opt) => setTeam(opt ? opt.value : null)}
        placeholder="Team filter…"
        isDisabled={!enabled}
        styles={selectStyles}
        classNamePrefix="Select"
        menuPortalTarget={document.body}
      />
      {enabled && team && (
        <button className="reset-btn" onClick={() => setTeam(null)}>Clear</button>
      )}
    </div>
  );
}

/* A full team panel (oval + followers + optional interchange) */
function Team({
  title,
  team,
  setTeam,
  interchangeSide,
  captain,
  vice,
  setCaptain,
  setVice,
  sectionTeamFilter,        // when provided (string or null), locks selects to that team
  sectionFilterEnabled,     // boolean — only applies filter if true
}) {
  const effFilter = sectionFilterEnabled ? sectionTeamFilter : null;

  const setPos = (id, val) => {
    setTeam((t) => ({ ...t, [id]: val }));
    // if clearing or replacing a player who is C/VC, clear those flags
    if (!val || (captain && t[id] === captain)) setCaptain((c) => (t[id] === c ? null : c));
    if (!val || (vice && t[id] === vice)) setVice((v) => (t[id] === v ? null : v));
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
                sectionTeamFilter={effFilter}
                showCaptainButtons={true}
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
                  sectionTeamFilter={effFilter}
                  showCaptainButtons={true}
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
                sectionTeamFilter={effFilter}
                showCaptainButtons={true}
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
                sectionTeamFilter={effFilter}
                showCaptainButtons={true}
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
  /* ===== Team state ===== */
  const [aflTeam, setAflTeam] = useState({});
  const [vflTeam, setVflTeam] = useState({});
  const [cusp, setCusp] = useState(["", "", "", "", ""]);
  const [trade, setTrade] = useState(Array(15).fill(""));
  const [delist, setDelist] = useState(Array(15).fill(""));

  /* ===== C/VC state (global across both squads) ===== */
  const [captain, setCaptain] = useState(null);
  const [vice, setVice] = useState(null);

  /* ===== Master Team Filters (toggles + selected team per section) ===== */
  const [aflFilterEnabled, setAflFilterEnabled] = useState(false);
  const [aflFilterTeam, setAflFilterTeam] = useState(null);

  const [vflFilterEnabled, setVflFilterEnabled] = useState(false);
  const [vflFilterTeam, setVflFilterTeam] = useState(null);

  const [cuspFilterEnabled, setCuspFilterEnabled] = useState(false);
  const [cuspFilterTeam, setCuspFilterTeam] = useState(null);

  const [tradeFilterEnabled, setTradeFilterEnabled] = useState(false);
  const [tradeFilterTeam, setTradeFilterTeam] = useState(null);

  const [delistFilterEnabled, setDelistFilterEnabled] = useState(false);
  const [delistFilterTeam, setDelistFilterTeam] = useState(null);

  /* ===== Reset buttons ===== */
  const resetAFL = () => setAflTeam({});
  const resetVFL = () => setVflTeam({});
  const resetAll = () => {
    setAflTeam({});
    setVflTeam({});
    setCusp(["", "", "", "", ""]);
    setTrade(Array(15).fill(""));
    setDelist(Array(15).fill(""));
    setCaptain(null);
    setVice(null);
    setAflFilterEnabled(false); setAflFilterTeam(null);
    setVflFilterEnabled(false); setVflFilterTeam(null);
    setCuspFilterEnabled(false); setCuspFilterTeam(null);
    setTradeFilterEnabled(false); setTradeFilterTeam(null);
    setDelistFilterEnabled(false); setDelistFilterTeam(null);
  };

  /* ===== Share link system ===== */
  const encodeTeam = (teamObj) =>
    Object.entries(teamObj)
      .filter(([, v]) => v)
      .map(([k, v]) => `${encodeURIComponent(k)}:${encodeURIComponent(v)}`)
      .join(";");

  const encodeList = (arr) =>
    (arr || [])
      .filter(Boolean)
      .map((v, i) => `${i}:${encodeURIComponent(v)}`)
      .join(";");

  const handleShare = () => {
    const params = new URLSearchParams({
      afl: encodeTeam(aflTeam),
      vfl: encodeTeam(vflTeam),
      cusp: encodeList(cusp),
      trade: encodeList(trade),
      delist: encodeList(delist),
      c: captain || "",
      vc: vice || "",
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url);
    alert("Team link copied! Share it anywhere:\n" + url);
  };

  /* ===== Auto-load from URL ===== */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const parseTeam = (str) => {
      if (!str) return {};
      return str.split(";").reduce((acc, pair) => {
        const [pos, player] = pair.split(":");
        if (pos && player) acc[decodeURIComponent(pos)] = decodeURIComponent(player);
        return acc;
      }, {});
    };
    const parseIndexedList = (str, length) => {
      const out = Array(length).fill("");
      if (!str) return out;
      str.split(";").forEach((pair) => {
        const [idx, val] = pair.split(":");
        if (idx && val) {
          const i = Number(idx);
          if (!Number.isNaN(i) && i >= 0 && i < length) out[i] = decodeURIComponent(val);
        }
      });
      return out;
    };

    const aflStr = params.get("afl");
    const vflStr = params.get("vfl");
    const cuspStr = params.get("cusp");
    const tradeStr = params.get("trade");
    const delistStr = params.get("delist");
    const c = params.get("c");
    const vc = params.get("vc");

    if (aflStr) setAflTeam(parseTeam(aflStr));
    if (vflStr) setVflTeam(parseTeam(vflStr));
    setCusp(parseIndexedList(cuspStr, 5));
    setTrade(parseIndexedList(tradeStr, 15));
    setDelist(parseIndexedList(delistStr, 15));
    if (c) setCaptain(c);
    if (vc) setVice(vc);
  }, []);

  /* ===== Render ===== */
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

      {/* AFL section master filter controls */}
      <div style={{ width: "min(1400px,96vw)", margin: "0 auto 8px", paddingLeft: 290 }}>
        <div style={{ display: "flex", gap: 24, justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 6, fontWeight: 600 }}>AFL Team Filter</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input
                  type="checkbox"
                  checked={aflFilterEnabled}
                  onChange={(e) => setAflFilterEnabled(e.target.checked)}
                />
                <span>Enable</span>
              </label>
              <Select
                options={TEAM_OPTIONS}
                value={aflFilterTeam ? { value: aflFilterTeam, label: aflFilterTeam } : null}
                onChange={(opt) => setAflFilterTeam(opt ? opt.value : null)}
                placeholder="Choose team…"
                isDisabled={!aflFilterEnabled}
                styles={selectStyles}
                classNamePrefix="Select"
                menuPortalTarget={document.body}
              />
              {aflFilterEnabled && aflFilterTeam && (
                <button className="reset-btn" onClick={() => setAflFilterTeam(null)}>Clear</button>
              )}
            </div>
          </div>

          {/* Spacer in middle column (cusp area has its own controls below) */}
          <div style={{ flex: 1 }} />

          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 6, fontWeight: 600 }}>VFL Team Filter</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input
                  type="checkbox"
                  checked={vflFilterEnabled}
                  onChange={(e) => setVflFilterEnabled(e.target.checked)}
                />
                <span>Enable</span>
              </label>
              <Select
                options={TEAM_OPTIONS}
                value={vflFilterTeam ? { value: vflFilterTeam, label: vflFilterTeam } : null}
                onChange={(opt) => setVflFilterTeam(opt ? opt.value : null)}
                placeholder="Choose team…"
                isDisabled={!vflFilterEnabled}
                styles={selectStyles}
                classNamePrefix="Select"
                menuPortalTarget={document.body}
              />
              {vflFilterEnabled && vflFilterTeam && (
                <button className="reset-btn" onClick={() => setVflFilterTeam(null)}>Clear</button>
              )}
            </div>
          </div>
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
          sectionTeamFilter={aflFilterTeam}
          sectionFilterEnabled={aflFilterEnabled}
        />

        {/* CUSP COLUMN */}
        <div className="cusp">
          <h3>On the Cusp of AFL Selection</h3>

          {/* Master filter for CUSP */}
          <div style={{ margin: "8px 0 12px" }}>
            <div style={{ marginBottom: 6, fontWeight: 600 }}>Cusp Team Filter</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input
                  type="checkbox"
                  checked={cuspFilterEnabled}
                  onChange={(e) => setCuspFilterEnabled(e.target.checked)}
                />
                <span>Enable</span>
              </label>
              <Select
                options={TEAM_OPTIONS}
                value={cuspFilterTeam ? { value: cuspFilterTeam, label: cuspFilterTeam } : null}
                onChange={(opt) => setCuspFilterTeam(opt ? opt.value : null)}
                placeholder="Choose team…"
                isDisabled={!cuspFilterEnabled}
                styles={selectStyles}
                classNamePrefix="Select"
                menuPortalTarget={document.body}
              />
              {cuspFilterEnabled && cuspFilterTeam && (
                <button className="reset-btn" onClick={() => setCuspFilterTeam(null)}>Clear</button>
              )}
            </div>
          </div>

          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`cusp-${i}`} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
              <TwoStageSelect
                value={cusp[i] || ""}
                onChange={(val) => {
                  const next = [...cusp];
                  next[i] = val;
                  setCusp(next);
                }}
                sectionTeamFilter={cuspFilterEnabled ? cuspFilterTeam : null}
                showCaptainButtons={false} // no C/VC in cusp
              />
              <button
                className="reset-btn"
                onClick={() => {
                  const next = [...cusp];
                  next[i] = "";
                  setCusp(next);
                }}
              >
                ⟳
              </button>
            </div>
          ))}
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
          sectionTeamFilter={vflFilterTeam}
          sectionFilterEnabled={vflFilterEnabled}
        />
      </div>

      {/* TRADE / DELIST + their master filters */}
      <div className="extras">
        <div className="list-box">
          <h3>Trade List</h3>

          {/* Master filter for TRADE */}
          <div style={{ margin: "8px 0 12px" }}>
            <div style={{ marginBottom: 6, fontWeight: 600 }}>Trade Team Filter</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input
                  type="checkbox"
                  checked={tradeFilterEnabled}
                  onChange={(e) => setTradeFilterEnabled(e.target.checked)}
                />
                <span>Enable</span>
              </label>
              <Select
                options={TEAM_OPTIONS}
                value={tradeFilterTeam ? { value: tradeFilterTeam, label: tradeFilterTeam } : null}
                onChange={(opt) => setTradeFilterTeam(opt ? opt.value : null)}
                placeholder="Choose team…"
                isDisabled={!tradeFilterEnabled}
                styles={selectStyles}
                classNamePrefix="Select"
                menuPortalTarget={document.body}
              />
              {tradeFilterEnabled && tradeFilterTeam && (
                <button className="reset-btn" onClick={() => setTradeFilterTeam(null)}>Clear</button>
              )}
            </div>
          </div>

          <div className="grid-list">
            {Array.from({ length: 15 }).map((_, i) => (
              <TwoStageSelect
                key={`t-${i}`}
                value={trade[i] || ""}
                onChange={(val) => {
                  const next = [...trade];
                  next[i] = val;
                  setTrade(next);
                }}
                sectionTeamFilter={tradeFilterEnabled ? tradeFilterTeam : null}
                showCaptainButtons={false}
              />
            ))}
          </div>
        </div>

        <div className="list-box">
          <h3>Delist List</h3>

          {/* Master filter for DELIST */}
          <div style={{ margin: "8px 0 12px" }}>
            <div style={{ marginBottom: 6, fontWeight: 600 }}>Delist Team Filter</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input
                  type="checkbox"
                  checked={delistFilterEnabled}
                  onChange={(e) => setDelistFilterEnabled(e.target.checked)}
                />
                <span>Enable</span>
              </label>
              <Select
                options={TEAM_OPTIONS}
                value={delistFilterTeam ? { value: delistFilterTeam, label: delistFilterTeam } : null}
                onChange={(opt) => setDelistFilterTeam(opt ? opt.value : null)}
                placeholder="Choose team…"
                isDisabled={!delistFilterEnabled}
                styles={selectStyles}
                classNamePrefix="Select"
                menuPortalTarget={document.body}
              />
              {delistFilterEnabled && delistFilterTeam && (
                <button className="reset-btn" onClick={() => setDelistFilterTeam(null)}>Clear</button>
              )}
            </div>
          </div>

          <div className="grid-list">
            {Array.from({ length: 15 }).map((_, i) => (
              <TwoStageSelect
                key={`d-${i}`}
                value={delist[i] || ""}
                onChange={(val) => {
                  const next = [...delist];
                  next[i] = val;
                  setDelist(next);
                }}
                sectionTeamFilter={delistFilterEnabled ? delistFilterTeam : null}
                showCaptainButtons={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
