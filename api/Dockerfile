FROM node:17-alpine

# RUN npm install -g nodemon this will install nodemon globally in the container
RUN npm install -g nodemon

# COPY . . # will copy all files from the root directory to the container root directory
# COPY . /app # will copy all files from the root directory to the container /app directory (if doesn't exist, it will be created)

#  to avoid this we can use WORKDIR

# this allows us to set the working directory for any subsequent RUN, CMD, ENTRYPOINT, COPY and ADD instructions
WORKDIR /app


COPY package.json .

RUN npm install

COPY . .


# RUN node app.js  this will run the app.js file when the container is created (not recommended)

# CMD ["node", "app.js"]  this will run the app.js file when the container is created (recommended) 

# we also use EXPORT to export the port which is required to run the app
EXPOSE 4000

# CMD ["node", "app.js"]
CMD [ "npm","run","dev"]

# to build the image
# docker build -t <image-name> .
# (-t) is used to tag the image with a name
# . is used to specify the path of the Dockerfile