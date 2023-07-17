import React from "react";
import DateTimeDisplay from "./datetimedisplay";
import { useCountdown } from "hooks/useCountdown";
import { Flex } from "@chakra-ui/react";

interface props {
  targetDate: number;
}

export default function Countdown({ targetDate }: props) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <Flex justifyContent="space-between">
      <DateTimeDisplay value={days} type={"d"} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"h"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"m"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"s"} isDanger={false} />
    </Flex>
  );
}
