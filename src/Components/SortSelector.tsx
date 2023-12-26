import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
// import usePlatform from "../hooks/usePlatforms";
// import { PlatForm } from "../hooks/useGames";

// interface Props {
//   onSelectPlatform: (platform: PlatForm) => void;
//   selectedPlatform: PlatForm | null;
// }

const SortSelector = () => {
  // const { data, error } = usePlatform();
  // if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
