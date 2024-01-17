"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";

// //Can i server side anything? No
// const OpenAI = require("openai");
// require("dotenv").config();

// const openai = new OpenAI({
//   apiKey: "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",
// });

// async function testing() {
//   const res = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "What is the capital of Germany?" }],
//     model: "gpt-3.5-turbo",
//   });
//   console.log(res.choices[0]);
// }

// testing();

export default function Home() {
  return (
    <Flex justifyContent={"center"} h={"100vh"}>
      <Button display={"flex"} alignSelf={"center"} p={50} color={"blue"}>
        Submit
      </Button>
    </Flex>
  );
}
