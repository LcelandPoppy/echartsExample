//将数字转化成金额格式
function outputmoney(number) {
    if (isNaN(number) || number == "") return "";
    number = Math.round(number * 100) / 100;
    if (number < 0)
        return '-' + outputdollars(Math.floor(Math.abs(number) - 0) + '') + outputcents(Math.abs(number) - 0);
    else
        return outputdollars(Math.floor(number - 0) + '') + outputcents(number - 0);
}
//格式化金额
function outputdollars(number) {
    if (number.length <= 3)
        return (number == '' ? '0' : number);
    else {
        var mod = number.length % 3;
        var output = (mod == 0 ? '' : (number.substring(0, mod)));
        for (i = 0; i < Math.floor(number.length / 3); i++) {
            if ((mod == 0) && (i == 0))
                output += number.substring(mod + 3 * i, mod + 3 * i + 3);
            else
                output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
        }
        return (output);
    }
}
function outputcents(amount) {
    amount = Math.round(((amount) - Math.floor(amount)) * 100);
    return (amount < 10 ? '.0' + amount : '.' + amount);
};
//时间排序
function getList(arr) {
    for(var i=0;i<arr.length;i++){
        var arry=arr[i].split(':')
        var s=(arry[0]<10?('0'+arry[0]):arry[0])
        var g=(arry[1]<10?('0'+arry[1]):arry[1])
        arr[i]=(s+':'+g)
    }
//  console.log(arr);

    arr=arr.sort()
    for(var i=0;i<arr.length;i++){
        var arry=arr[i].split(':')
        arr[i]=(parseFloat(arry[0])+':'+parseFloat(arry[1]))
    }
    return arr
}
//月份排序
function getmonth(arr) {
    for(var i=0;i<arr.length;i++){
        var arry=arr[i].split('-')
        var s=(arry[1]<10?('0'+arry[1]):arry[1])
        var g=(arry[2]<10?('0'+arry[2]):arry[2])
        arr[i]=(arry[0]+'-'+s+'-'+g)
    }
//  console.log(arr);

    arr=arr.sort()
    for(var i=0;i<arr.length;i++){
        var arry=arr[i].split('-')
        arr[i]=arry[0]+'-'+(parseFloat(arry[1])+'-'+parseFloat(arry[2]))
    }
    return arr
}
//数组的最大值
 Array.prototype.max = function(){ 
		return Math.max.apply({},this) 
};
/*获取前一天日期*/
function getPrevDay(d) {
    d = new Date(d);
    d = +d - 1000 * 60 * 60 * 24;
    d = new Date(d);
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    var d = d.getDate();
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }
    return y + "-" + m + "-" + d;
}
/*获取当天日期*/
function getStartDay() {
    var mydate = new Date();
    var y = mydate.getFullYear();
    var m = mydate.getMonth() + 1;
    var d = mydate.getDate();
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }
    return y + "-" + m + "-" + d;
}
//昨天今天的访问量
function yesToday(yesData,today,timeList){
var domtop = document.getElementById("top");
var myChart = echarts.init(domtop);
var app = {};
option = null;
option = {
    title:'',
    tooltip: {
        trigger: 'axis',
        formatter:'{b}时<br/>{a0}: {c0}<br />{a1}: {c1}'
    },
    toolbox: {
        show: false,
    },
    xAxis:  {
        type: 'category',
        name:'时间',
        data:timeList
    },
    yAxis: {
        type: 'value',
        // min:-35,
        name:'访问量',
//      axisLabel: {
//          formatter: '{value} %'
//      },
        axisLine: { // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
            show: false,
        },
    },
    series: [
          {
            name:'今日访问量',
            type:'line',
            smooth: true,
            lineStyle:{
                type:'solid',
                color:'#037AFF'
            },
            data:today,
            markPoint: {
                label:{
                    show:true,
                    formatter:'{c}'
                },
            },
        },
        {
            name:'昨天访问量',
            smooth: true,
            lineStyle:{
                type:'dotted',
                color:'#999'
            },
            type:'line',
            markPoint: {
                label:{
                    formatter:'{c}'
                },
            },
            data:yesData
        },
    ]
};
if (option && typeof option === "object") {
     myChart.setOption(option, true);   
};
}


//新增
function newAdd(month,add,activity,newmax,actmax){
	//新增
var domadd = document.getElementById("newAdd");
var myChart = echarts.init(domadd);
var app = {};
option = null;
option = {
	color:['#026CE6','#E65D02'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data:['新增人数','活跃用户']
    },
    xAxis: [
        {
            type: 'category',
            data: month ,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '新增人数/人',
            min: 0,
            max: newmax,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
	            lineStyle: {
	                color: '#026CE6'
	            }
	        },
        },
        {
            type: 'value',
            name: '活跃用户/人',
            min: 0,
            max: actmax,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
	            lineStyle: {
	                color: '#E65D02'
	            }
	        },
        }
    ],
    series: [
        {
            name:'新增人数',
            type:'line',
            lineStyle: {
            	color:'#026CE6'
            },
            data:add,
        },
        {
            name:'活跃用户',
            type:'line',
            yAxisIndex: 1,
            lineStyle: {
            	color:'#E65D02'
            },
            data:activity
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
}
//季度访问量
function quarterlyVisitsSetting(month,enddata){
	//季度总览
var domright = document.getElementById("right");
var myChart = echarts.init(domright);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a}{b}: {c}  ({d}%)"
    },
    series: [
        {
            name:'',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            color:['#B42200','#005DB4','#00B411'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:month
//          data:[
//              {value:335, name:'本月', selected:true},
//              {value:679, name:'7月'},
//              {value:1548, name:'八月'}
//          ]
        },
        {
            name:'',
            type:'pie',
            radius: ['50%', '65%'],
            color:['#026CE6','#02A1E6','#E69202','#E65D02'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}{hr|}  {b|{b}：}{c} ',
                    backgroundColor: '#fff',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 1,
                    rich: {
                        b: {
                            fontSize: 14,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            borderRadius: 1
                        }
                    }
                }
            },
            data:enddata
//          data:[
//              {value:335, name:'PC端'},
//              {value:310, name:'公众号'},
//              {value:234, name:'安卓端'},
//              {value:135, name:'IOS端'},
//          ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
};

//登录
function loginStatus(month,pc,wx,and,ios){
	//登录
var domlogin = document.getElementById("userlogin");
var myChart = echarts.init(domlogin);
var app = {};
option = null;
var areaStyle = {
    silent: false,
    itemStyle: {
        normal: {
            color: 'rgba(241, 28, 93, 0.05)'
        }
    }
}
var option = {
    backgroundColor: '#fff',
    color: ['#026CE6', '#02A1E6', '#E69202', '#E65D02'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: { //图表的位置
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
        axisLine: { // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            textStyle:{
            	color:'#000'
            }
        },
    }],
    xAxis: [{
        type: 'category',
        data: month
    }],
    series: [{
            name: 'PC端',
            type: 'bar',
            stack: '总量',
            barWidth: '30px',
            data: pc,
            markArea: areaStyle
        },
        {
            name: '公众号',
            type: 'bar',
            stack: '总量',
            data: wx,
            markArea: areaStyle
        },
        {
            name: '安卓端',
            type: 'bar',
            stack: '总量',
            data: and,
            markArea: areaStyle
        },
        {
            name: 'IOS端',
            type: 'bar',
            stack: '总量',
            data: ios,
            markArea: areaStyle
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
};

//资源总数
function resourceTotalTong(list){
	//资源总数
var domrose = document.getElementById("rose");
var myChart = echarts.init(domrose);
var app = {};
option = null;

   option = {
       backgroundColor: '#fff',
       tooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b} : {c}件"
       },
       calculable: true,
       series: [{
           name: '资源总数',
           type: 'pie',
           //起始角度，支持范围[0, 360]
           startAngle: 0,
           //饼图的半径，数组的第一项是内半径，第二项是外半径
           radius: [41, 200],
           //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
           center: ['50%', '10%'],
           //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
           // 'radius' 面积展现数据的百分比，半径展现数据的大小。
           //  'area' 所有扇区面积相同，仅通过半径展现数据大小
           roseType: 'area',
           //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
           avoidLabelOverlap: false,
           label: {
               normal: {
                   show: true,
                   formatter: '{c}'
               },
               emphasis: {
                   show: true
               }
           },
           labelLine: {
               normal: {
                   show: true,
                   length2: 1,
               },
               emphasis: {
                   show: true
               }
           },
           data: list
       }]
   };
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
}


