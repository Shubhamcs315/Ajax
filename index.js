function loadDoc(){
    var xml=new XMLHttpRequest();
    xml.onload=function(){
        let obj=JSON.parse(this.response);
        for(let i=0;i<10;i++){
            let ob=obj["articles"];
            document.getElementById("k1").innerHTML += `<div> ${ob[i].author}</div>`;
        }
    }
    xml.open('GET','https://newsapi.org/v2/top-headlines?country=us&apiKey=f400a5934f0944b79127869ed3d7b6b2',true);
    xml.send();
}