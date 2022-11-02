import React from 'react'
import CanvasJSReact from "./canvasjs.react"
import "./HomePage.css"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const HomePage = () => {
  //chart-12
  const options12 = {
    title: {
      text: "Profit/loss in 2021(quarterly)"
    },
    axisY: {
      title: "profit(in million)",
      suffix: "$"
    },
    axisX: {
      title: "Quarters"
    },
    data: [{				
              type: "column",
              dataPoints: [
                  { label: "[April-June]", y: 10  },
                  { label: "[July-September]", y: 20   },
                  { label: "[October-December]", y: 40  },
                  { label: "[January-March]", y: 30 },
              ]
     }],
     animationEnabled:true,
     height:300,
     creditText:  ""//requires paid version
 }
 //chart-11
 const options11={
  animationEnabled: true,
		
			theme: "dark1",
			title:{
				text: "Bounce Rate by Month of Year"
			},
			axisY: {
				title: "Sales Rate",
				suffix: "%"
			},
			axisX: {
				title: "Month of Year",
				prefix: "Month",
				interval: 3
			},
			data: [{
				type: "line",
				toolTipContent: "Month {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 60 },
					{ x: 2, y: 40 },
					{ x: 3, y: 120 },
					{ x: 4, y: 180 },
					{ x: 5, y: 120 },
					{ x: 6, y: 150 },
					{ x: 7, y: 110 },
					{ x: 8, y: 100 },
					{ x: 9, y: 80 },
					{ x: 10, y: 50 },
					{ x: 11, y: 140 },
					{ x: 12, y: 180 },
				]
			}],
      height:160
 }
 //chart-10
 const options10={
  animationEnabled: true,
  title: {
    text: "Revenue"
  },
  data: [{
    type: "pie",
    startAngle: 75,
    toolTipContent: "<b>{label}</b>: {y}%",
    showInLegend: "true",
    legendText: "{label}",
    indexLabelFontSize: 16,
    indexLabel: "{label} - {y}%",
    dataPoints: [
      { y: 65, label: "Sales" },
      { y: 20, label: "Rent" },
      { y: 8, label: "Marketing" },
      { y: 4, label: "Referral" },
      { y: 3, label: "Social" }
    ]
  }],
  height:160
 }
