// Definition of the Driveable interface
interface Driveable {
  // Properties
  started: boolean; // Indicates if the vehicle is started
  currentSpeed: number; // Current speed of the vehicle

  // Methods
  /**
   * Starts the vehicle.
   */
  start(): void;

  /**
   * Accelerates the vehicle by a given change in speed.
   * @param change - The amount to increase the speed by.
   */
  accelerate(change: number): void;

  /**
   * Decelerates the vehicle by a given change in speed.
   * @param change - The amount to decrease the speed by.
   */
  decelerate(change: number): void;

  /**
   * Stops the vehicle completely.
   */
  stop(): void;

  /**
   * Turns the vehicle in a specified direction.
   * @param direction - The direction to turn (e.g., "left" or "right").
   */
  turn(direction: string): void;

  /**
   * Reverses the vehicle.
   */
  reverse(): void;
}

// Export the Driveable interface
export default Driveable;