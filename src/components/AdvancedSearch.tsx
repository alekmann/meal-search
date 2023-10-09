import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useRecipeQueryStore from "../store";
import CheckBoxList from "./CheckBoxList";

interface AdvancedSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdvancedSearch = ({ isOpen, onClose }: AdvancedSearchProps) => {
  const [placement, setPlacement] = useState<"bottom" | "right">("right");
  const [drawerSize, setDrawerSize] = useState("md");

  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const setIntolerances = useRecipeQueryStore((state) => state.setIntolerances);

  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
    setIntolerances(values);
  };

  const removeAll = () => {
    setCheckedValues([]);
    setIntolerances([]);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPlacement("bottom");
        setDrawerSize("full");
      } else {
        setPlacement("right");
        setDrawerSize("md");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Drawer
      placement={placement}
      onClose={onClose}
      isOpen={isOpen}
      size={drawerSize}
    >
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Allergies</DrawerHeader>
        <DrawerBody>
          <CheckBoxList
            checkedValues={checkedValues}
            onChange={handleCheckboxChange}
          />
        </DrawerBody>
        <DrawerFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Show
          </Button>
          <Button variant="outline" onClick={removeAll}>
            Remove all
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AdvancedSearch;
