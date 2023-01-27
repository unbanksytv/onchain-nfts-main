const main = async () => {
    try {
        const nftContractFactory = await hre.ethers.getContractFactory("chainBattles");
        const nftContract = await nftContractFactory.deploy();
        await nftContract.deployed();

        console.log("Contract deployed to:", nftContract.address);
        process.exit(0);

    } catch (error) {
        console.log("There was an error in deployment:", error);
        process.exit(1);
    }
}

main();