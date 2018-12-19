/* 문서 내용 다 불러온 후 동작 */
$(function () {
    /* 첫번째 목록 보여줌 */
    $("#box > ul > li:first").show(0);
    $(".btn").click(function () {
        boxMoved($(this).attr("data-move"));
    });
});
/* 바뀌는 시간 0.5초 */
var moveInterval = 500;
var moveNowNo = 0;
/* 이동 function */
function boxMoved(str) {
    var bmoveNowNo = moveNowNo;
    if (str == 'back') { moveNowNo--; } else { moveNowNo++; }
    if (moveNowNo < 0) {
        moveNowNo = $("#box > ul > li").length - 1;
    } else if (moveNowNo >= $("#box > ul > li").length) {
        moveNowNo = 0;
    }
    $("#box > ul > li:eq(" + bmoveNowNo + ")").fadeOut(moveInterval);
    $("#box > ul > li:eq(" + moveNowNo + ")").fadeIn(moveInterval);
}