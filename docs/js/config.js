// ======================================================================
// SETTINGS — everything specific to this map lives in this one file.
// ======================================================================
window.MAP_SETTINGS = {
  // ---- Keys & data source -------------------------------------------
  googleKey: "AIzaSyBREuwDbar39zuzrO73GJdI1L6aeYH8dLo",     // same key as the tribal map works
  mapboxToken: "pk.eyJ1IjoiZGlnaXRhbC1zdHJhdGFjb21tIiwiYSI6ImNtdXI1eHB5OTBmYjMyeHEzNGhibHBtbDAifQ.cQg7aqXe714rD1PTJaLWGg",     // same pk. token works
  spreadsheetId: "1fKktavutjxR6bbo11SkasFOJ7qAjiNBbQ8elxLQ0h3s",     // long ID between /d/ and /edit
  sheetTab: "Data",                           // exact name of the tab

  // ---- Column names (must match the sheet's header row exactly) -----
  latitudeColumn: "Latitude",
  longitudeColumn: "Longitude",
  stateColumn: "State",          // used for the Alaska button count
  linkColumn: null,              // e.g. "Link" to make titles clickable; null = no links

  // ---- Table: which columns show, in order --------------------------
  tableColumns: ["Applicant", "City", "State"],
  // Column whose text becomes a link (only if linkColumn is set)
  linkedColumn: "Applicant",

  // ---- Sidebar filters ----------------------------------------------
  // type: "dropdown" (pick one) or "checkboxes" (pick several)
  filters: [
    { column: "State", label: "State", type: "dropdown" },
  ],

  // ---- Map popups ---------------------------------------------------
  popupTitle: "Applicant",           // big text
  popupSubtitle: ["City", "State"],  // smaller text, joined with ", "
};
