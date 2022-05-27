var arr="1";



function check(){
    event.preventDefault();
    var sname = document.form.sname.value;
    var fname = document.form.fname.value;
    var mname = document.form.mname.value;
    var email = document.form.email.value;
    var phno = document.form.phno.value;
    var dob = document.form.dob.value;
    var gender = document.getElementsByName("gender");
    document.getElementById(arr).style.borderColor="black";
        if(arr=="5")
            document.getElementById(arr).style.borderColor="white"
    for(var i=0;i!=gender.length;i++)
    {
        if(gender[i].checked)
        {
            var gender_op=gender[i].value;
            break;
        }
    } 
   // var regx =/^\w\d.\w\d+@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/
   var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   // console.log(gender_op)
    if(sname==null||sname==""){
        arr="1"
        document.getElementById("1").style.borderColor="red";
        alert("Enter the student Name......");
    }
    else if(fname==null||fname=="")
    {
        arr="2"
        document.getElementById("2").style.borderColor="red";
        alert("Enter the Father's Name ......");
    }
    else if(mname==null||mname=="")
    {
        arr="3"
        document.getElementById("3").style.borderColor="red";
        alert("Enter the Mother's Name ......");
    }
    else if(dob==null||dob=="")
    {
        arr="4"
        document.getElementById("4").style.borderColor="red";
        alert("Enter the DOB ......");
    }
    else if(gender_op==null||gender_op=="")
    {
        arr="5"
        document.getElementById("5").style.borderColor="red";
        alert("Select the gender")
    }
    else if(!regx.test(email))
    {
        arr="6"
        document.getElementById("6").style.borderColor="red";
         alert("Enter the proper email..")
    }
    else if(phno==null||phno=="")
    {
        arr="7"
        document.getElementById("7").style.borderColor="red";
        alert("Enter the Phone Number ......");
    }
    else
    {
        output_show()
    }
    function output_show()
    {
        document.getElementById("ip").style.display="none"
        document.getElementById("op").style.display="block"
        document.getElementById("10").innerHTML=sname;
        document.getElementById("20").innerHTML=fname;
        document.getElementById("30").innerHTML=mname;
        document.getElementById("40").innerHTML=dob;
        document.getElementById("50").innerHTML=gender_op;
        document.getElementById("60").innerHTML=email;
        document.getElementById("70").innerHTML=phno;
    }

 }