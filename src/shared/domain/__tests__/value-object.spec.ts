import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly prop1: string, readonly prop2: number) {
    super();
  }
}

describe("ValueObject tests", () => {
  describe("StringValueObject Tests", () => {
    it("should be equals StringValueObject", () => {
      const valueObject1 = new StringValueObject("test");
      const valueObject2 = new StringValueObject("test");

      expect(valueObject1.equals(valueObject2)).toBeTruthy();
    });

    it("should not be equals StringValueObject", () => {
      const valueObject1 = new StringValueObject("test");
      const valueObject2 = new StringValueObject("test2");

      expect(valueObject1.equals(valueObject2)).toBeFalsy();
    });
  });

  describe("StringValueObject Tests", () => {
    it("should be equals ComplexValueObject", () => {
      const valueObject1 = new ComplexValueObject("test", 1);
      const valueObject2 = new ComplexValueObject("test", 1);

      expect(valueObject1.equals(valueObject2)).toBeTruthy();
    });

    it("should not be equals StringValueObject", () => {
      const valueObject1 = new ComplexValueObject("test", 1);
      const valueObject2 = new ComplexValueObject("test2", 2);

      expect(valueObject1.equals(valueObject2)).toBeFalsy();
    });
  });
});
