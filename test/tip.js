import {
  AlisToken,
  Tip
} from './helpers/alis_helper';


contract('Tip', (accounts) => {
  let token;
  let tip;
  beforeEach(async () => {
    token = await AlisToken.new();
    tip = await Tip.new(token.address);
  });

  describe('functions', () => {
    it('should success to tip and burn token', async () => {
      // Mint 100 ALIS to accounts[0].
      await token.mint(accounts[0], 100);

      // Approve Tip contract to spend 10 ALIS.
      await token.approve(tip.address, 10);

      // Tip 10 ALIS to accounts[1].
      await tip.tip(accounts[1], 10);

      // accounts[0]'s balance decrease by 10 ALIS.
      const balance0 = await token.balanceOf(accounts[0]);
      assert.equal(balance0.toNumber(), 90, "accounts[0]'s balance didn't decrease correctly.");

      // accounts[1]'s balance increase by 5 ALIS.
      const balance1 = await token.balanceOf(accounts[1]);
      assert.equal(balance1.toNumber(), 5, "accounts[1]'s balance didn't increase correctly.");

      // Total supply decrease 5 ALIS by minting.
      const totalSupply = await token.totalSupply();
      assert.equal(totalSupply.toNumber(), 95, "Total supply didn't decrease correctly.");
    });

    it("transaction should rollback if sender's balance is short.", async () => {
      // Mint 100 ALIS to accounts[0].
      await token.mint(accounts[0], 100);

      // Approve Tip contract to spend 10 ALIS.
      await token.approve(tip.address, 10);

      // Send 91 ALIS to accounts[2].
      await token.transfer(accounts[2], 91);

      // Tip 10 ALIS to account[1].
      await tip.tip(accounts[1], 10).catch(() => {})

      // Tip transaction rollbacked.
      const balance0 = await token.balanceOf(accounts[0]);
      assert.equal(balance0.toNumber(), 9);

      const balance1 = await token.balanceOf(accounts[1]);
      assert.equal(balance1.toNumber(), 0);

      const totalSupply = await token.totalSupply();
      assert.equal(totalSupply.toNumber(), 100)
    });
  });
});
