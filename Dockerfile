FROM node:14

WORKDIR /root/app/

RUN apt-get update && apt-get install -y vim \
  curl \
  tmux \
  time \
  fish \
  zsh

