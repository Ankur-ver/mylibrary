# PhysicsLibrary

**PhysicsLibrary** is a JavaScript library designed for physics simulations. It provides essential tools for vector math and particle dynamics, making it easier to develop physics-based applications.

## Installation

To install the library, use npm:

```bash
npm install physicslibrary

Include the Library :
using a module bundler like Webpack, import the library:
```bash
import { Particle, Vector } from 'physicslibrary';

For commonJS(Node.js Environment) :
```bash
const { Vector, Particle } = require('physicslibrary');

const v = new Vector(a,b);
const p = new Particle(v, new Vector(a, b), m);

For UMD (Browser environment) :
```bash
  <script src="node_modules/physicslibrary/dist/bundle.js"></script>
<script src="your script"></script>
Update and Render :
```bash
function update() {
  particle.update(time); // Update particle with a time step
}

function render() {
  // your code 
}

function animate() {
  update();
  render();
  requestAnimationFrame(animate);
}

animate();
# API Documentation

## `Vector`

The `Vector` class represents a two-dimensional vector and provides various methods for vector operations.

### Constructor

- `new Vector(x, y)`
  - **Parameters**:
    - `x` (Number): The x-coordinate of the vector.
    - `y` (Number): The y-coordinate of the vector.

### Methods

- `add(vector)`
  - **Parameters**:
    - `vector` (Vector): The vector to add to this vector.
  - **Returns**: A new `Vector` instance representing the result of the addition.

- `subtract(vector)`
  - **Parameters**:
    - `vector` (Vector): The vector to subtract from this vector.
  - **Returns**: A new `Vector` instance representing the result of the subtraction.

- `multiply(scalar)`
  - **Parameters**:
    - `scalar` (Number): The scalar value to multiply this vector by.
  - **Returns**: A new `Vector` instance representing the result of the multiplication.

- `divide(scalar)`
  - **Parameters**:
    - `scalar` (Number): The scalar value to divide this vector by.
  - **Returns**: A new `Vector` instance representing the result of the division.

- `magnitude()`
  - **Returns**: The magnitude (length) of the vector as a number.

- `normalize()`
  - **Returns**: A new `Vector` instance representing the unit vector in the direction of this vector.

## `Particle`

The `Particle` class represents a physical particle with position, velocity, and mass.

### Constructor

- `new Particle(position, velocity, mass)`
  - **Parameters**:
    - `position` (Vector): The initial position of the particle.
    - `velocity` (Vector): The initial velocity of the particle.
    - `mass` (Number): The mass of the particle.

### Methods

- `applyForce(force)`
  - **Parameters**:
    - `force` (Vector): The force to apply to the particle.
  - **Description**: Applies a force to the particle, affecting its acceleration.

- `update(timeStep)`
  - **Parameters**:
    - `timeStep` (Number): The time step to use for updating the particle’s position and velocity.
  - **Description**: Updates the particle’s position and velocity based on the applied forces and time step.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for enhancements or bug fixes.

## Acknowledgements

We would like to extend our heartfelt thanks to the following individuals and resources that contributed to the development of this library:

- **Open Source Libraries**: Many thanks to the developers and maintainers of the open-source libraries used in this project. Their work significantly accelerated our development and provided valuable functionalities.
  
- **Community Contributions**: Special thanks to the contributors in the community who provided feedback, bug reports, and suggestions for improvements. Your input has been invaluable in making this library better.

- **Documentation and Tutorials**: We are grateful for the comprehensive documentation and tutorials that guided us through various aspects of this project. Their clarity and insights were instrumental in overcoming challenges.

- **Mentors and Advisors**: A big thank you to our mentors and advisors for their guidance, support, and encouragement throughout the development process.

- **Friends and Family**: Lastly, we appreciate the support of our friends and family, who provided encouragement and understanding as we worked on this project.

If you have any contributions, feedback, or acknowledgments to add, please feel free to reach out or submit a pull request.


