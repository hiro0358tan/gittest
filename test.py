# FizzBUZZ
# ０から１００までの数字を出力
# ただし３の倍数はfoo
# ５の倍数はBar
# 両方の倍数はFooBar
end = 100
for i in range(0,end+1):
    print(i)
    if i % 15 == 0:
        print("FooBar")
    elif i % 3 == 0:
        print("foo")   
    elif i % 5 == 0:
        print("Bar")
else:
    print(i)
    
#目的地までの距離を入力すると料金を計算してくれるプログラム
# 初乗運賃 １５００ｍまで６４０円
# 加算運賃  以後３１８ｍごとに８０円

#print("Hellow world")
from audioop import avg
from calendar import week
from datetime import datetime
from multiprocessing import Barrier
import numbers
from xxlimited import foo


number = 3
print(number)
number = number +3
print(number)
# 今日の曜日を表示するプログラム
import datetime
today = datetime.date.today()
week = ['月', '火', '水', '木', '金', '土', '日']
print("今日は"+week[today.weekday()]+"曜日です")

numbers = [73,24,64,10,56,89]
# 最高点　最低点　平均点を出力
max = max(numbers)
print(max)
min = min(numbers)
print(min) 
print(sum(numbers)/len(numbers))

person = {"name":"髙橋","age":"60","address":"香川","hobby":{"sports":"見る専","music":"聴く専"}}
print ("私の名前は"+person['name']+"です。")
print("年齢は"+person["age"]+"歳です。")
print("出身地は"+person["address"]+"です。")
print("趣味は"+person['hobby']["sports"]+"です。")

# じゃんけん
# 相手の手と自分の手によって勝敗を決める
# どんな手があるのか示す
hand = ["グー","チョキ","パー"]
# 相手の手を決める
# 相手の手をランダムに設定
# randomモジュールを利用
# import random
# com_hand = random.choice(hand)

# # print(com_hand)
# # 自分の手を決める
# my_hand = input("グー,チョキ,パーのどれかを入力してください")
# print("コンピューターの手は" + com_hand)
# print("あなたの手は" + my_hand)
# # 比較して勝敗を決める
# if com_hand == my_hand :
#     print("あいこ")
# elif com_hand == "グー" and my_hand == "パー":
#     print("かちです")
# elif com_hand ==  "パー" and my_hand == "チョキ":
#     print("かちです")
# else:
#     print("負けです")


