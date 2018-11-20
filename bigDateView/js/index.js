//阅读量与新增资源
readNewResource(function(data){
//	console.log(data);
    var timelist=[];
    var newadd=[];
    var read=[];
    var maxadd=[];
    var readmax=[];
    for(var i=0;i<data.newAddData.length;i++){
    	timelist.push(data.newAddData[i].year+'-'+data.newAddData[i].month+'-'+data.newAddData[i].day);
    	newadd.push(0);
    	maxadd.push(data.newAddData[i].count);
    	read.push(0);
    };
    for(var i=0;i<data.readData.length;i++){
    	timelist.push(data.readData[i].year+'-'+data.readData[i].month+'-'+data.readData[i].day);
    	newadd.push(0);
    	readmax.push(data.readData[i].count);
    	read.push(0);
    };
    var arr=unique(timelist);
    timelist=getmonth(arr);
    for(var j=0;j<timelist.length;j++){
    	for(var i=0;i<data.newAddData.length;i++){
    		var time=data.newAddData[i].year+'-'+data.newAddData[i].month+'-'+data.newAddData[i].day
    	     if(time==timelist[j]){
    	     	newadd[j]=data.newAddData[i].count
    	     }
        }
    	for(var i=0;i<data.readData.length;i++){
    		var time=data.readData[i].year+'-'+data.readData[i].month+'-'+data.readData[i].day
    	     if(time==timelist[j]){
    	     	read[j]=data.readData[i].count
    	     }
        }
    }
   var addmax=maxadd.max();
   var maxread=readmax.max();
   readNumAndNewadd(addmax,maxread,timelist,read,newadd) 
});
//资源类别比
 newaddResourceReading(function(data){
 	vue.$data.resourceTotal=data.total;
	var rlist=[];
	var color=['#e64e4e','#e65d02','#e69202','#e6c74e','#00bf00','#00bfbc','#02a1e6','#026ce6','#514ee6','#814ee6','#b64ee6']
	for(var i=0;i<data.data.length;i++){
		if(data.data[i].resourceTags!=null && data.data[i].resourceTags!='null'){
			rlist.push({
                   value: data.data[i].count,
                   name: data.data[i].resourceTags,
                   itemStyle: {
                       normal: {
                           color: color[i]
                       }
                   }
			})
		}
	};
 resourceListClassicTable(rlist);
});

//在线趋势
onlineStatistics(function(data){
//		console.log(data);
		vue.$data.teachNum=data.teachNum;
		vue.$data.studentNum=data.studentNum;
		var timeList=[];
		var today=[];
		var yestoday=[];
		for(var i=0;i<data.todayData.length;i++){
			timeList.push(data.todayData[i].hour+':'+'00');
			today.push(0);
			yestoday.push(0);
		}
		for(var j=0;j<data.yesdata.length;j++){
			timeList.push(data.yesdata[j].hour+':'+'00');
			today.push(0);
			yestoday.push(0);
		}
		var arr=unique(timeList);
		var time=getList(arr);
		for(var z=0;z<time.length;z++){
			for(var i=0;i<data.todayData.length;i++){
				var timeinfor=data.todayData[i].hour+':'+'0';
			   if(timeinfor==time[z]){
			   	 today[i]=data.todayData[i].count;
			   }
			}
			for(var j=0;j<data.yesdata.length;j++){
				var timeinfor=data.yesdata[j].hour+':'+'0';
				if(timeinfor==time[z]){
			   	  yestoday[j]=data.yesdata[j].count;
			    }
			}
		}
		onlineTrend(time,today,yestoday);
});
//地图操作
var cityInfor=[];
schoolStatistics(function(data){
//	console.log(data);
	for(var i=0;i<data.cityData.length;i++){
		cityInfor.push({
			name:data.cityData[i].cityID.split("市")[0],
			value:[
			 {
			 	name:"教师",
			 	value:data.cityData[i].noticeCount
			 },
			 {
			 	name:"学生",
			 	value:data.cityData[i].count
			 }
			]
		})
	};
	SetDateMap(cityInfor);	
});

var timer='';
function SetDateMap(cityInfor){
	
	recentlyLogin(function(data){
//			console.log(data);
			var infor=[];
			for(var i=0;i<data.data.length;i++){
				infor.push({
					name:data.data[i].cityNme.split("市")[0],
					value:['100',data.data[i].name]
				})
			};
			var num=0;
        var inforInfor=[];
		mapInfor(cityInfor,infor);
		clearInterval(timer);
		timer=setInterval(function(){
			SetDateMap(cityInfor);
		},infor.length*3000+1);
		
	});
}

