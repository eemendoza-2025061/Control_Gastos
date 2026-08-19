CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@example.com', '$2b$10$akQJsAkfaTnxGwqedb4Ts.Jj/eIM2TYprwxD9UZqWsakku6RwZQgK', 'admin'),
('Usuario', 'user@example.com', '$2b$10$nENK7kht2Nc82Py5aLlMbeZSpNAZ33L6xof4zetnb2yMdmWYJC.bW', 'user')
ON CONFLICT (email) DO NOTHING;
