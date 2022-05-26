//валидация поля код подразделения

function validateDepartmentCode(departmentCode) {

    const msg = "Введите код подразделения";
    if (!departmentCode) {
        setInputValidationFail('DepartmentCode', 'DepartmentCodeIcon', 'DepartmentCodeMsg', msg);
        return false;
    }    
    return true;
}

//всплывающее окно валидации для поля код подразделения

$('#DepartmentCodeIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#DepartmentCodeMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#DepartmentCodeMsg').css('display', 'none');
        }
    });



//валидация поля краткое наименование

function validateShortName(shortName) {

    const msg = "Введите краткое наименование";
    if (!shortName) {
        setInputValidationFail('ShortName', 'ShortNameIcon', 'ShortNameMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля краткое наименование

$('#ShortNameIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#ShortNameMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#ShortNameMsg').css('display', 'none');
        }
    });




//валидация всех полей формы

function validateDepartmentForm(jsonDepartment) {
    let retd = true;
    let resdc = validateDepartmentCode(jsonDepartment.DepartmentCode);
    if (retd) retd = resdc;
    let resds = validateShortName(jsonDepartment.ShortName);
    return retd;
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
    deptsTable();
    $('.department_form').removeClass('show_table');
    $('.department_form').addClass('hide_table');
    $('.region_form').removeClass('show_table');
    $('.region_form').addClass('hide_table');
    $('.department_table').removeClass('hide_table');
    $('.department_table').addClass('show_table');
};

let depTable;
let deditTable;

function deptsTable() {
    deactivateCurrentTable(depTable);
    depTable = $('#dTable').DataTable
        ({
            ajax: {
                url: '/api/departmentapi/',
                data: "JSON",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer t-7614f875-8423-4f20-a674-d7cf3096290e');
                },
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
                        deactivateCurrentTable(deditTable);
                        deditTable = $('#depeditTable').DataTable({
                            retrieve: true,
                            scrollY: "400px",
                            scrollCollapse: true,
                            searching: false,
                            info: false,
                            paging: false,
                            ordering: false,
                            fixedHeader: {
                                "header": false,
                                "footer": false
                            },
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
}

$(document).ready(function () {
    
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

    let valResult = validateDepartmentForm(jsonDepartment);
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