CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(100) UNIQUE NOT NULL,
    hash_password VARCHAR(255) NOT NULL,
    register_at DATE DEFAULT CURRENT_DATE,
    tier VARCHAR(20) CHECK (tier IN ('kainoi', 'kaiyai', 'kaiyaipromax'))
);