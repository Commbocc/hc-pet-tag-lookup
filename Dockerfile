FROM ruby
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
WORKDIR /app

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install
ADD . .
