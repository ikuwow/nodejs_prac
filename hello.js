// $ node filename
// 初めてのnodejs

// console.log("hello world");

// non-blockingな書き方

// Node.js では、処理に時間がかかりそうな setTimeout などのタイマー処理やデータベースへのアクセス、ファイルの書き込みといった命令は、次の命令をブロックしないように書く必要があります。
setTimeout(function(){
    console.log("hello");
},1000);
// callback関数を使う。
console.log("world");


// blockingな書き方
var start = new Date().getTime();
while (new Date().getTime() < start + 2000);
console.log("world");
// callback関数を使った書き方にしないと、
// while文終わるまですべての処理をブロックしてしまう。
// スレッドが1つだから。
