//今日昨日的访问量
function viewPage(){
	pageView(function(data){
		layer.closeAll('loading');
	console.log(data);
	var yesdata=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var todaydata=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	if(data.yesData);
	var timeList=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	for(var z=0;z<timeList.length;z++){
		for(var i=0;i<data.yesData.length;i++){
			if(data.yesData[i].hour==timeList[z]){
				yesdata[z]=data.yesData[i].count;
			}
		}
		for(var j=0;j<data.todayData.length;j++){
			if(data.todayData[j].hour==timeList[z]){
				todaydata[z]=data.todayData[j].count;
			}
		}
	}
	yesToday(yesdata,todaydata,timeList);
	var today=new Date().getDate();
	for(var i=0;i<data.data2.length;i++){
  		if(data.data2[i].type==1){
  			if(data.data2[i].day==today){
  				vue.$data.pcToday=data.data2[i].count;
  			}else{
  				vue.$data.pcYesday=data.data2[i].count;
  			}
  		}else if(data.data2[i].type==2){
  			if(data.data2[i].day==today){
  				vue.$data.wxToday=data.data2[i].count;
  			}else{
  				vue.$data.wxYesday=data.data2[i].count;
  			}
  		}else if(data.data2[i].type==3){
  			if(data.data2[i].day==today){
  				vue.$data.andToday=data.data2[i].count;
  			}else{
  				vue.$data.andYesday=data.data2[i].count;
  			}
  		}else if(data.data2[i].type==4){
  			if(data.data2[i].day==today){
  				vue.$data.iosToday=data.data2[i].count;
  			}else{
  				vue.$data.iosYesday=data.data2[i].count;
  			}
  		}
  		if(data.data2[i].day==today){
  			vue.$data.todayTotal+=data.data2[i].count;
  		}else{
  			vue.$data.yesTotal+=data.data2[i].count;
  		}
  	}
	
   });
}
viewPage();
//选择时间获取访问量
function viewPageTwo(start){
	pageViewTwo(start,function(data){
		layer.closeAll('loading');
	console.log(data);
	var yesdata=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var todaydata=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	if(data.yesData);
	var timeList=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	for(var z=0;z<timeList.length;z++){
		for(var i=0;i<data.yesData.length;i++){
			if(data.yesData[i].hour==timeList[z]){
				yesdata[z]=data.yesData[i].count;
			}
		}
		for(var j=0;j<data.todayData.length;j++){
			if(data.todayData[j].hour==timeList[z]){
				todaydata[z]=data.todayData[j].count;
			}
		}
	}
	yesToday(yesdata,todaydata,timeList);
	var today=start;
	for(var i=0;i<data.data2.length;i++){
		if(data.data2[i].day>9){
			data.data2[i].day=data.data2[i].day
		}else{
			data.data2[i].day='0'+data.data2[i].day;
		}
		var time=data.data2[i].year+'-'+data.data2[i].month+'-'+data.data2[i].day
  		if(data.data2[i].type==1){
  			if(time==today){
  				vue.$data.pcToday=data.data2[i].count;
  			}else{
  				vue.$data.pcYesday=data.data2[i].count;
  			}
  		}else if(data.data2[i].type==2){
  			if(time==today){
  				vue.$data.wxToday=data.data2[i].count;
  			}else{
  				vue.$data.wxYesday=data.data2[i].count;
  			}
  		}else if(data.data2[i].type==3){
  			if(time==today){
  				vue.$data.andToday=data.data2[i].count;
  			}else{
  				vue.$data.andYesday=data.data2[i].count;
  			}
  		}else if(data.data2[i].type==4){
  			if(time==today){
  				vue.$data.iosToday=data.data2[i].count;
  			}else{
  				vue.$data.iosYesday=data.data2[i].count;
  			}
  		}
  		if(time==today){
  			vue.$data.todayTotal+=data.data2[i].count;
  		}else{
  			vue.$data.yesTotal+=data.data2[i].count;
  		}
  	}
	
   });
}
Date.prototype.getQuarter = function() {
	    var monthInfor='';
        var month = this.getMonth();
        if(month  < 3) {
        	monthInfor={
        		name:'第一季度',
        		index:0,
        		value:[1,2,3]
        	}
        	return monthInfor;
        }else if(month < 6) {
        	monthInfor={
        		name:'第二季度',
        		index:1,
        		value:[4,5,6]
        	}
        	return monthInfor;
        }else if(month <9) {
        	monthInfor={
        		name:'第三季度',
        		index:2,
        		value:[7,8,9]
        	}
        	return monthInfor;
        }else if(month <12) {
        	monthInfor={
        		name:'第四季度',
        		index:3,
        		value:[10,11,12]
        	}
        	return monthInfor;
        }
};
//季度访问量
function visitsQuarter(numIndex){
	quarterlyVisits(numIndex,function(data){
//	console.log(data);
	var month=[];
	var enddata=[
	   {value:data.pc, name:'PC端'},
       {value:data.wechat, name:'公众号'},
       {value:data.android, name:'安卓端'},
       {value:data.ios, name:'IOS端'},
	];
	var tomonth=new Date().getMonth()+1;
	var quarterIn=new Date().getQuarter();
	if(numIndex==-1){
		
	}else{
		if(quarterIn.index==3){
			quarterIn={
        		name:'第三季度',
        		index:2,
        		value:[7,8,9]
        	}
		}else if(quarterIn.index==2){
			quarterIn={
        		name:'第二季度',
        		index:1,
        		value:[4,5,6]
        	}
		}else if(quarterIn.index==1){
			quarterIn={
        		name:'第一季度',
        		index:0,
        		value:[1,2,3]
        	}
		}else if(quarterIn.index==0){
			quarterIn=new Date().getQuarter();
		}
	}
	vue.$data.jidu=quarterIn.name;
	for(var i=0;i<quarterIn.value.length;i++){
		if(quarterIn.value[i]==tomonth){
			month.push({
				value:0, 
				name:'本月',
				selected:true
			});
		}else{
			month.push({
				value:0, 
				name:quarterIn.value[i]+'月',
			});
		}
	};
	for(j in data.monthData){
//		console.log(j);
		for(var z=0;z<quarterIn.value.length;z++){
//			console.log(quarterIn.value[z]);
			if(j==quarterIn.value[z]){
				month[z].value=data.monthData[j];
			}
		}
	}
//	console.log(month);
	quarterlyVisitsSetting(month,enddata);
	
});
}
visitsQuarter(-1);
//新增与登录
function loginAddNew(){
	newAddActivityLogin(function(data){
	console.log(data);
	var month=[];
	var add=[];
	var activity=[];
    if(data.activeData.length>data.newAddData.length){
    	for(var i=0;i<data.activeData.length;i++){
    		month.push(data.activeData[i].year+'年'+data.activeData[i].month+'月');
    		add.push(data.activeData[i].count);
    	}
    	for(var j=0;j<data.newAddData.length;j++){
    		activity.push(data.newAddData[j].count);
    	}
    }else if(data.activeData.length<data.newAddData.length){
    	for(var i=0;i<data.newAddData.length;i++){
    		month.push(data.newAddData[i].year+'年'+data.newAddData[i].month+'月');
    		activity.push(data.newAddData[i].count);
    	}
    	for(var j=0;j<data.activeData.length;j++){
    		add.push(data.activeData[j].count);
    	}
    }
    Array.prototype.max = function(){ 
		return Math.max.apply({},this) 
	} 
    var newmax=add.max();
    var actmax=activity.max();
//  console.log(newmax);
//  console.log(actmax);
    newAdd(month,add,activity,newmax,actmax);
    var loginMonth=[];
    var pc=[];
    var wx=[];
    var and=[];
    var ios=[];
    for(l in data.loginData){
    	if(l==1){
    		for(var k=0;k<data.loginData['1'].length;k++){
		    	loginMonth.push(data.loginData['1'][k].year+'年'+data.loginData['1'][k].month+'月');
		    	pc.push(data.loginData['1'][k].count);
		    }
    	}else if(l==2){
    		for(var k=0;k<data.loginData['2'].length;k++){
		    	loginMonth.push(data.loginData['2'][k].year+'年'+data.loginData['2'][k].month+'月');
		    	wx.push(data.loginData['2'][k].count);
		    }
    	}else if(l==3){
    		for(var k=0;k<data.loginData['3'].length;k++){
		    	loginMonth.push(data.loginData['3'][k].year+'年'+data.loginData['3'][k].month+'月');
		    	and.push(data.loginData['3'][k].count);
		    }
    	}else if(l==4){
    		for(var k=0;k<data.loginData['4'].length;k++){
		    	loginMonth.push(data.loginData['4'][k].year+'年'+data.loginData['4'][k].month+'月');
		    	ios.push(data.loginData['4'][k].count);
		    }
    	}
    }    
    loginStatus(loginMonth,pc,wx,and,ios);
    vue.$data.usercount=data.userCount;
});
}
loginAddNew();

 newaddResourceReading(function(data){
//	console.log(data);
	vue.$data.resourceTotal=data.total;
	vue.$data.newadd=data.monthAdd;
	vue.$data.list=data.data;
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
	for(var i=0;i<data.data.length;i++){
		if(data.data[i].resourceTags!=null && data.data[i].resourceTags!='null'){
			rlist.push({
				 value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
			})
		}
	};
 resourceTotalTong(rlist);
});
