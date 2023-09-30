import { HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  information: string;
}

const IconDetails = ({ icon: IconComponent, information }: Props) => {
  return (
    <HStack>
      <IconComponent color="#166534" size={35} />
      <div>{information}</div>
    </HStack>
  );
};

export default IconDetails;
