# start from base image i.e; node22 here
FROM node:22-alpine

#  setup workdir
WORKDIR /src

# copy everything from this dir into the cointainer

COPY . .

# run the build comand

RUN npm install

# expose the port , of my choice

EXPOSE 3000

# cmd to run the app

CMD ["node","src/index.js"]


