//各种登录时间
function reponseTimeShow(){
	layer.load();
	responseTime(function(data){
		layer.closeAll('loading');
   console.log(data);
   var timelist=[];
   var timeee=[];
   var pc=[];
   var wx=[];
   var and=[];
   var ios=[];
   var methods=[];
   var monthList=[];
   for(i in data.typeData){
       for(var j=0;j<data.typeData[i].length;j++){
       	 timelist.push(data.typeData[i][j].hour+':'+data.typeData[i][j].minute);
       }
   };
   for(i in data.methodData){
   	   methods.push(i);
   	   monthList.push({
            name: i,
            type: 'line',
            smooth: true,
            data:[]
   	   })
       for(var j=0;j<data.methodData[i].length;j++){
       	 timeee.push(data.methodData[i][j].hour+':'+data.methodData[i][j].minute);
       }
       
   };
   var arr=unique(timelist);
   var arr1=unique(timeee);
   arr=getList(arr);
   arr1=getList(arr1);
//console.log(monthList);
for(var i=0;i<monthList.length;i++){
	for(var j=0;j<arr1.length;j++){
		monthList[i].data.push(0);
		for(var k=0;k<data.methodData[monthList[i].name].length;k++){
			var time=data.methodData[monthList[i].name][k].hour+":"+data.methodData[monthList[i].name][k].minute;
			if(time==arr1[j]){
				monthList[i].data.push(data.methodData[monthList[i].name][k].aveTime);
			}
		}
	}
};
var compare=[];
var day=new Date().getDate();
var arrl=[];
//console.log(day);
for(n in data.methodTimeCompare){
	compare.push({
		name:n,
		yesdata:0,
		today:0
	});	
}
for(var i=0;i<compare.length;i++){
		for(var j=0;j<data.methodTimeCompare[compare[i].name].length;j++){
//			console.log(data.methodTimeCompare[compare[i].name][j].intParamA);
//			console.log(data.methodTimeCompare[compare[i].name][j].day);
			arrl.push(data.methodTimeCompare[compare[i].name][j].intParamA);
			if(data.methodTimeCompare[compare[i].name][j].day==day){
				compare[i].today=data.methodTimeCompare[compare[i].name][j].intParamA
			}else{
				compare[i].yesdata=data.methodTimeCompare[compare[i].name][j].intParamA
			}
		}
}

//console.log(compare);

vue.$data.methods=compare;
vue.$data.max=arrl.max();
for(k in data.typeData){
     	if(k==1){
	   		for(var j=0;j<arr.length;j++){
	   			pc[j]=0;
	   			for(var l=0;l<data.typeData['1'].length;l++){
	   				var time=data.typeData['1'][l].hour+':'+data.typeData['1'][l].minute;
	   				if(time==arr[j]){
	   				    pc[j]=data.typeData['1'][l].aveTime;
	   			    }
	   			}
	   		}	
	   	}else if(k==2){
	   		for(var j=0;j<arr.length;j++){
	   			wx[j]=0;
	   			for(var l=0;l<data.typeData['2'].length;l++){
	   				var time=data.typeData['2'][l].hour+':'+data.typeData['2'][l].minute;
	   				if(time==arr[j]){
	   				    wx[j]=data.typeData['2'][l].aveTime;
	   			    }
	   			}
	   		}
	   	}else if(k==3){
	   		for(var j=0;j<arr.length;j++){
	   			and[j]=0;
	   			for(var l=0;l<data.typeData['3'].length;l++){
	   				var time=data.typeData['3'][l].hour+':'+data.typeData['3'][l].minute;
	   				if(time==arr[j]){
	   				    and[j]=data.typeData['3'][l].aveTime;
	   			    }
	   			}
	   		}
	   	}else if(k==4){
	   		for(var j=0;j<arr.length;j++){
	   			ios[j]=0;
	   			for(var l=0;l<data.typeData['4'].length;l++){
	   				var time=data.typeData['4'][l].hour+':'+data.typeData['4'][l].minute;
	   				if(time==arr[j]){
	   				    ios[j]=data.typeData['4'][l].aveTime;
	   			    }
	   			}
	   		}
	   	}
	}
   //登录响应时间
   reposeTime(pc,wx,and,ios,arr);
   functionResponseTime(arr1,monthList);  
});

}
reponseTimeShow();

