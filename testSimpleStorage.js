const { expect } = require("chai");

describe("SimpleStorage", function () {
  let contract;

  beforeEach(async () => {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    contract = await SimpleStorage.deploy(10);
    await contract.deployed();
  });

  it("Should return the initial value", async function () {
    expect(await contract.getValue()).to.equal(10);
  });

  it("Should increment the value", async function () {
    await contract.increment();
    expect(await contract.getValue()).to.equal(11);
  });

  it("Should decrement the value", async function () {
    await contract.decrement();
    expect(await contract.getValue()).to.equal(9);
  });
});
