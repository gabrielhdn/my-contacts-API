CREATE DATABASE mycontacts;

\c mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name)
VALUES
  ('School'),
  ('University'),
  ('Work'),
  ('Family'),
  ('Instagram'),
  ('Facebook'),
  ('LinkedIn'),
  ('Twitter'),
  ('Tinder'),
  ('Other');
