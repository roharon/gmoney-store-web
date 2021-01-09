<h1 align="center">Gmoney Store Web</h1>

![Docker CI & CD](https://github.com/roharon/gmoney-store-web/workflows/Docker%20CI%20&%20CD/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![Github contributors](https://img.shields.io/github/contributors/roharon/gmoney-store-web.svg) 

[![Run on Ainize](https://ainize.ai/images/run_on_ainize_button.svg)](https://ainize.web.app/redirect?git_repo=https://github.com/roharon/gmoney-store-web)

<br/>

<p align="center" >
<img src="https://user-images.githubusercontent.com/4939738/104093467-05dc5b00-52ce-11eb-98c8-e10b2ebda4f8.png" alt="image" height="480" />
</p>

<br/>

## About The Project

Store finding service that support local-money in Gyeonggi-do, Republic of Korea.

Need GPS permissions allow to find store nearby.



This repository is the web client for Gmoney-Store

* All of the Gmoney Store Repository

  - [Gmoney-Store-Server](https://github.com/roharon/gmoney-store-server) 
  
  - [Gmoney-Store-Web](https://github.com/roharon/gmoney-store-web) (this repo.)
<br/>


### Tech Stack

* javascript

* React.js
* Docker, Docker-compose


<br/>


## Getting Started - with Docker



### Prerequisites

* Docker
* Docker-compose 3.4

<br/>


### Installation & Run

1. Run docker-compose file

	```bash
	$ sudo docker build -t gmoney-store-web
	$ sudo docker run -it -p 8000:80 gmoney-store-web
	```

2. open [localhost:8000](localhost:8000)


<br/>
<br/>



## Getting Started - without Docker

### Prerequisites

* NPM

<br/>


### Installation & Run

1. Execute npm install, start command

   ```bash
   $ npm install
   $ npm start
   ```

2. open [localhost:3000](localhost:3000) on your browser


<br/>
<br/>



## License

Distributed under the MIT License. See `LICENSE` for more information.
