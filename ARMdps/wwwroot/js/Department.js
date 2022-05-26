//валидация поля код подразделения

function validateRegionCode(regionCode) {

    const msg = "Введите код региона (4 знака)";
    if (!regionCode) {
        setInputValidationFail('DepartmentCode', 'DepartmentCodeIcon', 'DepartmentCodeMsg', msg);
        return false;
    }    
    return true;
}

//валидация всех полей формы

function validateRegionForm(jsonData) {
    let retv = true;
    let resrc = validateRegionCode(jsonData.DepartmentCode);
    if (retv) retv = resrc;
    return retv;
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
    $('.region_form').removeClass('show_table');
    $('.region_form').addClass('hide_table');
    $('.department_table').removeClass('hide_table');
    $('.department_table').addClass('show_table');
};

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
                    $('.department_table').removeClass('show_table');
                    $('.department_table').addClass('hide_table');
                    $('.region_form').removeClass('show_table');
                    $('.region_form').addClass('hide_table');
                    $('.department_form').removeClass('hide_table');
                    $('.department_form').addClass('show_table');
                    var deditTable = null;
                    deditTable = $('#depeditTable').DataTable({
                        retrieve: true,
                        dom: '',
                        scrollY: "400px",
                        scrollCollapse: true,
                        paging: false,
                        ordering: false,
                        columnDefs: [
                            { targets: 0, name: 'Labels' },
                            { targets: 1, name: 'Values' }
                        ]
                    });
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
                className: 'select-checkbox',
                name: 'DepCheck',
            },
            { data: 'DepartmentCode', name: 'DepartmentCode', targets: 1 },
            { data: 'ShortName', name: 'ShortName', targets: 2 },
            { data: 'DepartmentName', name: 'DepartmentName', targets: 3 }
        ],

        select: {
            style: 'multi',
            selector: 'td:first-child'
        },
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


$(document).ready(function () {
    depTable;
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

    let valResult = validateRegionForm(jsonDepartment);
    if (!valResult) {
        toasterOptions();
        toastr.error('Ошибка валидации');
        return;
    }

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
                'DepCheck': '',
                'DepartmentCode': jsonDepartment.DepartmentCode,
                'ShortName': jsonDepartment.ShortName,
                'DepartmentName': jsonDepartment.DepartmentName
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