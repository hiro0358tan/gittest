console.log("こんにちは");
//足し算
console.log(1+1);
console.log(1/1);
console.log(1-1);

// 変数を作成
var f_name="ひろたん";
let l_name="髙橋";
const m_name="なし";

// 変数を呼び出し
console.log("私は"+f_name+l_name+"です");

// 変数に代入
var intro="私は"+f_name+l_name+"です";

//特殊な書き方
var count = 1;
//再代入
count = count+1;
//同じ意味
count+=1;
console.log(count);

//±１の時だけ使える
count++
console.log(count)
count--
console.log(count)
//前置
++count
console.log(count);
--count
console.log(count);

var prefect = "新潟県岡山県福岡県沖縄県"; 
var pref = prefect.split("県");
console.log(pref);

//配列
var prof = ["髙橋","ポケモン","香川"];
//配列の呼び出し
console.log("私は"+prof[0]+"です");
console.log("好きなものは"+prof[1]+"です");
console.log("住まいは"+prof[2]+"です");
//チャレンジ! //「住まいは香川ですと表示」
console.log("住まいは"+prof[2]+"です");

//オブジェクト（連想配列）
var region ={
    okinawa:"KOZA",
    hokkaido:"EBEATU",
    kagawa:"TAKAMATSU"
}
console.log(region.kagawa);
console.log(region["kagawa"]);

//真偽値
var common = 2;
var special = "2";
//等しい
console.log(common==special);
//厳密に等しい
console.log(common===special);
//等しくない
console.log(common!=special);
//右が左より大きい
console.log(common<special);
//右が左以上
console.log(common<=special);
//右が左より大きい
console.log(common>special);
//右が左以下
console.log(common>=special);

//if文
var age = 10;

if(age >= 20 ){
    console.log("お酒OK!");
}else{
    console.log("お酒は２０になってから");
}

//条件が複数ある時
var time = 9;
if (time <=7.5) {
    console.log("寝てていいよ");
} else if (7.5<time && time<8.5) {
     console.log("起きてね");

        
 }else{
        console.log("遅刻です");
    }
//吾郎が登校した時刻によって遅刻かそうでないかを判断してください
// 反応は３種類  

var time = 9;
if(time <= 9){
    console.log("早いね");
}else if(9<time && time<9.5){
    console.log("セーフ");
}else {
    console.log("遅刻");
}
//for文
for(var i=0; i<10; i++){
    console.log(i);
}
    
//今まで
var a = 1;
var b = 2;
var sumple = a+b;

console.log(sumple);

//関数を使う
function counts(a,b) {
    var counts= a+b;
    return counts;
    
}

console.log(counts(3,4));
console.log("３月の収穫は"+counts(3,4));
console.log("４月の収穫は"+counts(7,8));
//３，４→引数｜｜７→戻り値

//じゃんけん
var my_hand="グー";
console.log("勝ち");

//自分の手を決める
var my_hand="グー";
//コンピューターの手をランダムに決める
var com_hand="パー";
//自分の手とコンピューターの手をifで分岐
//自分の手がグー、相手がチョキ。
//自分の手がチョキ、相手がパー。
//自分の手がパー、相手がグー。
//の時、勝ち
if (my_hand=="グー"&&com_hand=="チョキ"){
console.log("勝ちです");
}
//同じならアイコ
else if (my_hand == com_hand) {
    console.log("引き分け");
}
else{
    console.log("負けです");
}
//結果をコンソールに出力






//fizz bazz
for (var i = 0; i <= 100; i++){
    if (i % 15 == 0 ) {
    console.log( "fizz buzz" );
    }else if (i % 3 == 0 ) {
      console.log( "fizz" );

    }else if (i % 5 == 0 ) {
      console.log( "buzz" );
    }else {
        console.log( i );
      }
}
    
$(function(){
    $('#flex').html("こんにちは")
    $('#btn').on('click',function(){
        $('body').html("熱っ")
    });
});

    $(function(){
        //ボタンが押されたときに
        $("#jq_btn").on("click",function(){
        //テキストをどうする
        // $("#jq_text").css("color","red")
        $("#jq_text").addClass("jq_css")
        })
    })
