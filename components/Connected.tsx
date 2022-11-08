import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome Elon DAO.
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Everybody will be Anybodies
          </Text>
        </VStack>
      </Container>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>Edit Profile</Text>
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected