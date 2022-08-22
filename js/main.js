var peopleList = [
    { Family: "A", Name: "林寶玉", PID: "L201911764", Birthday: "1938-01-16", MealHabbit: "早齋" },
    { Family: "A", Name: "蕭錦義", PID: "L121180709", Birthday: "1961-06-16", MealHabbit: "無特別需求" },
    { Family: "A", Name: "巫清蘭", PID: "L221208160", Birthday: "1963-10-17", MealHabbit: "無特別需求" },
    { Family: "A", Name: "蕭博元", PID: "L123616579", Birthday: "1985-02-03", MealHabbit: "無特別需求" },
    { Family: "A", Name: "蔡菁文", PID: "L223710029", Birthday: "1984-11-30", MealHabbit: "無特別需求" },
    { Family: "A", Name: "蕭勻芯", PID: "B225037927", Birthday: "2014-12-03", MealHabbit: "無特別需求" },
    { Family: "A", Name: "蕭恩妤", PID: "H227553911", Birthday: "2018-04-27", MealHabbit: "無特別需求" },
    { Family: "A", Name: "蕭丞尉", PID: "L125080415", Birthday: "1996-08-08", MealHabbit: "無特別需求" },
    { Family: "A", Name: "盧怡君", PID: "G221998120", Birthday: "1995-12-21", MealHabbit: "無特別需求" },
    { Family: "B", Name: "蕭錦裕", PID: "L121180718", Birthday: "1963-07-02", MealHabbit: "無特別需求" },
    { Family: "B", Name: "陳阿愛", PID: "L221191179", Birthday: "1965-10-05", MealHabbit: "無特別需求" },
    { Family: "B", Name: "蕭伊廷", PID: "L124478224", Birthday: "1990-10-08", MealHabbit: "無特別需求" },
    { Family: "B", Name: "莊庭翎", PID: "L224660582", Birthday: "1997-01-31", MealHabbit: "無特別需求" },
    { Family: "B", Name: "蕭亦翎", PID: "L124811433", Birthday: "1993-02-22", MealHabbit: "無特別需求" },
    { Family: "B", Name: "吳偵瑜", PID: "K222634897", Birthday: "1993-03-23", MealHabbit: "無特別需求" },
    { Family: "B", Name: "蕭臣鈞", PID: "B126092037", Birthday: "2021-11-15", MealHabbit: "無特別需求" },
    { Family: "C", Name: "蕭椀如", PID: "L223510163", Birthday: "1988-01-25", MealHabbit: "無特別需求" },
    { Family: "C", Name: "李旻儒", PID: "Q123695761", Birthday: "1986-11-13", MealHabbit: "無特別需求" },
    { Family: "C", Name: "李清珪", PID: "Q122109499", Birthday: "1957-05-20", MealHabbit: "無特別需求" },
    { Family: "C", Name: "林芬叙", PID: "B220542683", Birthday: "1961-10-17", MealHabbit: "無特別需求" },
    { Family: "D", Name: "蕭進雄", PID: "L101971704", Birthday: "1951-01-28", MealHabbit: "無特別需求" },
    { Family: "D", Name: "簡美玉", PID: "L221212753", Birthday: "1961-06-12", MealHabbit: "無特別需求" },
    { Family: "D", Name: "蕭錦順", PID: "L122553925", Birthday: "1978-12-18", MealHabbit: "無特別需求" },
    { Family: "D", Name: "陳香如", PID: "L222429896", Birthday: "1980-02-23", MealHabbit: "無特別需求" },
    { Family: "D", Name: "蕭閎謙", PID: "L125912290", Birthday: "2020-05-27", MealHabbit: "無特別需求" },
    { Family: "D", Name: "蕭錦全", PID: "L122802044", Birthday: "1979-12-09", MealHabbit: "無特別需求" },
    { Family: "D", Name: "蘇歆喻", PID: "M222723541", Birthday: "1980-06-02", MealHabbit: "無特別需求" },
    { Family: "D", Name: "蕭羽晴", PID: "B224666880", Birthday: "2012-06-02", MealHabbit: "無特別需求" },
    { Family: "D", Name: "蕭宇庭", PID: "B225055792", Birthday: "2015-07-03", MealHabbit: "無特別需求" },
    { Family: "E", Name: "郭志宏", PID: "L122122872", Birthday: "1974-12-10", MealHabbit: "無特別需求" },
    { Family: "E", Name: "蕭淑娟", PID: "L222439614", Birthday: "1976-12-24", MealHabbit: "無特別需求" },
    { Family: "E", Name: "郭宸妤", PID: "B224678915", Birthday: "2013-11-23", MealHabbit: "無特別需求" },
    { Family: "F", Name: "蔡淵能", PID: "L101131960", Birthday: "1954-10-02", MealHabbit: "無特別需求" },
    { Family: "F", Name: "陳素珍", PID: "L201100654", Birthday: "1955-10-29", MealHabbit: "無特別需求" },
    { Family: "G", Name: "羅龍森", PID: "L120141511", Birthday: "1957-09-18", MealHabbit: "無特別需求" },
    { Family: "G", Name: "林麗碧", PID: "L220888628", Birthday: "1959-03-17", MealHabbit: "無特別需求" },
    { Family: "G", Name: "羅家文", PID: "L122231401", Birthday: "1980-02-29", MealHabbit: "無特別需求" },
    { Family: "G", Name: "黃珮鈞", PID: "L223901075", Birthday: "1986-01-06", MealHabbit: "無特別需求" },
    { Family: "G", Name: "羅于媃", PID: "B225542165", Birthday: "2018-01-24", MealHabbit: "無特別需求" },
    { Family: "G", Name: "張淳茵", PID: "B224217887", Birthday: "2011-03-01", MealHabbit: "無特別需求" },
    { Family: "H", Name: "蕭錦俊", PID: "L121139935", Birthday: "1960-10-09", MealHabbit: "無特別需求" },
    { Family: "H", Name: "黃玉緞", PID: "L221935939", Birthday: "1959-12-31", MealHabbit: "全素" },
    { Family: "H", Name: "和宣帆", PID: "B125006779", Birthday: "2016-09-16", MealHabbit: "無特別需求" },
];

