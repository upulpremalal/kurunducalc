function myFunction() {
    var x = document.getElementById("myText").value;
    var p = document.getElementById("price").value;
    var pc = document.getElementById("presentage").value;
    document.getElementById("lbl1").innerHTML = "කුරුඳු පඳුරු ගණන  :- " + x * 3000;
    document.getElementById("lbl2").innerHTML = "වසරකට ලැබෙන කුරුඳු කඳන් ගණන  :- " + x * 3000 *4;
    document.getElementById("lbl3").innerHTML = "වසරකට ලැබෙන වියළි කුරුඳු පොතු අස්වැන්න  :- " + x * 3000 *4 * 50 /1000 + "kg";
    document.getElementById("lbl4").innerHTML = "වසරකට ලැබෙන මුළු ආදායම  :-  රු. ලක්ෂ " + (x * 3000 *4 * 50 /1000 * p)/100000;
    document.getElementById("lbl5").innerHTML = "අස්වනු සැකසීමේ වියදම  :-  රු. ලක්ෂ " + ((x * 3000 *4 * 50 /1000 * p) * pc/100)/100000;
    document.getElementById("lbl6").innerHTML = "ලාභය  :-  රු. ලක්ෂ " + ((x * 3000 *4 * 50 /1000 * p) * (100-pc)/100)/100000;

  }