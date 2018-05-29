'use strict';

var recognition;
var nowRecognition = false;
var isStarted = false;
recognition = new webkitSpeechRecognition();
console.log("instance was created")

chrome.runtime.onInstalled.addListener(function() {
  if(!isStarted) {
    initialize();
    console.log("on Installed, start recognition");
    isStarted = true;
  }
});

chrome.runtime.onStartup.addListener(function() {
  if(!isStarted) {
    console.log("on startup, start recognition");
    isStarted = true;
  }
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  console.log("on alarm");
});

function initialize() {
  recognition.lang = "en"
  recognition.continuous = true;
  recognition.interim = true;
  recognition.start();
}

recognition.onresult = function(e) {
  var text = e.results[e.results.length-1][0].transcript;
  console.log(text);
  action(text);
}

recognition.onend = function () {
  console.log("on end");
  recognition.start();
}

function action(text) {
  if(text.match("open email") != null) {
    chrome.tabs.create({url: "https://mail.google.com/"});

  } else if(text.match("open calendar") != null){
    chrome.tabs.create({url: "https://calendar.google.com/"});

  } else if(text.match("open map") != null){
    chrome.tabs.create({url: "https://www.google.co.jp/maps/"});
    
  } else if(text.match("open Drive") != null){
    chrome.tabs.create({url: "https://drive.google.com/"});

  }else if(text.match("open Translator") != null){
    chrome.tabs.create({url: "https://translate.google.co.jp/"});
    
  } else if(text.match("close") != null){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      console.log(tabs);
      if(tabs.length > 0) {
        console.log(tabs[0].id);
        chrome.tabs.remove(tabs[0].id, function(){});
      }
    });
  }
}