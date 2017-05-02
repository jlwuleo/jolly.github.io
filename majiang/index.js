var app = angular.module('app', []);

app.controller('MaJiangController', ['$scope', function($scope) {
    var data = [
        {start : '2017-01-06 20:00', end : '2017-01-07 04:00', address : '黄君山至尊宝809', rmb : -800},
        {start : '2017-01-07 15:00', end : '2017-01-08 03:00', address : '黄君山至尊宝809', rmb : -200},
        {start : '2017-01-08 15:00', end : '2017-01-08 21:00', address : '黄君山至尊宝809', rmb : -200},
        {start : '2017-01-13 21:30', end : '2017-01-14 03:00', address : '黄君山至尊宝809', rmb : +500},
        {start : '2017-01-14 15:00', end : '2017-01-15 03:00', address : '黄君山至尊宝810', rmb : -2400 + 400},
        {start : '2017-01-15 15:00', end : '2017-01-15 21:00', address : '岗头市场11栋楼下', rmb : +900},
        
        {start : '2017-02-10 20:00', end : '2017-02-11 06:00', address : '岗头市场11栋楼下', rmb : -340},
        {start : '2017-02-11 21:00', end : '2017-02-12 05:00', address : '岗头市场11栋楼下', rmb : -2300},
        {start : '2017-02-12 15:00', end : '2017-02-12 22:00', address : '瓦窑排', rmb : +300},

        {start : '2017-02-25 15:00', end : '2017-02-25 23:30', address : '黄君山至尊宝816', rmb : +360},
        {start : '2017-02-26 15:00', end : '2017-02-26 21:30', address : '黄君山至尊宝811', rmb : -200},

        {start : '2017-03-04 15:00', end : '2017-03-05 03:00', address : '黄君山至尊宝', rmb : 0},

        {start : '2017-03-11 21:00', end : '2017-03-12 01:30', address : '岗头市场', rmb : +80},
        {start : '2017-03-12 14:00', end : '2017-03-12 22:00', address : '岗头市场', rmb : -180},

        {start : '2017-03-17 20:00', end : '2017-03-18 07:00', address : '岗头市场', rmb : +400},
        {start : '2017-03-18 20:00', end : '2017-03-19 14:00', address : '马蹄山至尊宝', rmb : -560},

        {start : '2017-03-23 19:00', end : '2017-03-24 01:00', address : '宝安25区', rmb : +200},
        {start : '2017-03-24 19:30', end : '2017-03-25 00:00', address : '岗头市场', rmb : +80},
        
        {start : '2017-03-25 14:00', end : '2017-03-26 00:00', address : '岗头市场', rmb : +80},

        {start : '2017-04-07 21:00', end : '2017-04-08 02:00', address : '岗头市场', rmb : -640},
        {start : '2017-04-08 21:00', end : '2017-04-09 00:00', address : '岗头市场', rmb : +520},
        {start : '2017-04-09 16:00', end : '2017-04-09 21:00', address : '岗头市场', rmb : -600},

        {start : '2017-04-14 21:00', end : '2017-04-15 09:00', address : '岗头市场', rmb : -1000},
        {start : '2017-04-15 19:00', end : '2017-04-16 03:00', address : '马蹄山至尊宝', rmb : +500},
        
        {start : '2017-04-22 17:00', end : '2017-04-23 00:00', address : '马蹄山至尊宝', rmb : +2060},

        {start : '2017-04-28 20:00', end : '2017-04-29 01:00', address : '岗头市场11栋楼下', rmb : -520},
        {start : '2017-04-29 13:00', end : '2017-04-30 03:00', address : '黄君山至尊宝', rmb : +1500},
        {start : '2017-05-01 00:00', end : '2017-05-01 14:00', address : '瓦窑排', rmb : -350},
        {start : '2017-05-01 16:00', end : '2017-05-01 20:00', address : '瓦窑排', rmb : +90},
    ];

    var day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    var convertDate = function(date){
        var tmp = date.split(' ');
        var tmp1 = tmp[0].split('-');
        var dt = tmp1[1] + '/' + tmp1[2] + '/' + tmp1[0] + ' ' + tmp[1]
        return new Date(dt);
    }

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
        var startDate = convertDate(i.start);
        var endDate = convertDate(i.end);

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