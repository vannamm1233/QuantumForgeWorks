const aliceBalanceAfter = await aptos.getAccountCoinsData({
  accountAddress: aliceAddress,
  minimumLedgerVersion: BigInt(response.version),
});
const bobBalanceAfter = await aptos.getAccountCoinsData({
  accountAddress: bobAddress,
});
const sponsorBalanceAfter = await aptos.getAccountCoinsData({
  accountAddress: sponsorAddress,
});
