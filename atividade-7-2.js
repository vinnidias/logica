var intersec = []
var user = require("readline-sync")
var nome1 = user.question("insira o nome do jogador 1: ")
var nums1 = []

for(i=0;i<5;i++){
  nums1.push(user.questionInt('insira um numero de 1 a 10: '))
}
var nome2 = user.question("insira o nome do jogador 2: ")
var nums2 =[]
for(i=0;i<5;i++){
  nums2.push(user.questionInt('insira um numero de 1 a 10: '))
}
for(j=0;j<nums1.length;j++){
  for(i=0;i<nums2.length;i++){
    if(nums1[j]==nums2[i])
  intersec.push(nums1[j])
  }
} console.log(intersec)
