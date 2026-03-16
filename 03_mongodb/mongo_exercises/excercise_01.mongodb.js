use("sample_mflix");
db.comments.findOne({
  email: "john_bishop@fakegmail.com"
})

//ตอนแรกไม่่รู่ว่าต้องใช้ use("sample_mflix"); ผลเลยออก null หมด เสียเวลาไป 1 ชั่วโมง

/*
comments
   ↓
search for email
   ↓
first match found
   ↓
return document
*/