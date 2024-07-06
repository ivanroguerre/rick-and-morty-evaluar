import { Card, CardBody, Image, Text, VStack } from "@chakra-ui/react";

import { ICharacterProps } from "../interfaces/component";

const CharacterCard = (props: ICharacterProps) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          borderRadius="lg"
        />
        <VStack mt="6" spacing="3">
          <Text>Nombre: {props.character.name}</Text>
          <Text>Estado: {props.character.status}</Text>
          <Text>Localización: {props.character.location.name}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
