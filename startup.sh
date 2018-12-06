#!/usr/bin/env bash
mongod &
npm run start-api &
cd client
npm start