//响应时间
function reposeTime(pc,wx,and,ios,timelist){
	//响应时间
var dom = document.getElementById("timeResponse");
var myChart = echarts.init(dom);
var app = {};
option = null;
			option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '2.5%',
        right: '2.5%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
    xAxis: [
        {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#0E2A43'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#D5CBE8'
            }
        },
        axisTick: {
            show: false
        },
        data: timelist
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#d9d9d9'
            }
        },
        axisTick: {
            show: false
        },
        position: 'bottom',
        offset: 20
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                fontSize: 14,
                color: '#D5CBE8'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: 'PC端',
        type: 'line',
        smooth: true,
        stack: '总量',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        animationDelay: 2000,
        animationDuration: 1000,
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#A604F1' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#A604F1' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(166,4,241, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(166,4,241, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(166,4,241)',
                borderColor: 'rgba(166,4,241,0.27)',
                borderWidth: 12

            }
        },
        data: pc
    }, {
        name: '公众号',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        stack: '总量',
        symbolSize: 5,
        animationDelay: 1000,
        animationDuration: 1000,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#03B5FF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#03B5FF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(3,181,255, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(3,181,255, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(3,181,255)',
                borderColor: 'rgba(3,181,255,0.2)',
                borderWidth: 12

            }
        },
        data: wx
    }, {
        name: '安卓端',
        type: 'line',
        stack: '总量',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        animationDelay: 0,
        animationDuration: 1000,
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#FFA303' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FFA303' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,163,3, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255,163,3, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(255,163,3)',
                borderColor: 'rgba(255,163,3,0.2)',
                borderWidth: 12
            }
        },
        data: and
    }, {
        name: 'IOS端',
        type: 'line',
        stack: '总量',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        animationDelay: 3000,
        animationDuration: 1000,
        lineStyle: {
            normal: {
                width: 2,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#FF6803' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FF6803' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,104,3, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255,104,3, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(255,104,3)',
                borderColor: 'rgba(255,104,3,0.2)',
                borderWidth: 12
            }
        },
        data: ios
    },]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
};

//方法响应
function functionResponseTime(time,data){
	var doml = document.getElementById("functionContrast");
var myChart = echarts.init(doml);
var app = {};
option = null;
option = {
    color: ['#e64e4e','#e65d02','#e69202','#e6c74e','#00bf00','#00bfbc','#02a1e6','#026ce6','#514ee6','#814ee6','#b64ee6'],
    tooltip: {
        trigger: 'axis',
        //formatter: "{b} <br> 合格率: {c}%"
    },
    legend: {
        data: ['旅游运输', '班线运输', '危险品', '普货']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '时间',
        boundaryGap: false,
        data:time
    },
    yAxis: {
        type: 'value',
        name: '响应时间',
        axisLine: { // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            textStyle:{
            	color:'#000'
            }
        },
    },
    series: data
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
};


