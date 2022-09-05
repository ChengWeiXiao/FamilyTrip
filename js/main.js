var peopleList = [
    { Family: "叔公家", Name: "蕭進雄", PID: "L101971704", Birthday: "1951-01-28", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "A", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "叔公家", Name: "簡美玉", PID: "L221212753", Birthday: "1961-06-12", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "A", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "姊夫家", Name: "李旻儒", PID: "Q123695761", Birthday: "1986-11-13", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "B", Type: "雙人房", IsTakeBus: "自行前往", FirstBreak: "不需要", SecondBreak: "西式" },
    { Family: "姊夫家", Name: "蕭椀如", PID: "L223510163", Birthday: "1988-01-25", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "B", Type: "雙人房", IsTakeBus: "自行前往", FirstBreak: "不需要", SecondBreak: "中式" },
    { Family: "裕叔家", Name: "蕭伊廷", PID: "L124478224", Birthday: "1990-10-08", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "C", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "裕叔家", Name: "莊庭翎", PID: "L224660582", Birthday: "1997-01-31", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "C", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "義哥家", Name: "蕭丞尉", PID: "L125080415", Birthday: "1996-08-08", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "D", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "義哥家", Name: "盧怡君", PID: "G221998120", Birthday: "1995-12-21", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "D", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "義哥家", Name: "林寶玉", PID: "L201911764", Birthday: "1938-01-16", MealHabbit: "早齋", House: "田心鄉村民宿", Room: "E", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "義哥家", Name: "蕭錦義", PID: "L121180709", Birthday: "1961-06-16", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "E", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "義哥家", Name: "巫清蘭", PID: "L221208160", Birthday: "1963-10-17", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "E", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "阿俊伯家", Name: "蕭錦俊", PID: "L121139935", Birthday: "1960-10-09", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "F", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "阿俊伯家", Name: "黃玉緞", PID: "L221935939", Birthday: "1959-12-31", MealHabbit: "全素", House: "田心鄉村民宿", Room: "F", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "阿俊伯家", Name: "和宣帆", PID: "B125006779", Birthday: "2016-09-16", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "F", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "家文叔家", Name: "羅家文", PID: "L122231401", Birthday: "1980-02-29", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "G", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "家文叔家", Name: "黃珮鈞", PID: "L223901075", Birthday: "1986-01-06", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "G", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "家文叔家", Name: "羅于媃", PID: "B225542165", Birthday: "2018-01-24", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "G", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "家文叔家", Name: "張淳茵", PID: "B224217887", Birthday: "2011-03-01", MealHabbit: "無特別需求", House: "田心鄉村民宿", Room: "G", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "裕叔家", Name: "蕭錦裕", PID: "L121180718", Birthday: "1963-07-02", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "H", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "裕叔家", Name: "陳阿愛", PID: "L221191179", Birthday: "1965-10-05", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "H", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "沙鹿親家", Name: "蔡淵能", PID: "L101131960", Birthday: "1954-10-02", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "I", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "沙鹿親家", Name: "陳素珍", PID: "L201100654", Birthday: "1955-10-29", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "I", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "家文叔家", Name: "羅龍森", PID: "L120141511", Birthday: "1957-09-18", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "J", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "家文叔家", Name: "林麗碧", PID: "L220888628", Birthday: "1959-03-17", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "J", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "裕叔家", Name: "蕭亦翎", PID: "L124811443", Birthday: "1993-02-22", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "K", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "裕叔家", Name: "吳偵瑜", PID: "K222634897", Birthday: "1993-03-23", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "K", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "裕叔家", Name: "蕭臣鈞", PID: "B126092037", Birthday: "2021-11-15", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "K", Type: "雙人房", IsTakeBus: "搭遊覽車", FirstBreak: "不需要", SecondBreak: "不需要" },
    { Family: "姑丈家", Name: "郭志宏", PID: "L122122872", Birthday: "1974-12-10", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "L", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "姑丈家", Name: "蕭淑娟", PID: "L222439614", Birthday: "1976-12-24", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "L", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "姑丈家", Name: "郭宸妤", PID: "B224678915", Birthday: "2013-11-23", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "L", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "叔公家", Name: "蕭錦順", PID: "L122453925", Birthday: "1978-12-18", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "M", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "叔公家", Name: "陳香如", PID: "L222429896", Birthday: "1980-02-23", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "M", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "叔公家", Name: "蕭閎謙", PID: "L125912290", Birthday: "2020-05-27", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "M", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "叔公家", Name: "蕭錦全", PID: "L122802044", Birthday: "1979-12-09", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "N", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "中式", SecondBreak: "中式" },
    { Family: "叔公家", Name: "蘇歆喻", PID: "M222723541", Birthday: "1980-06-02", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "N", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "叔公家", Name: "蕭羽晴", PID: "B224666880", Birthday: "2012-06-02", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "N", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "叔公家", Name: "蕭宇庭", PID: "B225055792", Birthday: "2015-07-03", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "N", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "西式", SecondBreak: "西式" },
    { Family: "義哥家", Name: "蕭博元", PID: "L123616579", Birthday: "1985-02-03", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "O", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "不需要", SecondBreak: "西式" },
    { Family: "義哥家", Name: "蔡菁文", PID: "L223710029", Birthday: "1984-11-30", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "O", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "不需要", SecondBreak: "西式" },
    { Family: "義哥家", Name: "蕭勻芯", PID: "B225037927", Birthday: "2014-12-03", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "O", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "不需要", SecondBreak: "西式" },
    { Family: "義哥家", Name: "蕭恩妤", PID: "H227553911", Birthday: "2018-04-27", MealHabbit: "無特別需求", House: "水雲山莊民宿", Room: "O", Type: "四人房", IsTakeBus: "搭遊覽車", FirstBreak: "不需要", SecondBreak: "西式" },
];

