import { expect } from "chai";
import { deg1, deg2, div, gip, mul, pow, sub, sum } from ".";

describe("Lab 1", () => {
  describe("Sum", () => {
    context("2 + 3", () => {
      it("should return 5", () => {
        expect(sum(2, 3)).to.equal(5);
      });
    });
  });

  describe("Sub", () => {
    context("6 - 2", () => {
      it("should return 4", () => {
        expect(sub(6, 2)).to.equal(4);
      });
    });
  });

  describe("Mul", () => {
    context("9 * 3", () => {
      it("should return 27", () => {
        expect(mul(9, 3)).to.equal(27);
      });
    });
  });

  describe("Div", () => {
    context("15 / 5", () => {
      it("should return 3", () => {
        expect(div(15, 5)).to.equal(3);
      });
    });

    context("15 / 0", () => {
      it("should return infinity", () => {
        expect(div(15, 0)).to.equal(Infinity);
      });
    });
  });

  describe("Pow", () => {
    context("3 ^ 4", () => {
      it("should return 81", () => {
        expect(pow(3, 4)).to.equal(81);
      });
    });
  });

  describe("Гипотенуза", () => {
    context("Катеты 3 и 4", () => {
      it("should return 5", () => {
        expect(gip(3, 4)).to.equal(5);
      });
    });
  });

  describe("Угол при первом катете", () => {
    context("Катеты 3 и 4", () => {
      it("should return 53", () => {
        expect(deg1(3, 4)).to.be.closeTo(53, 0.5);
      });
    });
  });

  describe("Угол при втором катете", () => {
    context("Катеты 3 и 4", () => {
      it("should return 36.8", () => {
        expect(deg2(3, 4)).to.be.closeTo(36.8, 0.5);
      });
    });
  });
});