//阅读量和新增
function readNumAndNewadd(maxadd,readmax,mothTime,read,newadd){
	//资源新增，
var domt = document.getElementById("compare");
var myChart = echarts.init(domt);
var app = {};
option = null;
option = {
	color:['#026CE6','#E65D02'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        data:['新增资源','阅读量']
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
	            lineStyle: {
	                color: '#d9d9d9'
	            },
	            textStyle: {
	                fontSize: 14,
	                color: '#000'
	            }
	        },
	        
            data: mothTime
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '新增资源/件',
            min: 0,
            max: maxadd,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
	            lineStyle: {
	                color: '#d9d9d9'
	            },
	            textStyle: {
	                fontSize: 14,
	                color: '#000'
	            }
	        },
	        splitLine: {
                show: false,
             }
	    },
        {
            type: 'value',
            name: '阅读量',
            min: 0,
            max: readmax,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
	            lineStyle: {
	                color: '#d9d9d9'
	            },
	            textStyle: {
	                fontSize: 14,
	                color: '#000'
	            }
	        },
	        splitLine: {
                show: false,
             }
        }
    ],
    series: [
        {
            name:'新增资源',
            type:'line',
            lineStyle: {
            	color:'#026CE6'
            },
            data:newadd,
            smooth: true,
        },
        {
            name:'阅读量',
            type:'line',
            yAxisIndex: 1,
            lineStyle: {
            	color:'#E65D02'
            },
            data:read,
            smooth: true,
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
}
//去重
function unique(arr){
　　var res = [arr[0]];
　　for(var i=1;i<arr.length;i++){
　　　　var repeat = false;
　　　　for(var j=0;j<res.length;j++){
　　　　　　if(arr[i] == res[j]){
　　　　　　　　repeat = true;
　　　　　　　　break;
　　　　　　}
　　　　}
　　　　if(!repeat){
　　　　　　res.push(arr[i]);
　　　　}
　　}
　　return res;
};

//资源类别表
function resourceListClassicTable(data){
	//资源类别表
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
//  toolbox: {
//      show : true,
//      feature : {
//          mark : {show: true},
//          dataView : {show: false, readOnly: false},
//          magicType : {
//              show: true,
//              type: ['pie', 'funnel']
//          },
//          restore : {show: false},
//          saveAsImage : {show: false}
//      }
//  },
    calculable : true,
    series : [
        {
            name:'总资源占比',
            type:'pie',
            radius : [20, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:data
        },

    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};
}


//在线趋势
function onlineTrend(timeList,toay,yesday){
var today=getStartDay();
var yestoday=getPrevDay(today);
//console.log(today);
//console.log(yestoday);
var domu = document.getElementById("online");
var myChart = echarts.init(domu);
var app = {};
option = null;
option = {
    // backgroundColor:'#FAFBFE',
   
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#Fff',
        textStyle:{
            color:'#3B53A2',
            fontSize:12,
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(205,217,240);',
        borderColor:'#DAE1F4',
        borderWidth:1,
        formatter: "{b} <br/>{a0} : {c0}<br/>{a1} : {c1}"
    },
    legend: {
        data:[today,yestoday],
        textStyle:{
            color:'#3B53A2'
        },
        inactiveColor:'#CDD9F0',
        top:20,
    },
    grid: {
        left:'1%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: timeList,
    
        axisLabel: {
              color: '#3B53A2',
              fontSize: '11',
              interval: 0,
          },
          axisLine: {
            lineStyle: {
              color: '#3B53A2'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#3B53A2'
            }
          }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
              color: '#011D69',
              fontSize: '11',
              interval: 0,
              formatter: '{value}元'
          },
          axisLine: {
            lineStyle: {
              color: '#011D69'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#CDD9F0'
            }
          }
    },
    series: [
        {
            name:today,
            type:'line',
             lineStyle:{
             	type:'dotted',
                color:'#0F74DA' //连线颜色
            },
            itemStyle:
            {
                color:'#0F74DA' //连线颜色
            },
            smooth: true,
            data:toay
        },
        {
            name:yestoday,
            type:'line',
            lineStyle:{
                color:'#FF3663' //连线颜色
            },
            itemStyle:
            {
                color:'#FF3663' //连线颜色
            },
            smooth: true,
            data:yesday
        },
       
      
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
};
//地图信息
function mapInfor(addressDate,infor){
	//地图设置
var dom = document.getElementById("map");
		var myChartl = echarts.init(dom);
		var app = {};
		optionl = null;
		var data = [];
		
		var geoCoordMap = {
    "海门":[121.15,31.89],
    "鄂尔多斯":[109.781327,39.608266],
    "招远":[120.38,37.35],
    "舟山":[122.207216,29.985295],
    "齐齐哈尔":[123.97,47.33],
    "盐城":[120.13,33.38],
    "赤峰":[118.87,42.28],
    "青岛":[120.33,36.07],
    "乳山":[121.52,36.89],
    "金昌":[102.188043,38.520089],
    "泉州":[118.58,24.93],
    "莱西":[120.53,36.86],
    "日照":[119.46,35.42],
    "胶南":[119.97,35.88],
    "南通":[121.05,32.08],
    "拉萨":[91.11,29.97],
    "云浮":[112.02,22.93],
    "梅州":[116.1,24.55],
    "文登":[122.05,37.2],
    "上海":[121.48,31.22],
    "攀枝花":[101.718637,26.582347],
    "威海":[122.1,37.5],
    "承德":[117.93,40.97],
    "厦门":[118.1,24.46],
    "汕尾":[115.375279,22.786211],
    "潮州":[116.63,23.68],
    "丹东":[124.37,40.13],
    "太仓":[121.1,31.45],
    "曲靖":[103.79,25.51],
    "烟台":[121.39,37.52],
    "福州":[119.3,26.08],
    "瓦房店":[121.979603,39.627114],
    "即墨":[120.45,36.38],
    "抚顺":[123.97,41.97],
    "玉溪":[102.52,24.35],
    "张家口":[114.87,40.82],
    "阳泉":[113.57,37.85],
    "莱州":[119.942327,37.177017],
    "湖州":[120.1,30.86],
    "汕头":[116.69,23.39],
    "昆山":[120.95,31.39],
    "宁波":[121.56,29.86],
    "湛江":[110.359377,21.270708],
    "揭阳":[116.35,23.55],
    "荣成":[122.41,37.16],
    "连云港":[119.16,34.59],
    "葫芦岛":[120.836932,40.711052],
    "常熟":[120.74,31.64],
    "东莞":[113.75,23.04],
    "河源":[114.68,23.73],
    "淮安":[119.15,33.5],
    "泰州":[119.9,32.49],
    "南宁":[108.33,22.84],
    "营口":[122.18,40.65],
    "惠州":[114.4,23.09],
    "江阴":[120.26,31.91],
    "蓬莱":[120.75,37.8],
    "韶关":[113.62,24.84],
    "嘉峪关":[98.289152,39.77313],
    "广州":[113.23,23.16],
    "延安":[109.47,36.6],
    "太原":[112.53,37.87],
    "清远":[113.01,23.7],
    "中山":[113.38,22.52],
    "昆明":[102.73,25.04],
    "寿光":[118.73,36.86],
    "盘锦":[122.070714,41.119997],
    "长治":[113.08,36.18],
    "深圳":[114.07,22.62],
    "珠海":[113.52,22.3],
    "宿迁":[118.3,33.96],
    "咸阳":[108.72,34.36],
    "铜川":[109.11,35.09],
    "平度":[119.97,36.77],
    "佛山":[113.11,23.05],
    "海口":[110.35,20.02],
    "江门":[113.06,22.61],
    "章丘":[117.53,36.72],
    "肇庆":[112.44,23.05],
    "大连":[121.62,38.92],
    "临汾":[111.5,36.08],
    "吴江":[120.63,31.16],
    "石嘴山":[106.39,39.04],
    "沈阳":[123.38,41.8],
    "苏州":[120.62,31.32],
    "茂名":[110.88,21.68],
    "嘉兴":[120.76,30.77],
    "长春":[125.35,43.88],
    "胶州":[120.03336,36.264622],
    "银川":[106.27,38.47],
    "张家港":[120.555821,31.875428],
    "三门峡":[111.19,34.76],
    "锦州":[121.15,41.13],
    "南昌":[115.89,28.68],
    "柳州":[109.4,24.33],
    "三亚":[109.511909,18.252847],
    "自贡":[104.778442,29.33903],
    "吉林":[126.57,43.87],
    "阳江":[111.95,21.85],
    "泸州":[105.39,28.91],
    "西宁":[101.74,36.56],
    "宜宾":[104.56,29.77],
    "呼和浩特":[111.65,40.82],
    "成都":[104.06,30.67],
    "大同":[113.3,40.12],
    "镇江":[119.44,32.2],
    "桂林":[110.28,25.29],
    "张家界":[110.479191,29.117096],
    "宜兴":[119.82,31.36],
    "北海":[109.12,21.49],
    "西安":[108.95,34.27],
    "金坛":[119.56,31.74],
    "东营":[118.49,37.46],
    "牡丹江":[129.58,44.6],
    "遵义":[106.9,27.7],
    "绍兴":[120.58,30.01],
    "扬州":[119.42,32.39],
    "常州":[119.95,31.79],
    "潍坊":[119.1,36.62],
    "重庆":[106.54,29.59],
    "台州":[121.420757,28.656386],
    "南京":[118.78,32.04],
    "滨州":[118.03,37.36],
    "贵阳":[106.71,26.57],
    "无锡":[120.29,31.59],
    "本溪":[123.73,41.3],
    "克拉玛依":[84.77,45.59],
    "渭南":[109.5,34.52],
    "马鞍山":[118.48,31.56],
    "宝鸡":[107.15,34.38],
    "焦作":[113.21,35.24],
    "句容":[119.16,31.95],
    "北京":[116.46,39.92],
    "徐州":[117.2,34.26],
    "衡水":[115.72,37.72],
    "包头":[110,40.58],
    "绵阳":[104.73,31.48],
    "乌鲁木齐":[87.68,43.77],
    "枣庄":[117.57,34.86],
    "杭州":[120.19,30.26],
    "淄博":[118.05,36.78],
    "鞍山":[122.85,41.12],
    "溧阳":[119.48,31.43],
    "库尔勒":[86.06,41.68],
    "安阳":[114.35,36.1],
    "开封":[114.35,34.79],
    "济南":[117,36.65],
    "德阳":[104.37,31.13],
    "温州":[120.65,28.01],
    "九江":[115.97,29.71],
    "邯郸":[114.47,36.6],
    "临安":[119.72,30.23],
    "兰州":[103.73,36.03],
    "沧州":[116.83,38.33],
    "临沂":[118.35,35.05],
    "南充":[106.110698,30.837793],
    "天津":[117.2,39.13],
    "富阳":[119.95,30.07],
    "泰安":[117.13,36.18],
    "诸暨":[120.23,29.71],
    "郑州":[113.65,34.76],
    "哈尔滨":[126.63,45.75],
    "聊城":[115.97,36.45],
    "芜湖":[118.38,31.33],
    "唐山":[118.02,39.63],
    "平顶山":[113.29,33.75],
    "邢台":[114.48,37.05],
    "德州":[116.29,37.45],
    "济宁":[116.59,35.38],
    "荆州":[112.239741,30.335165],
    "宜昌":[111.3,30.7],
    "义乌":[120.06,29.32],
    "丽水":[119.92,28.45],
    "洛阳":[112.44,34.7],
    "秦皇岛":[119.57,39.95],
    "株洲":[113.16,27.83],
    "石家庄":[114.48,38.03],
    "莱芜":[117.67,36.19],
    "常德":[111.69,29.05],
    "保定":[115.48,38.85],
    "湘潭":[112.91,27.87],
    "金华":[119.64,29.12],
    "岳阳":[113.09,29.37],
    "长沙":[113,28.21],
    "衢州":[118.88,28.97],
    "廊坊":[116.7,39.53],
    "菏泽":[115.480656,35.23375],
    "合肥":[117.27,31.86],
    "武汉":[114.31,30.52],
    "大庆":[125.03,46.58]
};
var stuTeachNum=function(datal){
//	console.log(datal);
	var res = [];
    for (var i = 0; i < datal.length; i++) {
        var geoCoord = geoCoordMap[datal[i].name];
        if (geoCoord) {
            res.push({
                name: datal[i].name,
                value: geoCoord.concat(datal[i].value)
            });
        }
    }
    return res;
};
var convertData = function (data) {
//	console.log(data);
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var geoCoord = geoCoordMap[data[i].name];
				if (geoCoord) {
					res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value)
					});
				}
			}
			return res;
		};
