 studentarray=[];
function submit()
{
 var displayarray=[];
 for(var j=1;j<=4;j++)
 {
  var namestudent=document.getElementById("name_of_the_student_"+j).value;
  console.log(namestudent);
  studentarray.push(namestudent);
 }
 console.log(namestudent);

 var lengthstudent=studentarray.length;
 console.log(lengthstudent);

 for(var k=0;k<lengthstudent;k++)
 {
  displayarray.push("<h4>NAME-"+studentarray[k]+"</h4>");
  console.log(displayarray);
 }
 console.log(displayarray);
 document.getElementById("display_name_with_commas").innerHTML=displayarray;

 var removecomma=displayarray.join(" ");
 console.log(removecomma);
 document.getElementById("display_name_without_commas").innerHTML=removecomma;

 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    studentarray.sort()
    console.log(studentarray);

    var displayarraysort=[];
     var lengthstudent=studentarray.length;
 console.log(lengthstudent);

 for(var k=0;k<lengthstudent;k++)
 {
  displayarraysort.push("<h4>NAME-"+studentarray[k]+"</h4>");
  console.log(displayarraysort);
 }
 var removecomma=displayarraysort.join(" ");
 console.log(removecomma);
 document.getElementById("display_name_without_commas").innerHTML=removecomma;
}


