/**
 * @module satoshi-bitcoin
 */

declare namespace sb {
  /**
   * Convert Satoshi to Bitcoin
   * @param satoshi Amount of Satoshi to convert. Must be a whole number
   * @throws {TypeError} Thrown if input is not a number or string
   * @throws {TypeError} Thrown if input is not a whole number or string format whole number
   */
  function toBitcoin(satoshi: number | string): number;

  /**
   * Convert Bitcoin to Satoshi
   * @param bitcoin Amount of Bitcoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   */
  function toSatoshi(bitcoin: number | string): number;
}

export = sb;