function reponseTimeTwoShow(start,end){
	
 responseTimeTwo(start,end,function(data){
 	 layer.closeAll('loading');
   console.log(data);
   var timelist=[];
   var timeee=[];
   var pc=[];
   var wx=[];
   var and=[];
   var ios=[];
   var methods=[];
   var monthList=[];
   for(i in data.typeData){
       for(var j=0;j<data.typeData[i].length;j++){
       	 timelist.push(data.typeData[i][j].hour+':'+data.typeData[i][j].minute);
       }
   };
   for(i in data.methodData){
   	   methods.push(i);
   	   monthList.push({
            name: i,
            type: 'line',
            smooth: true,
            data:[]
   	   })
       for(var j=0;j<data.methodData[i].length;j++){
       	 timeee.push(data.methodData[i][j].hour+':'+data.methodData[i][j].minute);
       }
       
   };
   var arr=unique(timelist);
   var arr1=unique(timeee);
   arr=getList(arr);
   arr1=getList(arr1);
//console.log(monthList);
for(var i=0;i<monthList.length;i++){
	for(var j=0;j<arr1.length;j++){
		monthList[i].data.push(0);
		for(var k=0;k<data.methodData[monthList[i].name].length;k++){
			var time=data.methodData[monthList[i].name][k].hour+":"+data.methodData[monthList[i].name][k].minute;
			if(time==arr1[j]){
				monthList[i].data.push(data.methodData[monthList[i].name][k].aveTime);
			}
		}
	}
};
var compare=[];
var day=new Date().getDate();
var arrl=[];
//console.log(day);
for(n in data.methodTimeCompare){
	compare.push({
		name:n,
		yesdata:0,
		today:0
	});	
}
for(var i=0;i<compare.length;i++){
		for(var j=0;j<data.methodTimeCompare[compare[i].name].length;j++){
//			console.log(data.methodTimeCompare[compare[i].name][j].intParamA);
//			console.log(data.methodTimeCompare[compare[i].name][j].day);
			arrl.push(data.methodTimeCompare[compare[i].name][j].intParamA);
			if(data.methodTimeCompare[compare[i].name][j].day==day){
				compare[i].today=data.methodTimeCompare[compare[i].name][j].intParamA
			}else{
				compare[i].yesdata=data.methodTimeCompare[compare[i].name][j].intParamA
			}
		}
}

//console.log(compare);

vue.$data.methods=compare;
vue.$data.max=arrl.max();
for(k in data.typeData){
     	if(k==1){
	   		for(var j=0;j<arr.length;j++){
	   			pc[j]=0;
	   			for(var l=0;l<data.typeData['1'].length;l++){
	   				var time=data.typeData['1'][l].hour+':'+data.typeData['1'][l].minute;
	   				if(time==arr[j]){
	   				    pc[j]=data.typeData['1'][l].aveTime;
	   			    }
	   			}
	   		}	
	   	}else if(k==2){
	   		for(var j=0;j<arr.length;j++){
	   			wx[j]=0;
	   			for(var l=0;l<data.typeData['2'].length;l++){
	   				var time=data.typeData['2'][l].hour+':'+data.typeData['2'][l].minute;
	   				if(time==arr[j]){
	   				    wx[j]=data.typeData['2'][l].aveTime;
	   			    }
	   			}
	   		}
	   	}else if(k==3){
	   		for(var j=0;j<arr.length;j++){
	   			and[j]=0;
	   			for(var l=0;l<data.typeData['3'].length;l++){
	   				var time=data.typeData['3'][l].hour+':'+data.typeData['3'][l].minute;
	   				if(time==arr[j]){
	   				    and[j]=data.typeData['3'][l].aveTime;
	   			    }
	   			}
	   		}
	   	}else if(k==4){
	   		for(var j=0;j<arr.length;j++){
	   			ios[j]=0;
	   			for(var l=0;l<data.typeData['4'].length;l++){
	   				var time=data.typeData['4'][l].hour+':'+data.typeData['4'][l].minute;
	   				if(time==arr[j]){
	   				    ios[j]=data.typeData['4'][l].aveTime;
	   			    }
	   			}
	   		}
	   	}
	}
   //登录响应时间
   reposeTime(pc,wx,and,ios,arr);
   functionResponseTime(arr1,monthList);  
});
}
