import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as uuidValidate } from "uuid";

describe("Uuid unit Tests", () => {
  const validadteSpy = jest.spyOn(Uuid.prototype, "validate" as any);

  it("should throw error when uuid is invalid", () => {
    expect(() => {
      new Uuid("Invalid-uuid");
    }).toThrow(new InvalidUuidError());

    expect(validadteSpy).toHaveBeenCalledTimes(1);
  });

  it("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
  });

  it("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
  });

  it("should accept a valid uuid", () => {
    const uuidToAccept = "b383a515-ab4a-427c-84c0-c88ea50740d2";
    const uuid = new Uuid(uuidToAccept);
    expect(uuid.id).toBe(uuidToAccept);
  });
});
