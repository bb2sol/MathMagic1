const magicTable = [
    [[1,3,5,7],[9,11,13,15],[17,19,21,23],[25,27,29,31]],
    [[2,3,6,7],[10,11,14,15],[18,19,22,23],[26,27,30,31]],
    [[4,5,6,7],[12,13,14,15],[20,21,22,23],[28,29,30,31]],
    [[8,9,10,11],[12,13,14,15],[24,25,26,27],[28,29,30,31]],
    [[16,17,18,19],[20,21,22,23],[24,25,26,27],[28,29,30,31]]
];

let answer = 0;
let index = 0;

const tablePage = `
<div class="content">
<strong class="question">생각한 수가 이 표에 있습니까?(1/5)</strong>
<table class="table">

</table>
<div class="btn_box">
    <button type="button" class="btn_base point" id="btn_yes" value="yes">예</button>
    <button type="button" class="btn_base" id="btn_no" value="no">아니오</button>
</div>
</div>`;

$(function(){
    $("#next").on('click', function () {
        $(".container").html(tablePage);
        setNextTable();
    });

    $(document).on('click', "#btn_yes", function () {
        answer += magicTable[index][0][0];
        console.log(answer)
        index += 1;

        if (index >= 5) {
            setResultPage();
        }

        setNextTable();
    });

    $(document).on('click', "#btn_no", function () {
        index += 1;

        if (index >= 5) {
            setResultPage();
        }

        setNextTable();
    });

    $(document).on('click', "#btn_reset", function () {
        location.reload();
    });
});

function setNextTable() {
    if (index < 5) {
        $(".table").empty();

        magicTable[index].forEach(function (item) {
            let tr = $("<tr>");
            item.forEach(function (d) {
                tr.append($("<td>").text(d));
            });
            $(".table").append(tr);
        });
    }
}

function setResultPage() {
    const resultPage = `
<div class="content">
    <strong class="question">생각한 수는 ... <br> ${answer} 입니다</strong>
    <div class="btn_box">
        <button type="button" class="btn_base point" id="btn_reset">처음으로</button>
    </div>
</div>`;
    $(".container").html(resultPage);
}