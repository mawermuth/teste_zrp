FROM node:lts

WORKDIR /app
COPY . /app

RUN npm install
RUN npm install nodemon -g

CMD ["nodemon"]