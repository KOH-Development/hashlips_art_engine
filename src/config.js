const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.near;

// General metadata for Ethereum
const namePrefix = "Pixelmech Warriors";
const description = "Pixelmech Warriors is a collection of 750 pieces on the NEAR Blockchain.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "PMW0",
  seller_fee_basis_points: 600, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://pixelmechwarriors.nearfrontier.online/",
  creators: [
    {
      address: "pixelmechwarriors.near",
      share: 600,
    },
    {
      address: "offseason.near",
      share: 200,
    },
    {
      address: "shakiev.near",
      share: 600,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 299,
    layersOrder: [
      { name: "Faction/Fremen", options: { displayName: "Faction", }, },
      { name: "Background/Fremen", options: { displayName: "Background", }, },
      { name: "Chest/Fremen", options: { displayName: "Chest", }, },
      { name: "Left Leg/Fremen", options: { displayName: "Left Leg", }, },
      { name: "Right Leg/Fremen", options: { displayName: "Right Leg", }, },
      { name: "Left Arm/Fremen", options: { displayName: "Left Arm", }, },
      { name: "Right Arm/Fremen", options: { displayName: "Right Arm", }, },
      { name: "Pilot/Fremen", options: { displayName: "Pilot", }, },
      { name: "Regiment Trait/Fremen", options: { displayName: "Regiment Trait", }, },

      // { name: "Fur" },
      // { name: "Hair", 
      //   options: {
      //     subGroup: true, // existance of sub folder corresponding to each kind of fur
      //     linkLayer: 7, // layer 7 of Fur
      //   },
      // },
      // { name: "Hats",  
      //   options: {
      //     noneToReveal: ['Hat_type1.png', 'Hat_type2.png'], // list of hats
      //                                    // revealed only when Hair is None
      //     linkLayer: 8, // layer 8 of Hair
      //   },
      // },  
    ],
  },
  {
    growEditionSizeTo: 597,
    layersOrder: [
      { name: "Faction/Renegade", options: { displayName: "Faction", }, },
      { name: "Background/Renegade", options: { displayName: "Background", }, },
      { name: "Chest/Renegade", options: { displayName: "Chest", }, },
      { name: "Left Leg/Renegade", options: { displayName: "Left Leg", }, },
      { name: "Right Leg/Renegade", options: { displayName: "Right Leg", }, },
      { name: "Left Arm/Renegade", options: { displayName: "Left Arm", }, },
      { name: "Right Arm/Renegade", options: { displayName: "Right Arm", }, },
      { name: "Pilot/Renegade", options: { displayName: "Pilot", }, },
      { name: "Regiment Trait/Renegade", options: { displayName: "Regiment Trait", }, },
    ],
  },{
    growEditionSizeTo: 746,
    layersOrder: [
      { name: "Faction/Broken", options: { displayName: "Faction", }, },
      { name: "Background/Broken", options: { displayName: "Background", }, },
      { name: "Chest/Broken", options: { displayName: "Chest", }, },
      { name: "Left Leg/Broken", options: { displayName: "Left Leg", }, },
      { name: "Right Leg/Broken", options: { displayName: "Right Leg", }, },
      { name: "Left Arm/Broken", options: { displayName: "Left Arm", }, },
      { name: "Right Arm/Broken", options: { displayName: "Right Arm", }, },
      { name: "Pilot/Broken", options: { displayName: "Pilot", }, },
      { name: "Regiment Trait/Broken", options: { displayName: "Regiment Trait", }, },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = true;

const format = {
  width: 1000,
  height: 780,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
