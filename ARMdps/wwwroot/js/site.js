
//Функция вызова форм редактирования
function sendAjaxData(data, url, onsucess, onerror, type = "POST") {
    $.ajax({
        data: data,
        url: url,
        success: onsucess,
        error: onerror,
        type: type
    });
}

//Функция вызова таблиц
function sendAjaxNotData(url, onsuccess, onerror, type = "POST") {
    $.ajax({
        url: url,
        success: onsuccess,
        error: onerror,
        type: type
    })
}

//Функция сохранения данных формы
function saveAjaxChanges(data, url, onsuccess, onerror, type = "POST") {
    $.ajax({
        data: data,
        url: url,
        success: onsuccess,
        error: onerror,
        type: type
    });
}

function tableSuccess(data) {
    updateTable(data);
}

function tableError() {
    alert("Error occured");
}