function deretangka(n){
var x = '';
var y = 0;
  for (var i = 1; i <=n; i++) {
    y = 0;
    while (i%5==0 && i%3==0 && y==0) {
      x += 'NIOMIC ';
      y++;
    }
    while (i%5!=0 && i%3!=0 && y==0) {
      x += i+' ';
      y++;
    }
    while (i%3==0 && y==0) {
        x += "NIO ";
        y++;
    }
    while (i%5==0 && y==0) {
      x += "MIC ";
      y++;
    }

    if (i<n) {
      deretangka()
    }else{
    return x;}
  }
}
console.log(deretangka(10));
console.log(deretangka(20));
console.log(deretangka(30));
