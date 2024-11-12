FROM node:18-bullseye

WORKDIR /node-app

COPY index.js ./

CMD [ "npm", "start" ]