/*
声明一个字符串数组
let 变量: 类型[]
 */
let ea;
ea = ['a', 'b', 'c'];
/*
   数组的声明 类型[] 或者
   Array<类型>
 */
let f;
f = [1, 2, 3];
/*
元组，元组就是固定长度的数组
语法: [类型,....]
 */
let h;
h = ['hello', 'world'];
/*
enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender);
let k;
let l;
let m;
//# sourceMappingURL=array.js.map