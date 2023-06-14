function deepClone(obj){
if(type of obj !== object || obj == null){
return obj
}
let result
if(obj instanceof Array){
result =[]
}else{
result = {}
}
for(key in obj){
if(obj.hasOwnPreportype(key)){
result[key]===deepClone(obj[key])
}
}
}
