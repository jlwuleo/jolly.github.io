var app = angular.module('app', []);

app.controller('MaJiangController', ['$scope', function($scope) {
    var data = [
        {start : '2017-01-06 20:00', end : '2017-01-07 04:00', address : '黄君山至尊宝809',rmb : -800},
        {start : '2017-01-07 15:00', end : '2017-01-08 03:00', address : '黄君山至尊宝809',rmb : -200},
        {start : '2017-01-08 15:00', end : '2017-01-08 21:00', address : '黄君山至尊宝809',rmb : -200},
        {start : '2017-01-13 21:30', end : '2017-01-14 03:00', address : '黄君山至尊宝809',rmb : +500},
        {start : '2017-01-14 15:00', end : '2017-01-15 03:00', address : '黄君山至尊宝810',rmb : -2400},
        {start : '2017-01-15 15:00', end : '2017-01-15 21:00', address : '岗头市场11栋楼下',rmb : +900},
    ];

    var data1 = [{
            time : '2017-01-13',
            tables : [{
                address : '黄君山至尊宝809',
                start : '2017-01-13 21:30',
                end : '2017-01-14 03:00',
                detail : [{name : 'A1',rmb : 1000},{name : 'A2',rmb : 1000},{name : 'A3',rmb : 1000},{name : 'A4',rmb : 1000},{name : '老板',rmb : 1000}]
            }]
        },{
            time : '2017-01-14',
            tables : [{
                address : '黄君山至尊宝809',
                start : '2017-01-14 15:00',
                end : '2017-01-15 03:00',
                detail : [{name : 'A1',rmb : 1000},{name : 'A2',rmb : 1000},{name : 'A3',rmb : 1000},{name : 'A4',rmb : 1000},{name : '老板',rmb : 1000}]
            },{
                address : '黄君山至尊宝812',
                start : '2017-01-14 20:00',
                end : '2017-01-15 03:00',
                detail : [{name : 'A1',rmb : 1000},{name : 'A2',rmb : 1000},{name : 'A3',rmb : 1000},{name : 'A4',rmb : 1000},{name : '老板',rmb : 1000}]
            }]
        }
    ];

    var day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    var getTimeFormat = function(time) {

        var zero = function(i){
            return i == 0 ? '00' : (i > 0 && i < 10) ? '0' + i : i;
        }
        
        var h = parseInt(time / 3600);
        var m = parseInt(time / 60 % 60);
        
        return zero(h) + '小时' + zero(m) + '分钟';
    }

    var totalTime = 0;
    var totalRmb = 0;
    angular.forEach(data, function(i){
        var startDate = new Date(i.start);
        var endDate = new Date(i.end);

        var time = (endDate - startDate) / 1000;
        totalTime += time;
        totalRmb += i.rmb;

        i.duration = getTimeFormat(time);
        i.startDay = day[startDate.getDay()];
        i.endDay = day[endDate.getDay()];
    });

    data.push({duration : getTimeFormat(totalTime),rmb : totalRmb})

    $scope.items = data;
}]);