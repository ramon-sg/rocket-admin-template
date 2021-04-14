FROM node:current-buster

ARG DEBIAN_FRONTEND=noninteractive

# Persist bash history between runs
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/history/.bash_history" \
  && echo $SNIPPET >> "/root/.bashrc"

ENV APP_HOME /web
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME