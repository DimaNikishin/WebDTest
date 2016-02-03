'use strict';

$(document).ready(function(){
  var scrollStart = 0;
  $(window).scroll(function(event){
    var newScroll = $(window).scrollTop();
    if(newScroll < $(window).height()*0.6 + 50 && scrollStart == 0 && newScroll > $(window).height()*0.6){
      scrollStart = $(window).height()*0.8;
      $(".welcome-phone>img").animate({opacity: 0}, '100',function() {
      });
      $(".welcome-text").animate({opacity: 0}, '100',function() {
      });
      $(".title>div>p").animate({opacity: 1}, '100',function() {
      });
      $(".features-text>div>p").animate({opacity: 1}, '100',function() {
      });
      $(".title>div>h3").animate({opacity: 1}, '100',function() {
      });
    }
    else if(newScroll < $(window).height()*1.7 + 50 && scrollStart == $(window).height()*0.8 && newScroll > $(window).height()*1.7){
      scrollStart = $(window).height()*1.8;
      $(".features-list").animate({opacity: 0}, '100',function() {
      });
      $(".welcome-phone>img").animate({opacity: 1}, '100',function() {
      });
    }
    else if(newScroll > $(window).height()*0.5 - 50 && scrollStart == $(window).height()*0.8 && newScroll < $(window).height()*0.5){
      scrollStart = 0;
      $(".welcome-phone>img").animate({opacity: 1}, '100',function() {
      });
      $(".welcome-text").animate({opacity: 1}, '100',function() {
      });
      $(".title>div>p").animate({opacity: 0}, '100',function() {
      });
      $(".features-text>div>p").animate({opacity: 0}, '100',function() {
      });
      $(".title>div>h3").animate({opacity: 0}, '100',function() {
      });
    }
    else if(newScroll > $(window).height()*1.6 - 50 && scrollStart == $(window).height()*1.8 && newScroll < $(window).height()*1.6){
      scrollStart = $(window).height()*0.8;
      $(".features-list").animate({opacity: 1}, '100',function() {
      });
    }
  });
  //onclick event to add active class
  $(".nav-options>div>a").click(function(event){
    $(".nav-options>.active").removeClass("active")
    $(event.target).parent().addClass("active");
  });
  //onclick animation of background color (only first half of circle catch event due to absolute position - don't know how to fix)
  $(".circle").click(function(event){
    var color = getComputedStyle(event.target).backgroundColor;
    if(getComputedStyle(event.target).backgroundColor == "rgba(0, 0, 0, 0)"){
      var target = $(event.target).parent().get(0);
      color = getComputedStyle(target).backgroundColor;
    }
    $(".features").animate({backgroundColor: color})

  });
});