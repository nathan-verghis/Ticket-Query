function validateForm(){
    var name = document.forms["ticketInput"]["projectName"].value
    var department = document.forms["ticketInput"]["department"].value
    var requestor = document.forms["ticketInput"]["requestor"]
    var description = document.forms["ticketInput"]["description"].value
    var checker = 0
    
    date = new Date()
    requestor = requestor.options[requestor.selectedIndex].value
    if (name == ""){
        alert("You must enter a Project Name")
    } else {
        checker ++
    }
    if (department == ""){
        alert("You must enter a valid department")
    } else {
        checker ++
    }
    if (requestor == "Please Select"){
        alert("You must choose who is requesting this ticket")
    } else {
        checker ++
    }
    if (description == ""){
        alert("Description must be filled out")
    } else {
        checker ++
    }
    if (checker == 4){
        var hour = date.getHours()
        var minute = date.getMinutes()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        createTickets(name, department, requestor, description, hour, minute, day, month, year)
        window.location.href = "ticketSearch.html"
    }
}