//7-satisfaction
 const options7 = {
  animationEnabled: true,
  title: {
    text: "Customer Satisfaction"
  },
  subtitles: [{
    text: "75% Positive",
    verticalAlign: "center",
    fontSize: 44,
  }],
  data: [{
    type: "doughnut",
    showInLegend: true,
    indexLabel: "{name}: {y}",
    yValueFormatString: "#,###'%'",
    dataPoints: [
      { name: "Unsatisfied", y: 10 },
      { name: "Very Unsatisfied", y: 10 },
      { name: "Very Satisfied", y: 60 },
      { name: "Satisfied", y: 13 },
      { name: "Neutral", y: 7 }
    ]
  }],
  height:250
}
//6-Survey Result
const options6={
  animationEnabled: true,
	title:{
		text: "Survey Result"
	},
	axisY:{
		title: "Response values",
		includeZero: true,
		interval: 10
	},
	toolTip: {
		shared: true
	},
	data: [{
			type: "bar",
			name: "Avg. Score",
			toolTipContent: "<b>{label}</b> <br> <span style=\"color:#4F81BC\">{name}</span>: {y}",
			dataPoints: [
				{ y: 94, label: "Order Accuracy" },
				{ y: 74, label: "Packaging" },
				{ y: 80, label: "Quantity" },
				{ y: 88, label: "Quality" },
				{ y: 76, label: "Delivery" }
			]
		},
		{
			type: "error",
			name: "Variability Range",
			toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} - {y[1]}",
			dataPoints: [
				{ y: [92, 98], label: "Order Accuracy" },
				{ y: [70, 78], label: "Packaging" },
				{ y: [78, 85], label: "Quantity" },
				{ y: [85, 92], label: "Quality" },
				{ y: [72, 78], label: "Delivery" }
			]
	}],
  height:250
}
  return (
    <div className='container-fluid'>
        <header className='d-flex justify-content-between bg-primary p-2 mb-2'>
            <div>
                <h2 className='text-primary text-white '>HR-Management</h2>
            </div>
            <div className='my-2 '>
                <button className='mx-1'><i className="bi bi-facebook"></i></button>
                <button className='mx-1'><i className="bi bi-twitter "></i></button>
                <button className='mx-1'><i className="bi bi-instagram"></i></button>
                <button className='mx-1'><i className="bi bi-youtube "></i></button>
            </div>
        </header>
      <div className='row container-fluid '>
        <div className='col-2 mt-2 bg- '>
            <div className='col-12 ms-4'style={{height:"50px"}}>
                <button className='text-dark btn btn-danger w-75  text-center'>Total Clients</button>
                <span className='text-center text-dark font-italic'>1000</span>
            </div>
            <div className='col-12 ms-4'style={{height:"50px"}}>
                <button className='text-dark btn btn-danger w-75  text-center'>Current Clients</button>
                <span className='text-center text-dark font-italic'>300</span>
            </div>
            <div className='col-12 ms-4'style={{height:"50px"}}>
                <button className='text-dark btn btn-danger w-75  text-center'>New Clients</button>
                <span className='text-center text-dark font-italic'>400</span>
            </div>
            <div className='col-12 ms-4'style={{height:"50px"}}>
                <button className='text-dark btn btn-danger w-75  text-center'>Old Clients</button>
                <span className='text-center text-dark font-italic'>600</span>
            </div>
            <div className='col-12 ms-4'style={{height:"50px"}}>
                <button className='text-dark btn btn-danger w-75  text-center'>Attendence</button>
                <span className='text-center text-dark font-italic'>600</span>
            </div>
            <div className='col-12 ms-4'style={{height:"50px"}}>
                <button className='text-dark btn btn-danger w-75  text-center'>Insurance Claims</button>
                <span className='text-center text-dark font-italic'>400</span>
            </div>
            <div className='col-12 ms-4'style={{height:"50px"}}>
                <button className='text-dark btn btn-danger w-75  text-center'>Payroll released</button>
                <span className='text-center text-dark font-italic'>1000</span>
            </div>
        </div>
        <div className='col-9 ms-4'style={{border:"1px solid black"}}>
        <div className='row p-4'>
         <div className='col-2 ms-4 bg-info'style={{border:"1px solid red",height:"100px"}}>
             <h3 className='text-dark text-center'>Employees</h3>
             <h2 className='text-center text-white font-italic'>200</h2>
         </div>
         <div className='col-2 ms-4 bg-info'style={{border:"1px solid red",height:"100px"}}>
             <h3 className='text-dark text-center'>Contractor</h3>
             <h2 className='text-center text-white font-italic'>100</h2>
         </div>
         <div className='col-2 ms-4 bg-info'style={{border:"1px solid red",height:"100px"}}>
             <h3 className='text-dark text-center'>Vendors</h3>
             <h2 className='text-center text-white font-italic'>100</h2>
         </div>
         <div className='col-2 ms-4 bg-info'style={{border:"1px solid red",height:"100px"}}>
             <h3 className='text-dark text-center'>Others</h3>
             <h2 className='text-center text-white font-italic'>40</h2>
         </div>
         <div className='col-2 ms-4 bg-info'style={{border:"1px solid red",height:"100px"}}>
             <h3 className='text-dark text-center'>Total Jobs</h3>
             <h2 className='text-center text-white font-italic'>1000</h2>
         </div>
        </div>
        <div className='row p-4'>
          <div className='col-4'style={{border:"1px solid red",height:"250px"}}>
          <CanvasJSChart options = {options6}/>
          </div>
          <div className='col-4 mx-4'style={{border:"1px solid red"}}>
          <CanvasJSChart options = {options7}/>
          </div>
          <div className='col-3'>
                <div className='mb-2'style={{border:"1px solid red",height:"120px"}}>
                <div className="progress blue">
                 <span className="progress-left">
                                   <span className="progress-bar"></span>
                 </span>
                 <span className="progress-right">
                                   <span className="progress-bar"></span>
                 </span>
                 <div className="progress-value">90%</div>
                 
               </div>
               <span><h5 className='text-center text-dark'>Active Jobs</h5></span>
                </div>
                <div style={{border:"1px solid red",height:"120px"}}>
                <div className="progress yellow">
                   <span className="progress-right">
                                   <span className="progress-bar"></span>
                   </span>
                   <div className="progress-value">20%</div>
                 </div>
                 <span><h5 className='text-center text-dark'>Attrition rate</h5></span>
                </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
                <div className='mb-2'style={{border:"1px solid red",height:"155px"}}>
                <CanvasJSChart options = {options10}/>
                </div>
                <br/>
                <div style={{border:"1px solid red",height:"155px"}}>
                <CanvasJSChart options = {options11}/>
                </div>
          </div>
          <div className='col-6 ms-4'style={{border:"1px solid red",height:"320px"}}>
          <CanvasJSChart options = {options12}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage