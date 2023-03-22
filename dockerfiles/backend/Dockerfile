FROM python:3.10-alpine


# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# create directory for the app user
ENV APP_HOME=/usr/src/backend
RUN mkdir -p $APP_HOME

RUN addgroup -S app && adduser -S app -G app

# set work directory
WORKDIR $APP_HOME

# install dependencies
RUN apk update && apk add gcc python3-dev musl-dev && pip install --upgrade pip

COPY ./backend/requirements.txt .

RUN pip install -r requirements.txt

COPY ./backend $APP_HOME

RUN chown -R app:app $APP_HOME

USER app

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]