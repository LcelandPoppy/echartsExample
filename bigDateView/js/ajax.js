var http='http://192.168.31.178:80'

//获取阅读量和最新的资源
function readNewResource(back){
	$.ajax({
		type:"get",
		url:http+'/getResourceCount4NewAndRead',
		success:function(d){
			back(d);
		},
		error:function(e){
			console.log(e);
		}
	})
}

//访问量概况
function pageView(back){
	$.ajax({
		type:"get",
		url:http+"/getAccessCountByDate",
		data:{
			flag:1
		},
		success:function(d){
			back(d);
		},
		error:function(e){
			console.log(e);
		}
	})
}
//访问量概况
function pageViewTwo(start,back){
	$.ajax({
		type:"get",
		url:http+"/getAccessCountByDate",
		data:{
			flag:1,
			startTime:start
		},
		success:function(d){
			back(d);
		},
		error:function(e){
			console.log(e);
		}
	})
}

//各个端访问量统计
function differentEndDate(back){
	$.ajax({
		type:"get",
		url:http+"/getAccessCountByType",
		success:function(d){
			back(d);
		},
		error:function(e){
			console.log(e);
		}
	})
}
//获取季度访问量
function quarterlyVisits(last,back){
	if(last!='-1'){
		$.ajax({
			type:"get",
			url:http+"/getQuarterAccessCount",
			data:{
				last:last
			},
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
	}else{
		$.ajax({
			type:"get",
			url:http+"/getQuarterAccessCount",
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
	}
}


//获取新增和活跃人数以及各个端登录统计
function newAddActivityLogin(back){
	$.ajax({
			type:"get",
			url:http+"/getLoginCount",
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
}

//最新资源总数
function newaddResourceReading(back){
	$.ajax({
			type:"get",
			url:http+"/getAllResourceGroupCateId",
			data:{
				newAdd:1
			},
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
};

//获取资源列表
function getReaourceList(back){
    $.ajax({
        type:'get',
        url:http+"/getNewResource",
        success:function(d){
            back(d);
        },
        error:function(e){
            console.log(e);
        }
    })
};

//响应时间的数据
function responseTime(back){
//	$.ajax({
//			type:"get",
//			url:http+"/getResponseTime",
//			success:function(d){
//				console.log(d);
//				back(d);
//			},
//			error:function(e){
//				console.log(e);
//			}
//		})
	$.ajax({
                url:http+"/getResponseTime",
                dataType:'text',
                success:function (data) {
                    var json = eval('('+data+')')
                    back(json);
                },
                error:function () {
                   
                }
            })
}
//响应时间的数据
function responseTimeTwo(start,end,back){
	$.ajax({
                url:http+"/getResponseTime",
                dataType:'text',
                data:{
                	startTime:start,
                	endTime:end
                },
                success:function (data) {
                    var json = eval('('+data+')')
                    back(json);
                },
                error:function () {
                   
                }
            })
}
//获取所有学校以及所有教师以及学生
function schoolStatistics(back){
	$.ajax({
			type:"get",
			url:http+"/getAllWeChatPublic",
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
};
//获取在线统计
function onlineStatistics(back){
	$.ajax({
			type:"get",
			url:http+"/getOnlineCount",
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
}
//获取本月，本日，教师，学生的访问量
function monthDayAccess(back){
	$.ajax({
			type:"get",
			url:http+"/getAccessCountByRole",
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
};
//最近登录的30个学生
function recentlyLogin(back){
	$.ajax({
			type:"get",
			url:http+"/getNewLoginStudent",
			success:function(d){
				back(d);
			},
			error:function(e){
				console.log(e);
			}
		})
}
