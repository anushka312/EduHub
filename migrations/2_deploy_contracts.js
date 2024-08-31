const Certification = artifacts.require("certification");
const DecentralizedCDN = artifacts.require("DecentralizedCDN"); // Ensure the name matches the contract
const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = async function(deployer) {
  // Deploy the Certification contract
  await deployer.deploy(Certification);
  const certificationInstance = await Certification.deployed();
  console.log("Certification deployed at:", certificationInstance.address);

  // Deploy the DecentralizedCDN contract
  await deployer.deploy(DecentralizedCDN);
  const decentralizedCDNInstance = await DecentralizedCDN.deployed();
  console.log("DecentralizedCDN deployed at:", decentralizedCDNInstance.address);

  // Deploy the NFTMarketplace contract
  await deployer.deploy(NFTMarketplace);
  const nftMarketplaceInstance = await NFTMarketplace.deployed();
  console.log("NFTMarketplace deployed at:", nftMarketplaceInstance.address);
};
