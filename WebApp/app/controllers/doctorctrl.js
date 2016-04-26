newapp.controller('doctorController', function($scope,$interval,$location,$window,$routeParams,$http,$rootScope,Utils) {
	
	console.log("doctorController created");

	var  form = $('.form'),
	 cache_width = form.width(),
	 a4  =[ 595.28,  841.89];  // for a4 size paper width and height

	$scope.doctorList = [{"sno":1,name:"Dr. KRISHNA MOHAN NAI","timings":"10:30 AM TO 01:30 PM","qualification":"MBBS, M.D, DM","Specialization":"CARDIOLOGY"},
	{"sno":2,name:"Dr. DINESH KUMAR G R","timings":"10:00 AM TO 01:30 PM","qualification":"MBBS, MS (Gen.Surgery), FMAS","Specialization":"GENERAL SURGERY"},
	{"sno":3,name:"Dr. MANAS S N","timings":"10:30 AM TO 01:30 PM","qualification":"MBBS, M.D DERMATOLOGY","Specialization":"DERMATOLOGY"},
	{"sno":4,name:"Dr. PAYAL RANKA","timings":"6:30 PM TO 9:30 PM","qualification":"MBBS, MD","Specialization":"DERMATOLOGY"},
	{"sno":5,name:"DR.CHANDRASHEKAR G","timings":"10:30 AM TO 01:30 PM","qualification":"MBBS","Specialization":"GENERAL PHYSICIAN"},
	{"sno":6,name:"DR.DEEPAK M K","timings":"10:30 AM TO 01:30 PM","qualification":" MBBS, MS, Fellowship in Orthoplasty","Specialization":"ORTHOPAEDICS"},
	{"sno":7,name:"Dr. HARINATH BELLAMKONDA","timings":"06:30 PM TO 07:30 PM","qualification":" M.S. (Ortho Peadician)","Specialization":"ORTHOPAEDICS"},
	{"sno":8,name:"DR.SOMANATH VASUDEVA","timings":"08:45 AM TO 09:30 AM & 03:00 PM TO 03:30 PM","qualification":"MBBS, MD, DM (NEURO PHYSICIAN)","Specialization":"NEUROLOGY"},
	{"sno":9,name:"DR.VIJAY R M","timings":"06:30 PM TO 07:30 PM","qualification":"MBBS, MD, DM (NEURO PHYSICIAN)","Specialization":"NEUROLOGY"}];


	//alert(Utils.test());
	$scope.editData={};

	$scope.editDocter=function(index){
		console.log($scope.doctorList[index]);
		$scope.editData=$scope.doctorList[index];
	};

	$scope.removeDocter=function(index){
		console.log($scope.doctorList[index]);
		$scope.doctorList.splice(index,1);
	};


	$scope.createPDF = function() {

		alert("Create PDF");

		$scope.getCanvas().then(function(canvas){
		  var 
		  img = canvas.toDataURL("image/png"),
		  doc = new jsPDF({
		          unit:'px', 
		          format:'a4'
		        });     
		        doc.addImage(img, 'JPEG', 20, 20);
		        doc.save('techumber-html-to-pdf.pdf');
		        form.width(cache_width);
		 });

	};

	$scope.getCanvas = function() {

		alert("fani");
		 form.width((a4[0]*1.33333) -80).css('max-width','none');
		 	return html2canvas(form,{
		     	imageTimeout:2000,
		     	removeContainer:true
		    }); 
	};
    

    /*
	
		function demoFromHTML() {
		    var pdf = new jsPDF('p', 'pt', 'letter');
		    // source can be HTML-formatted string, or a reference
		    // to an actual DOM element from which the text will be scraped.
		    source = $('#customers')[0];

		    // we support special element handlers. Register them with jQuery-style 
		    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
		    // There is no support for any other type of selectors 
		    // (class, of compound) at this time.
		    specialElementHandlers = {
		        // element with id of "bypass" - jQuery style selector
		        '#bypassme': function (element, renderer) {
		            // true = "handled elsewhere, bypass text extraction"
		            return true
		        }
		    };
		    margins = {
		        top: 80,
		        bottom: 60,
		        left: 40,
		        width: 522
		    };
		    // all coords and widths are in jsPDF instance's declared units
		    // 'inches' in this case
		    pdf.fromHTML(
		    source, // HTML string or DOM elem ref.
		    margins.left, // x coord
		    margins.top, { // y coord
		        'width': margins.width, // max width of content on PDF
		        'elementHandlers': specialElementHandlers
		    },

		    function (dispose) {
		        // dispose: object with X, Y of the last line add to the PDF 
		        //          this allow the insertion of new lines after html
		        pdf.save('Test.pdf');
		    }, margins);
		}

    */

});