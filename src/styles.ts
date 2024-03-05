import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  appContainer: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(14,1fr)",
    gridTemplateRows: "repeat(7,1fr)",
  },
  cardContainer: {
    gridColumn: "6/10",
    gridRow: "2/6",
    padding: "15%",
    boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    borderRadius: "15px",
    selectors: {
      "@media only screen and (width: 800px)": {
        gridColumn: "6/10",
        gridRow: "2/6",
      },
      "@media only screen and (max-width: 600px)": {
        gridColumn: "2/14",
        gridRow: "2/6",
      },
    },
  },
  cardText:{
    fontSize:'2vh'
  },
  graphContainer: {
    selectors: {
      "@media only screen and (min-width: 601px)": {
        gridColumn: "4/11",
        gridRow: "2/-1",
        svg:{
          transform:'scale(1)'
        }
      },
      "@media only screen and (max-width: 600px)": {
        gridColumn: "6/-1",
        gridRow: "1/-1",
        svg:{
          transform:'scale(2)'
        }
      },
    },
  },
  Web: {
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    fontStretch: "normal",
    fontSize: "18.6336px",
    fontFamily: "Arial",
    opacity: 1,
    fill: "#000000",
    fillOpacity: "1",
    stroke: "#000000",
    strokeWidth: "0.245669",
    strokeLinecap: "square",
    strokeLineJoin: "miter",
    strokeDasharray: "none",
    strokeDashoffset: "0",
    strokeOpacity: "1",
  },
  WebMain: {
    display: "inline",
    opacity: "1",
    fill: "none",
    stroke: "#000000",
    strokeWidth: "2.13543",
    strokeLinecap: "square",
    strokeOpacity: "0.521739",
  },
  LabelPath: {
    fontSize: "8.81891px",
    fontFamily: "Arial",
    opacity: "0.766917",
    fill: "#808080",
    fillOpacity: "1",
    stroke: "#828282",
    strokeWidth: "0",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    strokeDasharray: "none",
    strokeDashoffset: "0",
    strokeOpacity: "1",
  },
  categoryCirclePath: {
    display: "inline",
    fill: "none",
    fillOpacity: "0",
    stroke: "#15a053",
    strokeWidth: "2.13543",
    strokeLinecap: "square",
    strokeOpacity: "1",
  },
  textPath1: {
    fontSize: "12px",
    fontFamily: "Source Sans Pro",
    whiteSpace: "pre",
    display: "inline",
    opacity: "0.766917",
    fill: "#008000",
    fillOpacity: "1",
    stroke: "#116b38",
    strokeWidth: "0.245669",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    strokeDasharray: "none",
    strokeDashoffset: "0",
    strokeOpacity: "1",
  },
  WebFont: {
    fontSize: "18.6336px",
    fontFamily: "Arial",
    strokeWidth: "0.245669",
    strokeDasharray: "none",
  },
  LabelText: {
    strokeWidth: "0",
    strokeDasharray: "none",
  },
  categoryHeader: {
    strokeWidth: "0.245669",
    strokeDasharray: "none",
  },
  questionGroup2: {
    opacity: "0",
    fill: "#000000",
    fillOpacity: "0",
    stroke: "#000000",
    strokeWidth: "2.13543",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    strokeDasharray: "none",
    strokeDashoffset: "0",
    strokeOpacity: "1",
  },
  questionGroup3: {
    display: "inline",
    opacity: "0",
    fill: "#000000",
    fillOpacity: "0",
    stroke: "#000000",
    strokeWidth: "2.13543",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    strokeDasharray: "none",
    strokeDashoffset: "0",
    strokeOpacity: "1",
  },
  groupContainer: {
    display: "inline",
  },
});
