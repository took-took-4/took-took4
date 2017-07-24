////chatbot for police page
// function chatAlert(){
//   var location = 'Saenpalm Nakorn Pathom'
//   $('#alertbox').append('Found Irregal TookTook at '+location+'\n');
// }
function chatBot(answer){
  var ans = answer;
  var location = 'Saenpalm Nakorn Pathom'
  if(ans=='h'){
  }
}
function getLocalDate(){
  var date = new Date()
  return date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
}
function main(){
  console.log(getLocalDate());

}
$().ready(main());
