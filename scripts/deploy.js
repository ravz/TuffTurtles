async function main() {
  const TuffTurtles = await ethers.getContractFactory("TuffTurtles");

  // Start deployment, returning a promise that resolves to a contract object
  const tuffTurtles = await TuffTurtles.deploy();
  await tuffTurtles.deployed();
  console.log("Contract deployed to address:", tuffTurtles.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
