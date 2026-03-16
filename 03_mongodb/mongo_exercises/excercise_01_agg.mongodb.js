use("sample_mflix");
db.comments.aggregate([
  { $match: { email: "john_bishop@fakegmail.com" } },
  { $project: { email: 1, text: 1 } }
])

/*
comments
   ↓
$match stage
(filter by email)
   ↓
matching documents
   ↓
$limit stage
   ↓
1 document returned
*/