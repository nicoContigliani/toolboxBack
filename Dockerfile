FROM node:14.17.1-alpine
WORKDIR ./bin
COPY . . 
RUN npm run start

# ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "node","./bin/www.js" ]