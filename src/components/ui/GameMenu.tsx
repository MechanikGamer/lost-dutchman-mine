import React from "react";
import Termometer from "./Termometer";
import GameBoard from "./GameBoard";
import Clock from "./Clock";
import BottomMenuButtons from "./BottomMenuButtons";
import { InGameMenuProps } from "../../types/menu";

function GameMenu({ gameState, setOpened, windowDimensions }: InGameMenuProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "90vw",
        height: "43.7037037037037vh",
        display: "flex",
        marginLeft: "5vw",
        marginRight: "5vw",
        // TODO: remove background once have image
        background: "#c08d49",
        // TODO: add background image
        // backgroundImage={}
      }}
    >
      <Termometer />
      <div
        style={{
          marginLeft: "5vw",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "69vw",
            justifyContent: "space-around",
          }}
        >
          <GameBoard windowDimensions={windowDimensions} />
          <Clock windowDimensions={windowDimensions} />
        </div>
        <div
          style={{
            bottom: "5%",
            position: "absolute",
          }}
        >
          <BottomMenuButtons setOpened={setOpened} />
        </div>
      </div>
    </div>
  );
}

export default GameMenu;
