import MintBackpack from "components/Mint/Backpack/Backpack";
import MintBanner from "components/Mint/Banner/Banner";
import MintLore from "components/Mint/Lore/Lore";
import MintRarity from "components/Mint/Rarity/Rarity";
import { FunctionComponent, useEffect } from "react";

interface MintPageProps {}

const MintPage: FunctionComponent<MintPageProps> = () => {
  useEffect(() => {
    document.title = "Rumble Worlds - Mint";
  }, []);

  return (
    <div className="MintPage">
      <MintBanner />
      <MintBackpack />
      <MintLore />
      <MintRarity />
    </div>
  );
};

export default MintPage;
