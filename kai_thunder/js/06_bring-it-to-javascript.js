class Customer {
  constructor(customer_id, first_name, last_name, address, phone, email, hash_password, register_at, tier) {
    this.customer_id = customer_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.hash_password = hash_password;
    this.register_at = register_at;
    this.tier = tier;
  }
}

// Paste the data starting here:
const customerTable = [
  new Customer(1, "Kai", "Thunder", "Trang", "081-111-1111", "kai@dev.com", "pw1", "2026-03-01", "kainoi"),
  new Customer(2, "Somsak", "Dev", "Trang", "081-222-2222", "somsak@dev.com", "pw2", "2026-03-02", "kainoi"),
  new Customer(3, "Jane", "Doe", "Bangkok", "081-333-3333", "jane@doe.com", "pw3", "2026-03-03", "kainoi"),
  new Customer(4, "Ananda", "Sky", "Phuket", "081-444-4444", "ananda@dev.com", "pw4", "2026-03-04", "kainoi"),
  new Customer(5, "Mali", "Flower", "Trang", "081-555-5555", "mali@dev.com", "pw5", "2026-03-05", "kainoi"),
  new Customer(6, "Viroj", "Stone", "Bangkok", "081-666-6666", "viroj@dev.com", "pw6", "2026-03-08", "kainoi"),
  new Customer(7, "Patchara", "River", "Phuket", "081-777-7777", "patch@dev.com", "pw7", "2026-03-09", "kainoi"),
  new Customer(8, "Chai", "Cloud", "Trang", "081-888-8888", "chai@dev.com", "pw8", "2026-03-10", "kainoi"),
  new Customer(9, "Sunee", "Bright", "Bangkok", "081-999-9999", "sunee@dev.com", "pw9", "2026-03-11", "kainoi"),
  new Customer(10, "Noi", "Small", "Trang", "081-000-0000", "noi@dev.com", "pw10", "2026-03-12", "kainoi"),
  new Customer(11, "Phitsanu", "Lion", "Trang", "081-112-2233", "phit@dev.com", "pw11", "2026-03-01", "kainoi"),
  new Customer(12, "Wandee", "Star", "Bangkok", "081-223-3344", "wandee@dev.com", "pw12", "2026-03-02", "kainoi"),
  new Customer(13, "Kitti", "Forest", "Chiang Mai", "081-334-4455", "kitti@dev.com", "pw13", "2026-03-03", "kainoi"),
  new Customer(14, "Somchai", "Mountain", "Phuket", "081-445-5566", "somchai@dev.com", "pw14", "2026-03-05", "kainoi"),
  new Customer(15, "Ratana", "Gem", "Trang", "081-556-6677", "ratana@dev.com", "pw15", "2026-03-06", "kainoi"),
  new Customer(16, "Preecha", "Bold", "Bangkok", "081-667-7788", "preecha@dev.com", "pw16", "2026-03-08", "kainoi"),
  new Customer(17, "Ubon", "Lotus", "Trang", "081-778-8899", "ubon@dev.com", "pw17", "2026-03-09", "kainoi"),
  new Customer(18, "Tawan", "Sun", "Phuket", "081-889-9900", "tawan@dev.com", "pw18", "2026-03-10", "kainoi"),
  new Customer(19, "Malee", "Jasmine", "Chiang Mai", "081-990-0011", "malee@dev.com", "pw19", "2026-03-11", "kainoi"),
  new Customer(20, "Arun", "Dawn", "Trang", "081-001-1122", "arun@dev.com", "pw20", "2026-03-12", "kainoi"),
  new Customer(21, "Surachai", "Ocean", "Phuket", "081-121-2121", "surachai@dev.com", "pw21", "2026-03-01", "kainoi"),
  new Customer(22, "Pimpa", "Moon", "Bangkok", "081-232-3232", "pimpa@dev.com", "pw22", "2026-03-02", "kainoi"),
  new Customer(23, "Arthit", "Solar", "Trang", "081-343-4343", "arthit@dev.com", "pw23", "2026-03-04", "kainoi"),
  new Customer(24, "Siri", "Tech", "Chiang Mai", "081-454-5454", "siri@dev.com", "pw24", "2026-03-05", "kainoi"),
  new Customer(25, "Boonmee", "Luck", "Trang", "081-565-6565", "boon@dev.com", "pw25", "2026-03-06", "kainoi"),
  new Customer(26, "Kamol", "Heart", "Bangkok", "081-676-7676", "kamol@dev.com", "pw26", "2026-03-07", "kainoi"),
  new Customer(27, "Dao", "Star", "Phuket", "081-787-8787", "dao@dev.com", "pw27", "2026-03-09", "kainoi"),
  new Customer(28, "Niran", "Eternal", "Trang", "081-898-8989", "niran@dev.com", "pw28", "2026-03-10", "kainoi"),
  new Customer(29, "Wipa", "Forest", "Chiang Mai", "081-909-0909", "wipa@dev.com", "pw29", "2026-03-11", "kainoi"),
  new Customer(30, "Kanya", "Girl", "Bangkok", "081-010-1010", "kanya@dev.com", "pw30", "2026-03-12", "kainoi")
];

// This part tells the terminal to show you the result
console.log("--- Customer Database (Mock) ---");
console.table(customerTable);