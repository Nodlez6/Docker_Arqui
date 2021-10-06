FROM node:14-alpine3.14
RUN mkdir -p /tareaArqui
#si no existe la carpeta, con -p la crea
WORKDIR /tareaArqui
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm" , "start"]