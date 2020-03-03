dropdown = document.getElementById('requestor');
var department = document.getElementById('department');
var defaultselect = document.createElement('option');
defaultselect.text = 'Please Select';

dropdown.add(defaultselect);

description = document.getElementById('description');


department.onkeyup = function(){
	$.getJSON('assets/json/departmentEmployees.json', department.value, function(data) {
		var key = department.value;
		var vals = [];
		
		if ('Division of Telecommunications Extranet Development'.includes(key)){
			vals =  vals.concat(data.DivisionofTelecommunicationsExtranetDevelopment.split(","));
		}
		if ('Extranet Multimedia Connectivity and Security Division'.includes(key)){
			vals = vals.concat(data.ExtranetMultimediaConnectivityandSecurityDivision.split(","));
		}
		if ('Branch of Extranet Implementation'.includes(key)){
			vals = vals.concat(data.BranchofExtranetImplementation.split(","));
		}
		if ('Branch of Intranet Computer Maintenance and E-Commerce PC Programming'.includes(key)){
			vals = vals.concat(data.BranchofIntranetComputerMaintenanceandE-CommercePCProgramming.split(","));
		}
		if ('Wireless Extranet Backup Team'.includes(key)){
			vals = vals.concat(data.WirelessExtranetBackupTeam.split(","));
		}
		if ('Database Programming Branch'.includes(key)){
			vals = vals.concat(data.DatabaseProgrammingBranch.split(","));
		}
		if ('Hardware Backup Department'.includes(key)){
			vals = vals.concat(data.HardwareBackupDepartment.split(","));
		}
		if ('Multimedia Troubleshooting and Maintenance Team'.includes(key)){
			vals = vals.concat(data.MultimediaTroubleshootingandMaintenanceTeam.split(","));
		}
		if ('Office of Statistical Data Connectivity'.includes(key)){
			vals = vals.concat(data.OfficeofStatisticalDataConnectivity.split(","));
		}
		if ('Network Maintenance and Multimedia Implementation Committee'.includes(key)){
			vals = vals.concat(data.NetworkMaintenanceandMultimediaImplementationCommittee.split(","));
		}
		if ('Mainframe PC Development and Practacal Source Code Acquisition Team'.includes(key)){
			vals = vals.concat(data.MainframePCDevelopmentandPractacalSourceCodeAcquisitionTeam.split(","));
		}
		if ('Division of Application Security'.includes(key)){
			vals = vals.concat(data.DivisionofApplicationSecurity.split(","));
		}
		if ('PC Maintenance Department'.includes(key)){
			vals = vals.concat(data.PCMaintenanceDepartment.split(","));
		}
		if ('Bureau of Business-Oriented PC Backup and Wireless Telecommunications Control'.includes(key)){
			vals = vals.concat(data.BureauofBusinessOrientedPCBackupandWirelessTelecommunicationsControl.split(","));
		}
		if ('Software Technology and Networking Department'.includes(key)){
			vals = vals.concat(data.SoftwareTechnologyandNetworkingDepartment.split(","));
		}
		
		$(dropdown).empty();
		dropdown.add(defaultselect);

		$.each(vals, function(index, value){
			var newoption = document.createElement('option');
			newoption.text = value;
			dropdown.add(newoption);
		});
		
	});
}
