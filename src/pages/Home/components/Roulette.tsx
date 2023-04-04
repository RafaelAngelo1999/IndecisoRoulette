import { Box, Button } from "@mui/material";
import { FC, useState } from "react";

import { Wheel } from "react-custom-roulette";
import { Item } from "../models/ItemModel";
import Result from "./Result";

interface IRoulette {
  listItem: Item[];
}

const Roulette: FC<IRoulette> = ({ listItem }) => {
  const [openResult, setOpenResult] = useState(false);
  const [isFirst, setIsFrist] = useState<boolean>(true);
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = listItem.length
    ? listItem.map((item) => ({
        option: item.value,
      }))
    : [{ option: "Sem Valor" }];

  const handleClickOpen = () => {
    setOpenResult(true);
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setIsFrist(false);
    }
  };

  const backgroundColors = ["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"];
  const textColors = ["#0b3351", "#0b3351", "#fff", "#0b3351"];
  const outerBorderColor = "#eeeeee";
  const outerBorderWidth = 10;
  const innerBorderColor = "#30261a";
  const innerBorderWidth = 0;
  const innerRadius = 0;
  const radiusLineColor = "#eeeeee";
  const radiusLineWidth = 8;
  const fontFamily = "Nunito";
  const fontSize = 20;
  const textDistance = 60;
  const spinDuration = 1.0;

  return (
    <>
      <Wheel
        mustStartSpinning={!!mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={backgroundColors}
        textColors={textColors}
        fontFamily={fontFamily}
        fontSize={fontSize}
        outerBorderColor={outerBorderColor}
        outerBorderWidth={outerBorderWidth}
        innerRadius={innerRadius}
        innerBorderColor={innerBorderColor}
        innerBorderWidth={innerBorderWidth}
        radiusLineColor={radiusLineColor}
        radiusLineWidth={radiusLineWidth}
        spinDuration={spinDuration}
        startingOptionIndex={2}
        textDistance={textDistance}
        onStopSpinning={() => {
          setMustSpin(false);
          handleClickOpen();
        }}
      />
      <Button variant="contained" color="info" onClick={handleSpinClick}>
        Acanar com a indecisão 🤌
      </Button>
      {!isFirst && !mustSpin && (
        <Result
          open={openResult}
          value={data[prizeNumber].option}
          handleClose={setOpenResult}
        />
      )}
      {!isFirst && !mustSpin && <span>{data[prizeNumber].option}</span>}
    </>
  );
};

export default Roulette;
