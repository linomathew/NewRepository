//assigment 1
console.log("\n1.");
var arr = ["HTML", "CSS", "JAVA", "JS"];
var str = '';
for(var i=0; i<arr.length; i++){
    if(i==0){
        str = str + arr[i];
    }else{
        str = str + "," + arr[i];
    }
}
console.log(str);

//assignment 2
console.log("\n2.");
var ar =  ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
var count = 0;
for(var i=0; i<ar.length; i++){
    for(var j=0; j<ar[i].length; j++){
        count++;
    }
}
console.log("the total number of characters in the array are "+count);

//assignment 3
console.log("\n3.");
var ary = [100, 20, 31, 150, 39, 72];
var low = ary[0];
var high = ary[0];
for(var i=0; i<ary.length-1; i++){
    if(low<ary[i+1]){
        if(high<ary[i+1]){
            high = ary[i+1];
        } 
    }else{
        low = ary[i+1];
    }
}
console.log("the highest value in the array is "+high);
console.log("the lowest value in the array is "+low);

//assignment 4
console.log("\n4.");
var mat =[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
if(mat.length != 0){
    var row = mat.length;
}else{
    console.log("invalid entry!!!");
}
var col = mat[0].length;
console.log("the number of rows is "+row);
console.log("the number of columns is "+col);

//assignment 5
console.log("\n5.");
var matr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var ans =[];
var k =0;
if(matr.length == matr[0].length){
    for(var i=0; i<matr.length; i++){
        for(var j=0; j<matr[i].length; j++){
            if(i==j){
                ans[k]=matr[i][j];
                k++;
            }
        }
    }
    console.log("the diagonal elements are "+ans);
}else{
    console.log("the given matrix is not symmetric");
}

//assignment 6
console.log("\n6.");
var aar =["assignment", "problem", "media", "upload"];
var ann =[];
var k =0;
for(var i=0; i<aar.length; i++){
    if(aar[i][0]=='a' || aar[i][aar[i].length -1]=='a'){
        ann[k]=aar[i];
        k++;
    }
}
console.log(ann);

//assignment 7
console.log("\n7.");
var arry =["edstem", "tech"];
var strr ='';
for(var i=0; i<arry.length; i++){
    if(i==0){
        strr=strr+arry[i];
    }else{
        strr=strr+'_'+arry[i];
    }
}
console.log(strr);

//assignment 8
console.log("\n8.");
var mtx = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
var sum_1 =0;
var sum_2 =0;
var diff =0;
var l=mtx.length;
var a1 ='';
var a2 ='';
if(l==mtx[0].length){
    for(var i=0; i<mtx.length; i++){
        for(var j=0; j<mtx[i].length; j++){
            if(i==j){
                sum_1 = sum_1 + mtx[i][j];
                if(j==l-1){
                    sum_2 = sum_2 + mtx[i][j];
                    l--;
                    if(j==mtx[0].length-1){
                        a2 = a2 + mtx[i][j];
                    }else{
                        a2  = a2 + "+" + mtx[i][j];
                    }
                }
                if(i==0){
                    a1 = a1 + mtx[i][j];
                }else{
                    a1 = a1 + "+" + mtx[i][j];
                }
            }else if(j==l-1){
                sum_2 = sum_2 + mtx[i][j];
                l--;
                if(j==mtx[0].length-1){
                    a2 = a2 + mtx[i][j];
                }else{
                    a2  = a2 + "+" + mtx[i][j];
                }
            }else{
                continue;
            }
        }
    }
    diff = sum_1 - sum_2;
    console.log(a1+" => "+sum_1);
    console.log(a2+" => "+sum_2);
    console.log("The difference => "+diff);
}

//assignment 9
console.log("\n9.");
var ayy =[2,3,4];
var pro =1;
for(var i=0;i<ayy.length; i++){
    pro=pro*ayy[i];
}
console.log("the total product of the elements in the array is "+pro);

//assignment 10
console.log("\n10.");
var maat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var ans =[];
var m =0;
var l =maat[0].length;
if(l%2 != 0){
    k=parseInt(l/2);
    for(var i=0; i<maat.length; i++){
        for(var j=0; j<maat[i].length; j++){
            if(j==k){
                ans[m]=maat[i][j];
                m++;
            }
        }
    }
    console.log("the elements in the mid-column are "+ans);
}else{
    console.log("please check your marix!");
}
console.log("\n");
