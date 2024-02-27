FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Copy the .env and .env.development files
# COPY .env ./

RUN npm run build

# Expose the port on which the app will run
# EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]

