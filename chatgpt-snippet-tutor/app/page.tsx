"use client";
import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import Image from "next/image";
import OpenAI from "openai";
import { FormEvent, useState } from "react";

//Can i server side anything? No
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

// const [inputValue, setInputValue] = useState("");

// async function testing(e: FormEvent) {
//   e.preventDefault();
//   const res = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "What is the capital of Germany?" }],
//     model: "gpt-3.5-turbo",
//   });
//   console.log(res.choices[0]);
// }

export default function Home() {
  const [inputValue, setInputValue] = useState(""); // State to manage input value

  async function testing(e: FormEvent) {
    e.preventDefault();

    // Use inputValue as a parameter in your testing function
    const res = await openai.chat.completions.create({
      messages: [{ role: "system", content: inputValue }],
      model: "gpt-3.5-turbo",
    });

    console.log(res.choices[0]);
  }
  return (
    <Flex justifyContent={"center"}>
      <form onSubmit={(e) => testing(e)}>
        <Flex
          justifyContent={"center"}
          h={"100vh"}
          flexDir={"column"}
          width={"50vw"}
          gap={50}
        >
          <FormControl>
            <Input
              placeholder="Ask a question"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} //e is the event
            />
          </FormControl>
          <Button
            type="submit"
            display={"flex"}
            alignSelf={"center"}
            p={50}
            color={"blue"}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
