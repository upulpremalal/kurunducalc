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
  var cato = 0;

  function caltool(){
    var va1 = (document.getElementById("ta1").value)*1;
  
    var va3 = (document.getElementById("ta3").value)*1;
    
     cato = va3+((va3/10)*va1);
     

   }

  let labo =[
    [20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [15,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [12,6,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [10,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40],
    [3,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [0,3,5,10,15,15,15,18,18,20,20,20,20,20,20,20,20,20,20,20,20,20],
    [2,2,3,3,6,6,6,6,6,8,8,8,8,8,8,8,8,8,10,10,10],
    [2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
            ]

    let tool =[
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//මූලික මෙවලම්
      [1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//කාබනික පොහොර කි.ග්‍රෑම්
      [3600,720,180,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//පැල ගණන අක්කරයකට
      [120,240,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360],//පොහොර ප්‍රමාණය කි.ග්‍රෑම්
      //[2000,2000,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500]//කෘෂී රසායන හා වෙනත් වියදම්
      [1,1,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25,1.25 ]//කෘෂී රසායන හා වෙනත් වියදම්
              ]

    let haverst =[
      [0,0,2600,3000,3240,3420,3420,3420,3420,3420,3420,3420,3420,3420,3420,3420,3420,3420,3420,3420,3240],//අස්වැන්න ලබා දෙන පඳුරු ගණන
      [0,0,0.04,0.05,0.08,0.11,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.14],//අස්වැන්න පඳුරකට කි.ග්‍රෑම්
      [0,0,0,0,6480,6840,13680,13680,13680,13680,13680,13680,13680,13680,13680,13680,13680,13680,13680,13760],  //කුරුඳු කෝටු ගණන 
      [0,0,104,150,259.2,376.2,427.5,427.5,427.5,427.5,427.5,427.5,427.5,427.5,427.5,427.5,427.5,427.5,427.5,427.5,453.6]// අපේක්ෂිත අස්වැන්න    
                 ]

  
   let tols =[10,17,23,30,40,50]//මූලික මෙවලම්
    
           

        var a=0; 
        var b=0;
 
        var d=0;
        var e=0;

        var f=0;
        var g=0;


           
        var c=0
        var t=0;

        var income=0;
        var cost=0;
        var crop=0;
      

        var x=0;
        var va2=0;    
        var vb =new Array(0,0,0,0,0,0,0,0,0,0,0,0,0)
        var vba =new Array(0,0,0,0,0,0,0)
        var vbc =new Array(0,0,0,0,0,0)
        var vbbc =new Array(0,0,0,0,0,0)
        var vbat =new Array(0,0,0,0,0,0,0)
        var vcat =new Array(0,0,0,0,0,0,0,0,0,0,0,0,0)
        var vbcc =new Array(0,0,0,0,0,0,0)

       
    
  

function gotill(){//මෙම වර්ෂය දක්වා මුලු අයවැය
 
    var va1 = document.getElementById("ta1").value;
  
    var va3 = document.getElementById("ta3").value;
    var va4 = document.getElementById("ta4").value;
    var va5 = document.getElementById("ta5").value;
    var va6 = document.getElementById("ta6").value;
    var va7 = document.getElementById("ta7").value;
    var va8 = document.getElementById("ta8").value;
    var va9 = document.getElementById("ta9").value;
    var va10 = document.getElementById("ta10").value;
    var va11 = document.getElementById("ta11").value;
   

    var va2 = parseInt(sel.options[sel.selectedIndex].text);
    var c=va2+1;     
    var tot=0;
    var tot1=0;
    var totc1=0;
    var tt=0;
    var n=0;
    var totca=0;
    var m=0;
   
   
    for(tt=1;tt<6;tt++){
      vba[tt]=0;
      vbat[tt]=0;
      vbcc[tt]=0;
      vbc[tt]=0;
      vbbc[tt]=0;
     
      document.getElementById("tba"+tt).value=0;
      
     }
   
    for(b=1;b<c;b++){  
      for(a=1;a<13;a++){   
       
       document.getElementById("tb"+a).value = (labo[a-1][b-1]*va1).toFixed(0);
       tot += parseInt(document.getElementById("tb"+a).value);       
       document.getElementById("tb13").value = parseInt(tot);

        if(a==1){
          vb[1] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[1].toFixed(0);
          document.getElementById("tc"+a).value=(vb[1]*va4).toFixed(2);
          }
        if(a==2){
          vb[2] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[2].toFixed(0);
          document.getElementById("tc"+a).value=(vb[2]*va4).toFixed(2);          
          }
        if(a==3){
          vb[3] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[3].toFixed(0);
          document.getElementById("tc"+a).value=(vb[3]*va4).toFixed(2);
          }
        if(a==4){
          vb[4] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[4].toFixed(0);
          document.getElementById("tc"+a).value=(vb[4]*va4).toFixed(2);
          }
        if(a==5){
          vb[5] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[5].toFixed(0);
          document.getElementById("tc"+a).value=(vb[5]*va4).toFixed(2);
          }
        if(a==6){
          vb[6] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[6].toFixed(0);
          document.getElementById("tc"+a).value=(vb[6]*va4).toFixed(2);
          }
        if(a==7){
          vb[7] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[7].toFixed(0);
          document.getElementById("tc"+a).value=(vb[7]*va4).toFixed(2);
          }
        if(a==8){
          vb[8] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[8].toFixed(0);
          document.getElementById("tc"+a).value=(vb[8]*va4).toFixed(2);
          }
        if(a==9){
          vb[9] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[9].toFixed(0);
          document.getElementById("tc"+a).value=(vb[9]*va4).toFixed(2);
          }
        if(a==10){
          vb[10] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[10].toFixed(0);
          document.getElementById("tc"+a).value=(vb[10]*va4).toFixed(2);
          }
        if(a==11){
          vb[11] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[11].toFixed(0);
          document.getElementById("tc"+a).value=(vb[11]*va4).toFixed(2);
          }
        if(a==12){
          vb[12] +=labo[a-1][b-1]*va1;
          document.getElementById("tb"+a).value=vb[12].toFixed(0);
          document.getElementById("tc"+a).value=(vb[12]*va4).toFixed(2);
          }

         
      
     
      
    } 
     
    }
   for(m=1;m<13;m++){
    totca += vb[m]*va4;    
    document.getElementById("tc13").value = totca.toFixed(2);
    }

     for(t=1;t<13;t++){
       vb[t]=0;
      }
    


    for(e=1;e<c;e++){
      for(d=1;d<6;d++){
       vbat[d]=0;
      
       document.getElementById("tba"+d).value = tool[d-1][e-1];
       tot1 += parseInt(document.getElementById("tba"+d).value);
       
       document.getElementById("tba6").value = parseInt(tot1);
      

       if(d==1){
                vba[1] += parseInt(document.getElementById("tba"+d).value);
                
                  if(va1<1.1){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[0]).toFixed(2)}else if
                  (va1<2.5){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[1]).toFixed(2)}else if
                  (va1<5){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[2]).toFixed(2)}else if
                  (va1<10){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[3]).toFixed(2)}else if
                  (va1<20){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[4]).toFixed(2)}else if
                  (va1>19){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[5]).toFixed(2)}
                  
                
                vbat[1]=document.getElementById("tca"+d).value*1;};
       if(d==2){
                vba[2] += document.getElementById("tba"+d).value*va1;
                document.getElementById("tba"+d).value=vba[2].toFixed(2);
                document.getElementById("tca"+d).value=(vba[2]*va7).toFixed(2);
                vbat[2]=document.getElementById("tca"+d).value*1;};
       if(d==3){
                vba[3] += parseInt(document.getElementById("tba"+d).value)*va1;
                document.getElementById("tba"+d).value=vba[3].toFixed(0);
                document.getElementById("tca"+d).value=(vba[3]*va9).toFixed(2);
                vbat[3]=document.getElementById("tca"+d).value*1;};
       if(d==4){
                vba[4] += document.getElementById("tba"+d).value*va1;
                document.getElementById("tba"+d).value=vba[4].toFixed(2);
                document.getElementById("tca"+d).value=(vba[4]*va8).toFixed(2);
                vbat[4]=document.getElementById("tca"+d).value*1;};
       if(d==5){
                vba[5] += document.getElementById("tba"+d).value*va1;
                document.getElementById("tba"+d).value=vba[5];
                document.getElementById("tca"+d).value=(vba[5]*va10).toFixed(2);
                vbat[5]=document.getElementById("tca"+d).value*1;};
           
             }
       
    } 
    for(n=1;n<6;n++){
    totc1 += vbat[n];    
    document.getElementById("tca6").value = totc1.toFixed(2);
    }

    document.getElementById("tca7").value = (totca + totc1).toFixed(2);

    for(g=1;g<c;g++){
    for(f=1;f<5;f++){
      vbbc[f] = haverst[f-1][g-1];
      vbc[f] +=haverst[f-1][g-1];
      

      
      vbcc[1] = vbc[4]*va1;
     
      vbcc[2] =vbc[4]*va5*va1;
      vbcc[3] =vbc[3]*va1;
      vbcc[4] =vbc[4]*va5*va1*va11/100;//????
     
      vbcc[6]=vbc[3]*va6*va1;
      vbcc[5] =vbcc[2] + vbcc[6];
     

      
      document.getElementById("tbc1").value = vbbc[1];//අස්වැන්න ලබා දෙන පඳුරු සංඛ්‍යාව
      document.getElementById("tbc2").value = vbcc[1].toFixed(2);//කුරුඳු පොතු අස්වැන්න
      document.getElementById("tbc3").value = vbcc[3];//කුරුඳු කෝටු ගණන
      document.getElementById("tcc3").value = vbcc[2].toFixed(2);//කුරුඳු පොතු අලෙවියෙන් ලැබෙන ආදායම
      document.getElementById("tcc4").value = vbcc[6].toFixed(2);//කුරුඳු කෝටු අලෙවියෙන් ලැබෙන ආදායම
      document.getElementById("tcb1").value = vbcc[4].toFixed(2);//කුරුඳු තැලීමේ වියදම
      document.getElementById("tcb2").value = (vbcc[4] + totca + totc1).toFixed(2);//සමස්ත වියදම 
      document.getElementById("tcc5").value = vbcc[5].toFixed(2);//මුලු ආදායම

      income=vbcc[5].toFixed(2);
      cost=(vbcc[4] + totca + totc1).toFixed(2);
      document.getElementById("tcc6").value=(income-cost).toFixed(2);

      crop=vbcc[1];
      if(crop!==0){
      document.getElementById("tcc7").value=(cost/crop).toFixed(2);
      }else {document.getElementById("tcc7").value=""}


    

    }
  }  
    
    }



    function gothis(){//මෙම වර්ෂය සඳහා අයවැය

      var va1 = document.getElementById("ta1").value;
     
       var va3 = document.getElementById("ta3").value;
       var va4 = document.getElementById("ta4").value;
       var va5 = document.getElementById("ta5").value;
       var va6 = document.getElementById("ta6").value;
       var va7 = document.getElementById("ta7").value;
       var va8 = document.getElementById("ta8").value;
       var va9 = document.getElementById("ta9").value;
       var va10 = document.getElementById("ta10").value;
       var va11 = document.getElementById("ta11").value;
    
       var va2 = parseInt(sel.options[sel.selectedIndex].text);
            
       var tot=0;
       var tot1=0;
       var totc1=0;
       var totc=0;

      

       if(ta1.value==""){alert("වගා කර ඇති ඉඩමේ ප්‍රමාණය ඇතුල් කරන්න.")}

       for(tt=1;tt<6;tt++){
        vba[tt]=0;
        vbat[tt]=0;
        vbcc[tt]=0;
        vbc[tt]=0;
        
       }
           
      for(a=1;a<13;a++){  
                  
         document.getElementById("tb"+a).value = ((labo[a-1][va2-1])*va1).toFixed(0);
         tot += parseInt(document.getElementById("tb"+a).value);
         document.getElementById("tb13").value = parseInt(tot);

         document.getElementById("tc"+a).value = ((labo[a-1][va2-1])*va4*va1).toFixed(2);
         totc += parseInt(document.getElementById("tc"+a).value);
         document.getElementById("tc13").value = parseInt(totc).toFixed(2);
                        
      }

      for(d=1;d<6;d++){                    
        document.getElementById("tba"+d).value = tool[d-1][va2-1];

       if(d==1){
                vba[1] = parseInt(document.getElementById("tba"+d).value);
                            
                  if(va1<1.1){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[0]).toFixed(2)}else if
                  (va1<2.5){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[1]).toFixed(2)}else if
                  (va1<5){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[2]).toFixed(2)}else if
                  (va1<10){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[3]).toFixed(2)}else if
                  (va1<20){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[4]).toFixed(2)}else if
                  (va1>19){document.getElementById("tca"+d).value=(vba[1]*(va3/10)*tols[5]).toFixed(2)}
             
                vbat[1]=document.getElementById("tca"+d).value*1;};
       if(d==2){
                vba[2] = document.getElementById("tba"+d).value*va1;
                document.getElementById("tba"+d).value=vba[2].toFixed(2);//
                document.getElementById("tca"+d).value=(vba[2]*va7).toFixed(2);
                vbat[2]=document.getElementById("tca"+d).value*1;};
       if(d==3){
                vba[3] = parseInt(document.getElementById("tba"+d).value)*va1;
                document.getElementById("tba"+d).value=vba[3].toFixed(0);
                document.getElementById("tca"+d).value=(vba[3]*va9).toFixed(2);
                vbat[3]=document.getElementById("tca"+d).value*1;};
       if(d==4){
                vba[4] = document.getElementById("tba"+d).value*va1;
                document.getElementById("tba"+d).value=vba[4].toFixed(2);
                document.getElementById("tca"+d).value=(vba[4]*va8).toFixed(2);
                vbat[4]=document.getElementById("tca"+d).value*1;};
       if(d==5){
                vba[5] = document.getElementById("tba"+d).value*va1;
                document.getElementById("tba"+d).value=vba[5].toFixed(2);
                document.getElementById("tca"+d).value=(vba[5]*va10).toFixed(2);
                vbat[5]=document.getElementById("tca"+d).value*1;};
       
       
        tot1 += parseInt(document.getElementById("tba"+d).value);
        document.getElementById("tba6").value = parseInt(tot1);

        totc1 += parseInt(document.getElementById("tca"+d).value);
       
        document.getElementById("tca6").value = totc1.toFixed(2);
        document.getElementById("tca7").value = (totc + totc1).toFixed(2);
                     
     }    
     
     for(f=1;f<5;f++){
       vbc[f]=haverst[f-1][va2-1];
     
      //document.getElementById("tbc"+f).value=vbc[f]*va1;
      document.getElementById("tbc1").value=(vbc[1]*va1).toFixed(0);//අස්වැන්න ලබා දෙන පඳුරු සංඛ්‍යාව
      document.getElementById("tbc2").value=(vbc[1]*vbc[2]*va1).toFixed(2);//කුරුඳු පොතු අස්වැන්න      
      document.getElementById("tbc3").value=(vbc[3]*va1).toFixed(0);//කුරුඳු කෝටු සංඛ්‍යාව
      document.getElementById("tcc3").value=(vbc[1]*vbc[2]*va5*va1).toFixed(2);
      document.getElementById("tcc4").value=(vbc[3]*va6*va1).toFixed(2);
      document.getElementById("tcb1").value=(vbc[1]*vbc[2]*va5*va1*va11/100).toFixed(2);
      document.getElementById("tcc5").value=((vbc[1]*vbc[2]*va5*va1) + (vbc[3]*va6*va1)).toFixed(2);//මුලු ආදායම
      document.getElementById("tcb2").value=( totc + totc1 + (vbc[1]*vbc[2]*va5*va1*va11/100)).toFixed(2);//සමස්ත වියදම

      income=((vbc[1]*vbc[2]*va5*va1) + (vbc[3]*va6*va1)).toFixed(2);
      cost=(totc + totc1 + (vbc[1]*vbc[2]*va5*va1*va11/100)).toFixed(2);
      document.getElementById("tcc6").value=(income - cost).toFixed(2);

      crop=vbc[1]*vbc[2]*va1;
      if(crop!==0){
      document.getElementById("tcc7").value=(cost/crop).toFixed(2)}else {document.getElementById("tcc7").value=""}
     } 
         
        }

        let nia;
        let niatot;
        let niac;
        let niactot;  

        function labocost(){
        let nia=0;
        let niatot=0;
        let niac=0;
        let niactot=0;        

        for(nia=1;nia<13;nia++){
          niatot +=document.getElementById("txda"+nia).value*1;
          document.getElementById("txda13").value=niatot;
        }
        for(niac=1;niac<13;niac++){
          niactot +=document.getElementById("txea"+niac).value*1;
          document.getElementById("txea13").value=niactot;
          lc = (document.getElementById("txea13").value)*1;
        }
        document.getElementById("txeb7").value = ic + lc ;
        }

        let nib;
        let nibtot;
        let nibc;
        let nibctot;

        let lc=0;
        let ic=0;
        let kc=0;
        let mc=0;
        let ac=0;
        let inco=0;
        let cro=0;

        function inpucost(){
        let nib=0;
        let nibtot=0;
        let nibc=0;
        let nibctot=0;

        for(nib=1;nib<6;nib++){
          nibtot +=document.getElementById("txdb"+nib).value*1;
          document.getElementById("txdb6").value=nibtot;
          
        }

        for(nibc=1;nibc<6;nibc++){
          nibctot +=document.getElementById("txeb"+nibc).value*1;
          document.getElementById("txeb6").value=nibctot;        
          ic = (document.getElementById("txeb6").value)*1;
        }
        document.getElementById("txeb7").value = ic + lc ;
        }

        let t1=0;
        let t2=0;

       function incom(){
        let nicc=0;
        let nicctot=0;

        for(nicc=1;nicc<4;nicc++){
          nicctot +=document.getElementById("txeec"+nicc).value*1;
          document.getElementById("txeec6").value=nicctot;
          inco= (document.getElementById("txeec6").value)*1;
        }

       }

      function netincom(){
        kc=document.getElementById("txec1").value*1;
        document.getElementById("txec2").value = ic + lc +kc;//සමස්ත වියදම
        document.getElementById("txeec7").value = inco - (ic + lc +kc);//ශුද්ධ ආදායම
        cro=(document.getElementById("txdc2").value)*1;//අස්වැන්න
        if(cro!==0){
        document.getElementById("txeec8").value = ((ic + lc +kc)/cro).toFixed(2);//නිෂ්පාදන වියදම
        }

        if(t1==0){stotim2(); tim1();t1=1;t2=0;}else
        if(t1==1){stotim1();t1=0;}
                 
       }

       let aa=0;
      function procost(){
        kc=document.getElementById("txec1").value*1;
        document.getElementById("txec2").value = ic + lc +kc;//සමස්ත වියදම
        document.getElementById("txeec7").value = inco - (ic + lc +kc);//ශුද්ධ ආදායම
        cro=(document.getElementById("txdc2").value)*1;//අස්වැන්න
        if(cro!==0){
        document.getElementById("txeec8").value = ((ic + lc +kc)/cro).toFixed(2);//නිෂ්පාදන වියදම
        }
        if(t2==0){stotim1();tim2();t2=1;t1=0;}else
        if(t2=1){stotim2();t2=0;}
           
        }

        
        function tim1(){
          t=setTimeout("tim1()",500)
          aa += 1;
            if(aa==2){
            txeec7.style.background ="red";
            nein.style.background="red";
            aa=0;}else
            {txeec7.style.background = "rgb(15, 34, 4)";
            nein.style.background="rgb(15, 34, 4)";
            }            
        }
        function tim2(){
          t=setTimeout("tim2()",500)
          aa += 1;
            if(aa==2){
            txeec8.style.background ="red";
            neco.style.background="red";
            aa=0;}else
            {txeec8.style.background = "rgb(15, 34, 4)";
            neco.style.background="rgb(15, 34, 4)";}            
        }

        function stotim1(){
          clearTimeout(t);
          {txeec7.style.background = "rgb(15, 34, 4)";
          nein.style.background="rgb(15, 34, 4)";} 
        }

        function stotim2(){
          clearTimeout(t);
          {txeec8.style.background = "rgb(15, 34, 4)";
          neco.style.background="rgb(15, 34, 4)";}  
        }
             
     





      



        





 
    

  