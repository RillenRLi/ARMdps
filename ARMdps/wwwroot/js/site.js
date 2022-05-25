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
        success: function (result) { onsuccess(result) },
        error: onerror,
        type: type
    });
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

//Функция для передачи данных в форму редактирования учетных данных

function getRegion(regionId) {
    const response = fetch("/api/regionapi/" + regionId, {
        method: "GET",
        headers: { "Accept": "application/json" }
        }).then(response => response.json())
        .then(data => getRegionRes(data));
    //console.log(response);
}

function getRegionRes(resp) {
    let response = resp;
    /*console.log(response);*/
    try {
        $('#Region_Id').val(response.region_Id);
        $('#RegionCode').val(response.regionCode);
        $('#Code2Digits').val(response.code2Digits);
        $('#RegionName').val(response.regionName);
        $('#UseSuperUser').prop('checked', response.useSuperUser);
        //$('#User_Id').val(response.user_Id);
        //$('#LicenseType').val(response.licenseType);
        //$('#LicenseFileName').val(response.licenseFileName);
        $('#FISMIsEnabled').prop('checked', response.fismIsEnabled);
        $('#ArchiveIsEnabled').prop('checked', response.archiveIsEnabled);
        $('#FTPIp').val(response.ftpIp);
        $('#FTPUploadDir').val(response.ftpUploadDir);
        $('#FTPLogin').val(response.ftpLogin);
        $('#FTPPassword').val(response.ftpPassword);
    }
    catch {
        alert('Ошибка загрузки данных');
    }
}

function getDepartaments() {
    const response = fetch("/api/departmentapi/", {
        method: "GET",
        headers: { "Accept": "application/json" }
    }).then(response => response.json())
        .then(data => getDepartamentsRes(data));
    //console.log(response);
    return response;
}

function getDepartamentsRes(resp) {
    let response = [];
    response = resp;
    for (let i = 0; i < response.length; i++) {
        console.log(response[i].shortName);
    }
    return response;
}

//Функция вызова и заполнения тоблицы подразделений

function clickDepartmentTableBtn() {    
    $('.department_form').removeClass('show_table');
    $('.department_form').addClass('hide_table');
    $('.department_table').removeClass('hide_table');
    $('.department_table').addClass('show_table');
};
$(document).ready(function(){

    var depTable = $('#dTable').DataTable
        ({
            ajax: {
                url: '/api/departmentapi/',
                data: "JSON",
                method: "GET",
                dataSrc: ""
            },
            dom: 'Bfrtp<"center">',
            buttons: [
                {
                    text: '<i class="bi bi-plus-circle"></i> Новое подразделение',
                    className: 'btn-primary addDepartment',
                    id: 'departmentAddBtn',
                    action: function (e, dt, node, config) {
                        $('.department_form').removeClass('hide_table');
                        $('.department_table').addClass('hide_table');
                        $('.department_table').removeClass('show_table');
                        $('.department_form').addClass('show_table');
                        $('depdeditTable').DataTable();
                        //saveDepartmentChanges(ev);
                        //resetDepartmentButton();
                        /*sendAjaxNotData('@Url.Action("GetDepartmenEditForm", "Department")', editSuccess, editError);*/
                    }
                },
            ],
            className: 'dataTable',
            order: [[1, 'asc']],
            columnDefs: [
                {
                    targets: 0,
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    className: 'select-checkbox'
                },
                { data: 'DepartmentCode', name: 'DepartmentCode', targets: 1 },
                { data: 'ShortName', name: 'ShortName', targets: 2 },
                { data: 'DepartmentName', name: 'DepartmentName', targets: 3 }
            ],

            select: {
                style: 'multi',
                selector: 'td:first-child'
            },
            //order: [[ 1, 'asc' ]],
            scrollY: '520px',
            scrollCollapse: true,
            pageLength: 20,
            "language": {
                "paginate": {
                    "previous": "<",
                    "next": ">"
                },
                "zeroRecords": "Не найдены подразделения, соответствующие строке поиска.</br> Измените строку поиска."
            }
        });
});

function saveDepartmentChanges(ev) {

    ev.preventDefault();

    let jsonDepartment = {
        //Department_Id:$('#Department_Id').val(),
        DepartmentCode: $('#DepartmentCode').val(),
        ShortName: $('#ShortName').val(),
        DepartmentName: $('#DepartmentName').val(),
        Phones: $('#Phones').val,
        EmailAddress: $('#EmailAddress').val(),
        Address: $('#Address').val(),
        KPP: $('#KPP').val(),
        INN: $('#INN').val(),
        OKTMO: $('#OKTMO').val(),
        BankName: $('#BankName').val(),
        PaymentName: $('#PaymentName').val(),
        KBK: $('#KBK').val(),
        RReceipt: $('#RReceipt').val(),
        KReceipt: $('#KReceipt').val()
    };

    let jd = JSON.stringify(jsonDepartment);
    console.log(jsonDepartment);
    console.log(jd);

    $.ajax({
        url: '/api/departmentapi/update',
        data: JSON.stringify(jsonDepartment),
        type: 'POST',
        contentType: "application/json",
        success: function () {
            console.log(JSON.stringify(jsonDepartment));
            $('.department_form').removeClass('show_table');
            $('.department_form').addClass('hide_table');
            $('.department_table').removeClass('hide_table');
            $('.department_table').addClass('show_table');
            depTable.row.add({
                'DepartmentCode': data.DepartmentCode,
                'ShortName': data.ShortName,
                'DepartmentName': data.DepartmentName
            }).draw();
        },
        error: function () {
            console.log('2');
        }
    });
}
function resetDepartmentButton() {
    $('.department_form').removeClass('show_table');
    $('.department_form').addClass('hide_table');
    $('.department_table').removeClass('hide_table');
    $('.department_table').addClass('show_table');
}


//Замена слова search на значок поиска

$(function () {
    $input = $(".dataTables_filter").find("[type='search']");

    $input.parent().contents().filter(function () {
        return this.nodeType == 3;
    }).each(function () {
        this.textContent = this.textContent.replace('Search:', '');
    });
    $input.before($("<i class='bi bi-search table_search'></i>"));
});