var feeList = [
    { Family: "義哥家", Insurance: 555, TourBus: 6935, Meal: 13642, Room: 10260, Total: 31392 },
    { Family: "裕叔家", Insurance: 460, TourBus: 5873, Meal: 11822, Room: 10260, Total: 28415 },
    { Family: "叔公家", Insurance: 504, TourBus: 6073, Meal: 11822, Room: 10260, Total: 28659 },
    { Family: "姑丈家", Insurance: 168, TourBus: 2025, Meal: 3944, Room: 3420, Total: 9557 },
    { Family: "姊夫家", Insurance: 146, TourBus: 0, Meal: 3793, Room: 3420, Total: 7359 },
    { Family: "沙鹿親家", Insurance: 146, TourBus: 1925, Meal: 3944, Room: 3420, Total: 9435 },
    { Family: "家文叔家", Insurance: 336, TourBus: 4049, Meal: 7883, Room: 6840, Total: 19108 },
    { Family: "阿俊伯家", Insurance: 168, TourBus: 2025, Meal: 3944, Room: 3420, Total: 9557 },
];

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('tripNavbar').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('tripNavbar').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

function search(e) {
    e.preventDefault(e);
    var PID = $("#choices-text-preset-values").val();
    var person = peopleList.filter(x => x.PID === PID);
    if (person.length > 0) {
        var family = person[0].Family;

        var familyFee = feeList.filter(x => x.Family === family);
        var familyFeeHtml = GetFeeHtml(familyFee);

        var familyPeople = peopleList.filter(x => x.Family === family);
        var familyPeopleHtml = GetPeopleHtml(PID,familyPeople);

        var familyRoom = peopleList.filter(x => x.Family === family);
        var familyRoomHtml = GetRoomHtml(familyRoom);

        $("#familyFee").html(familyFeeHtml);
        $("#familyPeople").html(familyPeopleHtml);
        $("#familyRoom").html(familyRoomHtml);
        $("#info").show();
        $("html, body").animate(
            { scrollTop: $('#infoStopHere').offset().top }, 200);
    } else {
        $("#familyFee").html("");
        $("#familyPeople").html("");
        $("#info").hide();
        swal({
            title: "錯誤",
            text: "查無此身分證字號!",
            icon: "error",
        });
    }
}

function GetPeopleHtml(PID,familyPeople) {
    var familyPeopleHtml = "";
    familyPeople.forEach(x => {
        familyPeopleHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#a1e7cd\">" + x.Name + "</p>";
        if (x.PID === PID) {
            familyPeopleHtml += "<p class=\"card-text\">身分證字號：" + x.PID + "</p>";
        } else {
            familyPeopleHtml += "<p class=\"card-text\">身分證字號：" + GetMask(x.PID) + "</p>";
        }
        familyPeopleHtml += "<p class=\"card-text\">出生年月日：" + x.Birthday + "</p>";
        familyPeopleHtml += "<p class=\"card-text\">飲食習慣：" + x.MealHabbit + "</p>";
        familyPeopleHtml += "<p class=\"card-text\">是否搭車：" + x.IsTakeBus + "</p>";
        familyPeopleHtml += "<p class=\"card-text\">第一天早餐：" + x.FirstBreak + "</p>";
        familyPeopleHtml += "<p class=\"card-text\">第二天早餐：" + x.SecondBreak + "</p>";
    });
    return familyPeopleHtml;
}

function GetFeeHtml(familyFee) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('zh-Hans', {
        style: 'currency',
        currency: 'TWD',
        maximumFractionDigits: 0,
    });
    var familyFeeHtml = "";
    familyFee.forEach(x => {
        var total = x.Insurance + x.TourBus + x.Meal + x.Room;
        familyFeeHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#a1e7cd\">保險費用</p>";
        familyFeeHtml += "<p class=\"card-text\">" + formatter.format(x.Insurance) + "</p>";
        familyFeeHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#a1e7cd\">交通費用</p>";
        familyFeeHtml += "<p class=\"card-text\">" + formatter.format(x.TourBus) + "</p>";
        familyFeeHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#a1e7cd\">餐膳費用</p>";
        familyFeeHtml += "<p class=\"card-text\">" + formatter.format(x.Meal) + "</p>";
        familyFeeHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#a1e7cd\">住宿費用</p>";
        familyFeeHtml += "<p class=\"card-text\">" + formatter.format(x.Room) + "</p>";
        familyFeeHtml += "<hr />";
        familyFeeHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#ffc7b8\">總計(約)</p>";
        familyFeeHtml += "<p class=\"card-text\">" + formatter.format(total) + "</p>";
    });
    return familyFeeHtml;
}

function GetRoomHtml(familyRoom) {
    var familyRoomHtml = "";
    const a = [];
    const map = new Map();
    for (const item of familyRoom) {
        if (!map.has(item.Room)) {
            map.set(item.Room, true);    // set any value to Map
            a.push({
                Room: item.Room,
                House: item.House,
                Type: item.Type
            });
        }
    }
    a.forEach(x => {
        familyRoomHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#a1e7cd\">" +x.House + " " + x.Type + "</p>";
        familyRoom.filter(y => y.Room === x.Room).forEach(z => {
            familyRoomHtml += "<p class=\"card-text\">姓名：" + z.Name + "</p>";
        })
    })
    return familyRoomHtml;
}

function GetMask(PID) {
    var newPID=""
    for (i = 0; i < PID.length; i++) {
        if ((i + 1) % 2 == 0) {
            newPID += "*";
        } else {
            newPID += PID[i];
        }
    }
    return newPID;
}