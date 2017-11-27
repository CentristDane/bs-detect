var reputable= 1;
var fakeNews = 2;
var reputableSrc = {};
reputableSrc['6013004059'] = reputable;
console.log(reputableSrc)
// need to discuss point system
//once we figure out how to make the function work, I might be able to add similar functions for regular news outlets
// can we create and input button for user to add fake news outlets and push it to the array.
var fakeSources = {};
fakeSources['357990416180'] = fakeNews //sputnik
fakeSources['326683984410'] = fakeNews //RT
fakeSources["146422995398181"] = fakeNews; //Addicting Info
fakeSources["177486166274"] = fakeNews; //Being Liberal
fakeSources["762592150466931"] = fakeNews; //If You Only News
fakeSources["253546571389025"] = fakeNews; //Bipartisan Report
fakeSources["180213475460766"] = fakeNews; //Liberal America
fakeSources["20950654496"] = fakeNews; //The Onion
fakeSources["38423635680"] = fakeNews; //Andy Borowitz
fakeSources["114517875225866"] = fakeNews; //The Other 98%
fakeSources["11539801009"] = fakeNews; //National Report
fakeSources["286075841466822"] = fakeNews; //The Daily Current
fakeSources["1672814509645693"] = fakeNews; //New Century Times
fakeSources["186219261412563"] = fakeNews; //US Uncut
fakeSources["1640832309490921"] = fakeNews; //Winning Democrats
fakeSources["346937065399354"] = fakeNews; //Occupy Democrats
fakeSources["298227226929908"] = fakeNews; //The Shovel
fakeSources["1439042583002670"] = fakeNews; //Clickhole
fakeSources["131929868907"] = fakeNews; //Collective Evolution
fakeSources["606565022725513"] = fakeNews; //Daily Buzz Live
fakeSources["463855417049923"] = fakeNews; //DC Gazette
fakeSources["320840064659503"] = fakeNews; //Newslo
fakeSources["211482380627"] = fakeNews; //Disclove.tv
fakeSources["35590531315"] = fakeNews; //Natural News
fakeSources["114896831960040"] = fakeNews; //WorldTruth.tv
fakeSources["311190048935167"] = fakeNews; //100PercentFedUp
fakeSources["820759888034335"] = fakeNews; //USA Newsflash
fakeSources["1425604894326440"] = fakeNews; //The Free Thought Project
fakeSources["179035672287016"] = fakeNews; //American News
fakeSources["236763656409160"] = fakeNews; //Project Veritas
fakeSources["687156898054966"] = fakeNews; //IJR Politics
fakeSources["1578074585774580"] = fakeNews; //IJR Life
fakeSources["80256732576"] = fakeNews; //Info Wars
fakeSources["116727628853"] = fakeNews; //RedFlag News
fakeSources["508887815910815"] = fakeNews; //BizPac Review
fakeSources["106547192707583"] = fakeNews; //RedState
fakeSources["95475020353"] = fakeNews; //Breitbart
fakeSources["140738092630206"] = fakeNews; //The Blaze
fakeSources["319569361390023"] = fakeNews; //Twitchy
fakeSources["245481491808"] = fakeNews; //Now The End Begins
fakeSources['1006457276057325'] = fakeNews //testting sean
var fakeArr=[
    '357990416180', //sputnik
    '326683984410', //RT
    "146422995398181", //"Addicting Info",
    "177486166274", //"Being Liberal",
    "762592150466931", //"If You Only News",
    "253546571389025", //"Bipartisan Report",
    "180213475460766", //"Liberal America",
    "20950654496", //"The Onion",
    "38423635680", //"Andy Borowitz",
    "114517875225866", //"The Other 98%",
    "11539801009", //"National Report",
    "286075841466822", //"The Daily Current",
    "1672814509645693", //"New Century Times",
    "186219261412563", //"US Uncut",
    "1640832309490921", //"Winning Democrats",
    "346937065399354", //"Occupy Democrats",
    "298227226929908", //"The Shovel",
    "1439042583002670", //"Clickhole",
    "131929868907", //"Collective Evolution",
    "606565022725513", //"Daily Buzz Live",
    "463855417049923", //"DC Gazette",
    "320840064659503", //"Newslo",
    "211482380627", //"Disclove.tv",
    "35590531315", //"Natural News",
    "114896831960040", //"WorldTruth.tv",
    "311190048935167", //"100PercentFedUp",
    "820759888034335", //"USA Newsflash",
    "1425604894326440", //"The Free Thought Project",
    "179035672287016", //"American News",
    "236763656409160", //"Project Veritas",
    "687156898054966", //"IJR Politics",
    "1578074585774580", //"IJR Life",
    "80256732576", //"Info Wars",
    "116727628853", //"RedFlag News",
    "508887815910815", //"BizPac Review",
    "106547192707583", //"RedState",
    "95475020353", //"Breitbart",
    "140738092630206", //"The Blaze",
    "319569361390023", //"Twitchy",
    "245481491808", //"Now The End Begins",
    '1006457276057325'//test
]
//change usertoken= +access for deployment
var access = 'EAAcca6BNJfkBAP5mqLPBZBtLRpKcIZCuSobCWa0vhr0IRlBnyHCu4kT3sTNZBKBsrX7J0ZBt4yY2Ri5RFZAnGDrBYt1irTBGTgNRIqMZACp9vWDibr7argSq9exvi24NCKwS8CpoU6bGAxB2YTuNEi0b44v7OaiDdylHfBG0azgxlZBdIlllLeTQWBeByX5ubFInN9YZB7WaKAZDZD'
var queryURL = "https://graph.facebook.com/me/friends?fields=name,id,likes.limit(100).fields(id,name)&limit=100&access_token=" + access;
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
  var user=[];
  var likes=[];
  // var userArr=[];
  var user_info = [];
    for (var i = 0; i < response.data.length; i++) {
    //above is the original
    // console.log(response.data[i])
    // likes.push(response.data[i].likes.data)
    user.push(response.data[i].name)
    // userArr.push(likes)
    user_info.push(response.data[i])
  }
  console.log(user_info);
  console.log(likes)
  console.log(user)
  function testScore(user_likes, userName){
    console.log(user_likes)
  //////// create a function that scores, and run a loop per user ----- see test_scoring.js
  //maybe give user_id a varaible value, I  think polittecho does something similar
  var userArr=[]
  var likesArr=[];
  for(var i=0; i<response.data.length; i++){
    userArr.push(likes);
  }
  //   for (var i = 0; i < response.data.length; i++) {
  //   //above is the original
  //   var likes = response.data[i].likes.data
  //   var user = response.data[i]
  //   likesArr.push(likes)
  //
  // }
  // console.log(likesArr)
  // console.log(userArr);
      //test based on wifi-less
      for(var i=0; i<user_likes.length; i++){
      //inserted conditional statement, check if this works
      //I need something here that will break up this by user instead of loopiong all likes
          // need a test that will loop through the object and match with the id or name of the page
      //for(var j=0; j<likes.length; j++){ //commenting this o ut to test wifiless-version
        likesArr.push(user_likes[i].id);//user_id used was likes before wifi-less
      }
    console.log(response.data)
    console.log(user_likes);
    console.log(likesArr, userArr)
// function score(){
//make fakeArr an arguement similar to politecho's post_id
likesArr.sort();
fakeArr.sort();
left = []; both = []; right = [];
i = 0; j = 0;
while (i < likesArr.length && j < fakeArr.length) {
    if (likesArr[i] < fakeArr[j]) {
        left.push(likesArr[i]);
        ++i;
    } else if (fakeArr[j] < likesArr[i]) {
        right.push(fakeArr[j]);
        ++j;
    } else {
        both.push(likesArr[i]);
        ++i; ++j;
    }
}
while (i < likesArr.length) {
    left.push(likesArr[i]);
    ++i;
}
while (j < fakeArr.length) {
    right.push(fakeArr[j]);
    ++j;
}
console.log('left'+left)
console.log('right'+right)
console.log('both'+both)
var score = 0;
var name;
for (var x=0; x<both.length; x++){
  score += fakeSources[both[x]]
  name=userName
  // return score;
  //do I need to store the score somewhere so it can be grabbed for the graph
  // console.log(fakeSources[both[x]])
}
console.log(score, name)
}
// console.log(likes)
console.log(user_info)
for(var x=0; x<user_info.length; x++){
  console.log(user_info[x])
  testScore(user_info[x].likes.data, user_info[x].name )
}
/////////////////////// can i create a for loop for users as the argument
})
// user.forEach(function(){
  //idea here is that it will run the testScore function for each user in the console.
  //take a look at the method for the test_scoring.js file
  //in the test scoring js, the argument is the user likes, I need to make sure the input is the same
//   testScore(likes);
// })
//////////////////////bar graph method possibly ----- psuedocoding
// user.forEach(function(){
//   -- create a var per user
//   -- store value returned from the testScore method into the varaible
//     -- this needs to make sure that it is stored under the corresponding user
//   -- then push to chart.js
// })
// score();