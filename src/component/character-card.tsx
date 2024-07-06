import { Card, CardBody, Image, Text, VStack } from "@chakra-ui/react";

import { ICharacterProps } from "../interfaces/component";

const CharacterCard = (props: ICharacterProps) => {
  return (
    <Card maxW="320px" borderRadius={20}>
      <CardBody padding="10px">
        <Image
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          borderRadius={16}
          mb="10px"
        />
        <VStack spacing="10px" align="flex-start">
          <Text noOfLines={1} fontSize="sm">
            Nombre:{" "}
            <Text as="span" fontWeight="semibold">
              {props.character.name}
            </Text>
          </Text>
          <Text noOfLines={1} fontSize="sm">
            Estado:{" "}
            <Text as="span" fontWeight="semibold">
              {props.character.status}
            </Text>
          </Text>
          <Text noOfLines={1} fontSize="sm">
            Localización:{" "}
            <Text as="span" fontWeight="semibold">
              {props.character.location.name}
            </Text>
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