var max = 480,
    min = 9; // todo
var maxSize4Pin = 100,
    minSize4Pin = 20;
optionl = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: { 
        text: '',
        subtext: '',
        sublink: '',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return '<div><i style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#FF3F3F;margin-right:10px;"></i><span>'+
            params.name + 
            ' </span></div><div style="margin-left:5px;font-family:\'numbersettting\'">' 
            + params.value[2].name+
            ':'+params.value[2].value+
            '</div><div style="margin-left:5px;font-family:\'numbersettting\'">'+
            params.value[3].name+
            ':'+params.value[3].value+
            '</div>';
        },
        padding: [5, 10],
        axisPointer: {
                type: 'cross'
        },
    },
    visualMap: {
//      min: 0,
//      max: 200,

        calculable: false,
        show:false,
        color: ['#C9F1F1','#82F3FF','#C963FF'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#198AFF',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#FBDB57'
            }
        }
    },
    series: [
     {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                return 60 + val[1]/5000;
            },
            tooltip: {
            	show:false
            },
            data: convertData(data),
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    },
                    formatter: function (params) {
//                  	console.log(params);
		                return params['value'][3]+'上线';
		            },
                }
            },
            itemStyle: {
                normal: {
                    color: '#D5346F', //标志颜色
                }
            },
            zlevel: 6,
            
        },
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: stuTeachNum(addressDate),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
            	color:'#75F5FF',
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1,
                }
            }
        }
    ]
}

//if (option && typeof option === "object") {
//  myChartl.setOption(optionl, true);
//};
        var num=-1;
		var timer=setInterval(function(){
			var numInfor=infor.length-1;
			num++;
			if(num>numInfor){
            	clearInterval(timer);
            	num=-1;
            }else{
//          	console.log(num);
				data[0]=infor[num];
//				console.log(data);
                optionl.series[0].data=convertData(data);
                setTimeout(function(){
                	data=[];
                    optionl.series[0].data=convertData(data);
                    myChartl.setOption(optionl, true);
                },1500);
				vue.$Message.success(infor[num].value[1]+'在'+infor[num].name+'上线了');
            }
			myChartl.setOption(optionl, true);
			
		},3000)
}
