<!-- PROJECT LOGO -->
<br />
<p align="center">
<!--
  <a href="https://github.com/colinespinas/ward">
    <img src="https://raw.githubusercontent.com/colinespinas/ward/master/public/assets/images/logo.png" alt="Logo" width="120">
  </a>
  -->

  <h3 align="center">WARD-SERVER</h3>

  <p align="center">
    A Basic server for <a href="https://github.com/colinespinas/ward">Ward</a>
    <br />
    <br />
    <!--<a href="https://ColinEspinas.github.io/ward/public/">View Demo</a>
    ·-->
    <a href="https://github.com/colinespinas/ward-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/colinespinas/ward-server/issues">Request Feature</a>
    <br />
    <br />
    <a href="https://github.com/colinespinas/ward-server/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/colinespinas/ward-server.svg?style=flat-square" alt="Contributors">
    </a>
    <a href="https://github.com/colinespinas/ward-server/network/members">
      <img src="https://img.shields.io/github/forks/colinespinas/ward-server.svg?style=flat-square" alt="Forks">
    </a>
    <a href="https://github.com/colinespinas/ward-server/stargazers">
      <img src="https://img.shields.io/github/stars/colinespinas/ward-server.svg?style=flat-square" alt="Stargazer">
    </a>
    <a href="https://github.com/colinespinas/ward-server/issues">
      <img src="https://img.shields.io/github/issues/colinespinas/ward-server.svg?style=flat-square" alt="Issues">
    </a>
    <a href="https://github.com/colinespinas/ward-server/blob/master/LICENSE.md">
      <img src="https://img.shields.io/github/license/colinespinas/ward-server.svg?style=flat-square" alt="License">
    </a>
    <a href="https://www.linkedin.com/in/colin-espinas-9739b8178/l">
      <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555" alt="Linkedin">
    </a>
    <br />
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About](#about)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
<!-- * [Acknowledgements](#acknowledgements) -->



<!-- ABOUT THE PROJECT -->
## About
A basic server using [connect](https://github.com/senchalabs/connect) and [server-static](https://github.com/expressjs/serve-static) to serve [Ward](https://github.com/ColinEspinas/ward) projects.


<!-- GETTING STARTED -->
## Getting Started

See how to get your Ward server up and ready.

### Prerequisites

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com) or [Yarn](https://yarnpkg.com) (or any package manager)


### Installation

#### Method 1 (package manager):
1. Install ward-server
```sh
# npm
npm install ward-server

# Yarn
yarn add ward-server
```

#### Method 2 (git clone):
1. Clone this repository
```sh
git clone https://github.com/ColinEspinas/ward-server.git
```
2. Install dependencies
```sh
# npm
npm install

# Yarn
yarn add
```


<!-- USAGE EXAMPLES -->
## Usage

Here is how to get your server running
```javascript
// Include the package
const Server = require('ward-server');

// Create a Server instance
const server = new Server({
  path : "/src", // Path to your ward project directory
});

// Serve files
server.serve();
```



<!-- CONTRIBUTING -->
## Contributing

This project is developed by a somewhat beginner javascript developer, help is always welcome. Do not hesitate to contribute to the project.

1. Fork the Project
2. Create your Feature or Fix Branch (`git checkout -b feature/Feature` or `git checkout -b fix/Fix`)
3. Commit your Changes (`git commit -m 'Add some feature or fix'`)
4. Push to the Branch (`git push origin feature/Feature` or `git push origin fix/Fix`)
5. Open a Pull Request



<!-- LICENSE -->
## License

ward-server is distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Colin Espinas - [Website](https://colinespinas.com) - contact@colinespinas.com

Project link: [https://github.com/ColinEspinas/ward-server](https://github.com/ColinEspinas/ward-server)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [connect](https://github.com/senchalabs/connect)
* [serve-static](https://github.com/expressjs/serve-static)
* [chalk](https://github.com/chalk/chalk)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/colinespinas/ward-server.svg?style=flat-square
[contributors-url]: https://github.com/colinespinas/ward-server/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/colinespinas/ward-server.svg?style=flat-square
[forks-url]: https://github.com/colinespinas/ward-server/network/members
[stars-shield]: https://img.shields.io/github/stars/colinespinas/ward-server.svg?style=flat-square
[stars-url]: https://github.com/colinespinas/ward-server/stargazers
[issues-shield]: https://img.shields.io/github/issues/colinespinas/ward-server.svg?style=flat-square
[issues-url]: https://github.com/colinespinas/ward-server/issues
[license-shield]: https://img.shields.io/github/license/colinespinas/ward-server.svg?style=flat-square
[license-url]: https://github.com/colinespinas/ward-server/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/colin-espinas-9739b8178/l
[product-screenshot]: https://i.imgur.com/o9rDolc.jpg
