/*

*/


function start(e) {
    var name=[
        {
            char:'劉',
            big5:'BC42',
            cns:'1-6C2C',
            unicode:'5289'
        },
        {
            char:'洸',
            big5:'ACA9',
            cns:'1-522C',
            unicode:'6D38'
        },
        {
            char:'瑋',
            big5:'DEB3',
            cns:'2-4477',
            unicode:'744B'
        }
     ];
    var ele=document.getElementById("div1");

      for(var i=0;i<3; i++) {
          ele.innerHTML += name[i].char;
          ele.innerHTML += 'big5=';
          ele.innerHTML += name[i].big5;
          ele.innerHTML += 'cns=';
          ele.innerHTML += name[i].cns;
          ele.innerHTML += 'unicode=';
          ele.innerHTML += name[i].unicode;
          ele.innerHTML += '<br>';
      };



}


window.addEventListener( "load", start, false );
