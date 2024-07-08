import { Card, CardBody, Image, Text, VStack } from "@chakra-ui/react";

import { ICharacterProps } from "../interfaces/component";

import { translateStatus } from "../utils/misc";

const CharacterCard = (props: ICharacterProps) => {
  const translatedStatus = translateStatus(props.character.status);
  const translatedStatusWithEmoji =
    translatedStatus === "vivo"
      ? "Vivo 🟢"
      : translatedStatus === "muerto"
      ? "Muerto 🔴"
      : "Desconocido ❓";
  return (
    // Proporcionando una altura mínima se evita el layout shift cuando la imagen no ha cargado
    <Card maxW="320px" borderRadius={20} minH="397px">
      <CardBody padding="10px">
        <Image
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          borderRadius={16}
          // Muestra el fallback mientras carga la imagen
          fallbackSrc="/fallback.webp"
          mb="10px"
          w="300px"
          h="300px"
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
              {translatedStatusWithEmoji}
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
