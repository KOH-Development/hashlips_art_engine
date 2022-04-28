const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

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
      { name: "Faction/Fremen" },
      { name: "Background/Fremen" },
      { name: "Chest/Fremen" },
      { name: "Left Leg/Fremen" },
      { name: "Right Leg/Fremen" },
      { name: "Left Arm/Fremen" },
      { name: "Right Arm/Fremen" },
      { name: "Pilot/Fremen" },
      { name: "Regiment Trait/Fremen" },
    ],

    growEditionSizeTo: 598,
    layersOrder: [
      { name: "Faction/Renegade" },
      { name: "Background/Renegade" },
      { name: "Chest/Renegade" },
      { name: "Left Leg/Renegade" },
      { name: "Right Leg/Renegade" },
      { name: "Left Arm/Renegade" },
      { name: "Right Arm/Renegade" },
      { name: "Pilot/Renegade" },
      { name: "Regiment Trait/Renegade" },
    ],
    growEditionSizeTo: 747,
    layersOrder: [
      { name: "Faction/Broken" },
      { name: "Background/Broken" },
      { name: "Chest/Broken" },
      { name: "Left Leg/Broken" },
      { name: "Right Leg/Broken" },
      { name: "Left Arm/Broken" },
      { name: "Right Arm/Broken" },
      { name: "Pilot/Broken" },
      { name: "Regiment Trait/Broken" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

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
