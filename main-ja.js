const customname = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = '気温華氏-1度で外は寒かった。:insertx:は出かけた。:inserty:についた。:insertz:。体重100ポンドの:insertx:は驚いたが,小池百合子は驚かなかった。:inserty:では良くあることだった。';
let insertX = ['梅子','小澤廉','崎山つばさ'];
let insertY = ['銀河劇場', '小平キャンパス7号舘','ブラジル'];
let insertZ = ['そこには誰もいなかった', 'そこには天才プログラマーがたくさんいた', 'そこはとても混雑していた'];

randomize.addEventListener('click', result);

function result(){
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
  
    if(customname.value !== ''){
        const name = customname.value;
        newStory = newStory.replace('小池百合子',name);
    }

    if(document.getElementById('ja').checked){
        const weight = Math.round(800*0.0714286) + 'kg';
        const temperature = '摂氏' + Math.round((94-32) * 5 / 9) + '度';
        newStory = newStory.replace('華氏-1度', temperature);
        newStory = newStory.replace('体重100ポンド', weight);
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
