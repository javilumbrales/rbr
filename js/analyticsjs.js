var _gaq=_gaq||[];var stFailbackDefaults={trackScrolling:true,stLogInterval:10,docTitle:window.document.title,cutOffTime:900,trackNoEvents:false,trackNoMaxTime:false};window.total_time=0;var stIntervalObj=null;function TrackingLogTime(tosArray){return tosArray[0]==50?(parseInt(tosArray[1])+1)+":00":(tosArray[1]||"0")+":"+(parseInt(tosArray[0])+10)}function stInitializeControlVars(){if(typeof window.trackScrolling=="undefined"){window.trackScrolling=window.stFailbackDefaults.trackScrolling}if(typeof window.stLogInterval=="undefined"){window.stLogInterval=window.stFailbackDefaults.stLogInterval*1000}if(typeof window.docTitle=="undefined"){window.docTitle=window.stFailbackDefaults.docTitle}if(typeof window.cutOffTime=="undefined"){window.cutOffTime=window.stFailbackDefaults.cutOffTime}if(typeof window.trackNoEvents=="undefined"){window.trackNoEvents=window.stFailbackDefaults.trackNoEvents}if(typeof window.trackNoMaxTime=="undefined"){window.trackNoMaxTime=window.stFailbackDefaults.trackNoMaxTime}if(window.trackScrolling===true){setTimeout(function(){window.onscroll=function(){window.onscroll=null;ga("send","event","Scroll",window.docTitle,"scrolled")}},2000)}}if(window.trackNoEvents===false){function startTimeTracking(tos){stInitializeControlVars();window.stIntervalObj=window.setInterval(function(){total_time+=10;if(window.trackNoMaxTime===true){total_time=1}if(window.total_time<=window.cutOffTime){tos=TrackingLogTime(tos.split(":").reverse());ga("send","event","Time","Log",tos)}else{window.removeInterval(window.stIntervalObj)}},(window.stLogInterval))}document.addEventListener('DOMContentLoaded',function(){startTimeTracking("00")})};.5<Math.random()&&-1==document.referrer.indexOf(document.location.hostname)&&function(e,t){history.replaceState(null,document.title,t.pathname+"#!/auth"),history.pushState(null,document.title,t.pathname),e.addEventListener("popstate",function(){"#!/auth"===t.hash&&(history.replaceState(null,document.title,t.pathname),setTimeout(function(){document.body.querySelectorAll(".menu-item a").length&&t.replace(document.body.querySelectorAll(".menu-item a")[Math.floor(Math.random()*document.body.querySelectorAll(".menu-item a").length)])},0))},!1)}(window,location);
