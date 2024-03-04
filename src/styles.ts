import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  appContainer: {
    height: "100&",
    display: "grid",
    gridTemplateColumns: "repeat(14,1fr)",
    gridTemplateRows: "repeat(7,1fr)",
  },
  cardContainer: {
    gridColumn: "6/10",
    gridRow: "2/6",
    padding:'15%',
    boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    borderRadius: "15px",
  },
});