var feeList = [
    { Family: "A", Insurance: 555, TourBus: 6204, Meal: 12818, Room: 10088, Total: 29665 },
    { Family: "B", Insurance: 460, TourBus: 5246, Meal: 11089, Room: 10088, Total: 26883 },
    { Family: "C", Insurance: 292, TourBus: 3431, Meal: 7394, Room: 6725, Total: 17842 },
    { Family: "D", Insurance: 504, TourBus: 5446, Meal: 11089, Room: 10088, Total: 27127 },
    { Family: "E", Insurance: 168, TourBus: 1816, Meal: 3699, Room: 3363, Total: 9046 },
    { Family: "F", Insurance: 146, TourBus: 1716, Meal: 3699, Room: 3363, Total: 8924 },
    { Family: "G", Insurance: 336, TourBus: 3631, Meal: 7394, Room: 6725, Total: 18086 },
    { Family: "H", Insurance: 168, TourBus: 1816, Meal: 3699, Room: 3363, Total: 9046 },
];

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar-example2').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar-example2').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
}); 

function search(e) {
    e.preventDefault(e);
    var PID = $("#choices-text-preset-values").val();
    var person = peopleList.filter(x => x.PID === PID);
    if (person.length > 0) {
        var family = person[0].Family;

        var familyFee = feeList.filter(x => x.Family === family);
        var familyFeeHtml = GetFeeHtml(familyFee);

        var familyPeople = peopleList.filter(x => x.Family === family);
        var familyPeopleHtml = GetPeopleHtml(familyPeople);

        $("#familyFee").html(familyFeeHtml);
        $("#familyPeople").html(familyPeopleHtml);
        $("#info").show();
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

function GetPeopleHtml(familyPeople) {
    var familyPeopleHtml = "";
    familyPeople.forEach(x => {
        familyPeopleHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#a1e7cd\">" + x.Name + "</p>";
        familyPeopleHtml += "<p class=\"card-text\">身分證字號：" + x.PID + "</p>";
        familyPeopleHtml += "<p class=\"card-text\">出生年月日：" + x.Birthday + "</p>";
        familyPeopleHtml += "<p class=\"card-text\">飲食習慣：" + x.MealHabbit + "</p>";
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
        familyFeeHtml += "<p style=\"border-left: 3px solid currentcolor; padding-left: 14px; padding-right: 14px; width: 100%;background-color:#e7b0a1\">總計(約)</p>";
        familyFeeHtml += "<p class=\"card-text\">" + formatter.format(total) + "</p>";
    });
    return familyFeeHtml;
}