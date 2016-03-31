newapp.controller('doctorController', function($scope,$interval,$location,$window,$routeParams,$http,$rootScope) {
	
	console.log("doctorController created");

	$scope.doctorList = [{"sno":1,name:"Dr. KRISHNA MOHAN NAI","timings":"10:30 AM TO 01:30 PM","qualification":"MBBS, M.D, DM","Specialization":"CARDIOLOGY"},
	{"sno":2,name:"Dr. DINESH KUMAR G R","timings":"10:00 AM TO 01:30 PM","qualification":"MBBS, MS (Gen.Surgery), FMAS","Specialization":"GENERAL SURGERY"},
	{"sno":3,name:"Dr. MANAS S N","timings":"10:30 AM TO 01:30 PM","qualification":"MBBS, M.D DERMATOLOGY","Specialization":"DERMATOLOGY"},
	{"sno":4,name:"Dr. PAYAL RANKA","timings":"6:30 PM TO 9:30 PM","qualification":"MBBS, MD","Specialization":"DERMATOLOGY"},
	{"sno":5,name:"DR.CHANDRASHEKAR G","timings":"10:30 AM TO 01:30 PM","qualification":"MBBS","Specialization":"GENERAL PHYSICIAN"},
	{"sno":6,name:"DR.DEEPAK M K","timings":"10:30 AM TO 01:30 PM","qualification":" MBBS, MS, Fellowship in Orthoplasty","Specialization":"ORTHOPAEDICS"},
	{"sno":7,name:"Dr. HARINATH BELLAMKONDA","timings":"06:30 PM TO 07:30 PM","qualification":" M.S. (Ortho Peadician)","Specialization":"ORTHOPAEDICS"},
	{"sno":8,name:"DR.SOMANATH VASUDEVA","timings":"08:45 AM TO 09:30 AM & 03:00 PM TO 03:30 PM","qualification":"MBBS, MD, DM (NEURO PHYSICIAN)","Specialization":"NEUROLOGY"},
	{"sno":9,name:"DR.VIJAY R M","timings":"06:30 PM TO 07:30 PM","qualification":"MBBS, MD, DM (NEURO PHYSICIAN)","Specialization":"NEUROLOGY"}];
    
});