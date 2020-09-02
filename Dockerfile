FROM node:12
WORKDIR /app/frontend
COPY package.json /app/frontend
ENV PATH=/app/frontend/node_modules/.bin:$PATH
RUN npm install
COPY . /app/frontend
EXPOSE 8081
CMD [ "npm", "start" ]