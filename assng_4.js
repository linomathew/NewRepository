// assignment 1
var arr =  ['edstem', 'react', 'javascript', 'html', 'css' ];
var count = 0;
for( var i = 0; i<arr.length ;i++){
    for( var j = 0; j<arr[i].length;j++){
        if(arr[i][j]=='a' || arr[i][j]=='e' || arr[i][j]=='i' || arr[i][j]=='o' || arr[i][j]=='u' ){
            count++;
        }
    }
}
console.log("The number of vowels in the given array of strings is " +count);

//assignment 2
var str = "malayalam";
var l = str.length;
var count = 0;
var c = 0;
if(l%2 == 0){
    for(i=0 ,j=l-1; i<l/2;i++,j--){
        if(str[i]==str[j]){
            count++;
        }
    }
}else{
    var k = parseInt(str.length/2);
    for(i=0 ,j=l-1; i<k ;i++,j--){
        if(str[i]==str[j]){
            c++;
        }
    }
}
if(count == l/2 || c == k){
    console.log("YES");
}else{
    console.log("NO");
}

//assignmeent 3
var array = [95,86,66,94,58];
var l = array.length;
for(var i = 0; i<l; i++){
    var sum = sum+array[i];
}
var avg = sum/l;
console.log("The average is "+avg);

//assignment 4
var ar = ['edstem', 'react', 'html', 'foodie', 'coder'];
for(var i=0 ; i < ar.length ; i++){
    if(ar.length%2 == 0){
        ar[i].pop;
    }
}
console.log(ar);

//assignment 5
var aa = [5, 9, 8, 12, 22, 18];
for(var i=0 ; i < aa.length ; i++){
    if(aa[i] % 3 == 0){
        aa[i]="multiple";
    }
}
console.log(aa);

//assignment 6
var aaa = [];
var num = 1;
for(var i=0;i<10;i++){
    aaa[i]=num;
    num++;
}
console.log(aaa);

//assignment 7
var str = "Edstem Technologies located at kerala";
var strar = [ ];
for(var i=0;i<str.length;i++){
    for(var j=0; str[j] != ' '; j++){
      //  strar[i][j] = str[j];
    }
}
console.log(strar);

//assignment 8
var str = 'Edstem';
var j = 0;
for(var i=0;i<str.length;i++){
    if(i%2 != 0){
    //    strr.concat(str[i]);
        j++;
    }
}
//console.log(strr);

//assignment 9
var stri="coding is easy";
var count = 1;
for (var i = 0;i<stri.length;i++){
    if(stri[i]==' '){
        count++;
    }
}
console.log(count +" number of words");

//assignment 10
var arr = ['react', 'html', 'edstm'];
var str ='edstem';
var str_1 = '';
var l = str.length;
for(var i=0;i<arr[i].length;){
    for(var j=0;j<arr[i][j].length;j++){
        if(arr[i][j]==str[i]){
            for(var k=0;k<str.length;k++){
                str_1[k]=
            }

        }
    }
}