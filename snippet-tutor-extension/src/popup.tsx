import { useState, type FormEvent } from "react"
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  Heading,
  Img,
  Input,
} from "@chakra-ui/react";
import { getTextAnswer } from './lib/openAiService';

function IndexPopup() {
  const [inputValue, setInputValue] = useState(""); // State to manage input value
  const [answer, setAnswer] = useState<string>(""); //State to manage answer value

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const answerRes = await getTextAnswer(inputValue);

    if (answerRes !== null) {
      setAnswer(answerRes);
    } else {
      setAnswer("No answer available");
    }
  }

  async function handleAPISubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const res = await fetch('http://localhost:5000/api/question/text');

    console.log(await res.text());
  }

  return (
    <ChakraProvider>
      <Flex flexDir={"column"} minWidth={'400px'}>
        <Flex>
          <Img
            src="data:image/jpeg;base64,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"
            boxSize={"100px"}
          />
          <Heading p={4}>Snippet Tutor</Heading>
        </Flex>
        <Flex width={"100vw"} justifyContent={"center"}>
          <Flex
            justifyContent={"center"}
            flexDir={"column"}
            p={4}
            width={"50vw"}
            h={"100vh"}
            gap={50}
          >
            <form onSubmit={(e) => handleSubmit(e)}>
              <Flex
                flexDir={"column"}
                gap={10}
                //justify={"center"} I thought align was vertical and justify horizontal??
                align={"center"}
              >
                <FormControl>
                  <Input
                    placeholder="Ask a question"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" p={4} color={"blue"} width={100}>
                  Submit
                </Button>
              </Flex>
            </form>

            <Button onClick={(e) => handleAPISubmit(e)} type="submit" p={4} color={"blue"} width={100}>
              Test Local API
            </Button>

            {/* Answer section */}
            <Flex flexDir={"column"} gap={2}>
              <Heading size="md">Answer:</Heading>
              <Flex>{answer}</Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider >
  )
}

export default IndexPopup
