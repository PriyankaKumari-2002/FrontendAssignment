# Levitation-Frontend-Task
This is my Task for Levitation ReactJS Frontend Development Internship.

<p align="center">

<h2 align="center">Login and Information Form Submission Portal </h2>
	<h3 align="center">Effortless Access and Data Submission: Simplify Login and Information Form Processes ...<h3>
	<br />

[![Hosted Link ]](https://frontend-assignment-m82m-7pguhtzwb-priyankagrd2018-gmailcom.vercel.app/)
 </p>
			
   												      
  <p align="center">
   .
    <a href="https://frontend-assignment-m82m-7pguhtzwb-priyankagrd2018-gmailcom.vercel.app/"> Project Hosted Demo Link </a>
    ·
    <a href="https://youtu.be/QJ9o6T1rgBw"> Project Video Demo Link </a>
    .
    <a href="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/issues">Report Issues</a>
    ·
    <a href="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/issues"> Suggest/Request Feature</a>
	</p>
</p>

---
## 🔗 Important Links

 👉[Video Demo](https://youtu.be/QJ9o6T1rgBw) <br>
 👉 ## For login, use following credentials: <br>
Email:  levitation@levitation.in <br>
Password: levitation <br> <br>
 
	
## 📋 Project Overview
This project aims to create a comprehensive web application that combines user authentication, form submission, file uploads, and geolocation capture. By implementing a multi-step form with a progress indicator, we ensure a seamless user experience while collecting necessary information. With the integration of APIs and client-side validations, the application maintains data integrity and provides accurate feedback to the users. The goal is to deliver an intuitive and efficient solution that meets the requirements of a modern web application.


## 🔖 Introduction
	
Welcome to my project that aims to create a comprehensive web application with multiple features. The primary focus of this project is to develop a multi-step form with a progress indicator, integrating various functionalities such as user login, forgot password functionality, file uploads, geolocation capture, and API integration. Through this application, users will be able to navigate through different steps, provide their information, and experience a seamless and intuitive form submission process.

Project Objectives:

Create a login page with email field validation and integrate an API for authentication. <br>
Develop a forgot password page to allow users to reset their passwords conveniently. <br>
Design a multi-step form with a progress indicator for a seamless user experience. <br>
Implement client-side validation for form fields to ensure data integrity. <br>
Integrate an API to handle form submissions and provide appropriate responses. <br>
Enable file uploads, including both single-file upload and multi-file upload functionality. <br>
Automatically capture geolocation during a specific step and display the status accordingly. <br>
Enhance the application's visual appeal and user experience through well-designed interfaces. <br>



![GIF demo](https://github.com/PriyankaKumari-2002/micro-MediDetect-age-Microsoft-Engage-22/blob/master/Engage22Project-GIF.gif)

## 💡Features
	
👩‍💻 ** Page 1: Login Page with Email Field Validation and API Integration**  <br>
1.1 Create a login page form. <br>
1.2 Add an email field to the form and apply email validation to ensure the correct email format is entered. <br>
1.3 Integrate an API for handling the login functionality. <br>
1.4 Handle the API response for successful login and display an appropriate success message. <br>
1.5 Handle the API response for failed login and display an appropriate error message. <br>
1.6 If the login is successful, redirect the user to the form page. <br>

 👩‍💻 **Page 2: Forgot Password Page (No API Integration)** <br>
2.1 Create a forgot password page form. <br>
2.2 Add an email field to the form for users to enter their registered email address. <br>
2.3 Implement client-side validation to ensure the email is entered and in the correct format. <br>
2.4 Provide a way for users to submit the form. <br>
2.5 On form submission, validate the email and display a success message indicating that the password reset instructions will be sent to the email address provided, which will be OTP. <br>
2.6 Option to enter 6 digit OTP appears <br>
2.7 Verification of OTP. <br>

 👩‍💻  **Page 3: Multi-Step Form with Progress Indicator, API Integration, and Geolocation** <br>
3.1 Create a multi-step form with progress indicator structure. <br>
3.2 Divide the form into five steps: Basic Details, Address, File Upload, Multi File Upload, and Status. <br>
3.2.1 **Step 1: Basic Details** <br>
(i) Add fields for user's name, email, and phone number. <br>
(ii) Implement client-side validation for each field. <br>
(iii) Display error messages if any field is invalid or incomplete. <br>
3.2.2 **Step 2: Address** <br>
(i) Add fields for address details, including address lines, city, state, pincode, and country. <br>
(ii) Include a dropdown for the country code, with the Indian flag as the default. <br>
(iii) Implement client-side validation for each field. <br>
(iv) Display error messages if any field is invalid or incomplete. <br>
3.2.3 **Step 3: File Upload** <br>
(i) Add a file upload field that accepts PNG and PDF file types. <br>
(ii) Limit the upload to a single file. <br>
(iii) Display error messages if the file type or upload limit is not met. <br>
3.2.4 **Step 4: Multi File Upload** <br>
(i) Add a file upload field that accepts PNG and PDF file types. <br>
(ii) Limit the upload to a maximum of five files. <br>
(iii) Display error messages if the file types or upload limit are not met. <br>
(iv) Implement geolocation capture during this step, displaying the capture process and updating the status upon successful capture of coordinates. <br>
3.2.5 **Step 5: Status** <br>
(i) Display a relevant message indicating the successful submission of the form or any errors encountered during the process. <br>
(ii) Integrate an API to handle form submission and provide appropriate responses based on the API response. <br>
These steps outline the process for creating the three pages as described. <br>

<br>

## 🧰 Tools and Technologies used

 ## **Frontend:**
● ReactJS <br>
● ViteJS <br>
● Tailwind CSS <br>
● Typescript <br>
● CSS <br>
● Redux <br>

## ⚙️ Instructions for running project locally

1. Clone the repo https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task <br>
2. Download the following packages of ReactJS to run the Project first and then run the command **npm start** in terminal of VS Code . <br>

   "@testing-library/jest-dom": "^5.16.5", <br>
    "@testing-library/react": "^13.4.0", <br>
    "@testing-library/user-event": "^13.5.0", <br>
    "autoprefixer": "^10.4.14", <br>
    "axios": "^1.4.0", <br>
    "postcss": "^8.4.24", <br>
    "react": "^18.2.0", <br>
    "react-dom": "^18.2.0", <br>
    "react-phone-input-2": "^2.15.1", <br>
    "react-router-dom": "^6.14.1", <br>
    "react-scripts": "5.0.1", <br>
    "react-select": "^5.7.3", <br>
    "redux": "^4.2.1", <br>
    "tailwindcss": "^3.3.2", <br>
    "web-vitals": "^2.1.4" <br>
    Use : Email:  levitation@levitation.in <br>
Password: levitation <br> <br>
<p align="left">
<br>
	

## Project Screenshots <br>
## Login Page <br>
Email:  levitation@levitation.in <br>
Password: levitation <br> <br>
   <a href="#">
<img width="916" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/cbbaf826-5eff-46e6-ae68-dd4783a3e1fe"> <br>
## Forgot Password <br>
<img width="917" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/b72437eb-c392-414c-8d29-d813335091ec"> <br>
## Send Otp for Forget Password <br>
<img width="920" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/b8c6b574-9be3-4314-a6a6-c9511d8a9c81"> <br>

## Enter Otp <br>
<img width="916" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/b9071e02-2959-4f71-9075-3a507094eae1"> <br>
## Verify OTP <br>
<img width="918" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/87da8b04-4c74-42a9-9229-361f006de6db"> <br>
## Multi-Step Form <br>
## Step 1 <br>
<img width="919" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/bcb8d055-ff60-4d91-8961-c3e4fe1baf41"> <br>
## Step 2 <br>
<img width="919" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/3dea6241-0355-48d5-86c8-ee94d1c8bdee"> <br>
## Step 3 <br>
<img width="908" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/48749a9c-00a2-4f70-8415-833948a4e1d6"> <br>
## Step 4 <br>
<img width="927" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/18529824-e22d-44ef-9622-d82f949d940c"> <br>
<img width="928" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/5c9f53ff-3f21-4ea2-9d3d-3fcce69d078e"> <br>
## Step 5 <br>
<img width="925" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/9035bd83-73f9-4fac-89e8-d26162c53179"> <br>

## Form Submission <br>
<img width="925" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/bca5d9b4-261f-42d0-b496-5a34d9dc83b0"> <br>






	
</a>

 
 ![GIF demo](https://github.com/PriyankaKumari-2002/micro-MediDetect-age-Microsoft-Engage-22/blob/master/Engage22Project-GIF.gif)




## Contributors

<table>
	<tr align="center">
		<td>
		Priyanka Kumari
		<p align="center">
			<img width="239" alt="image" src="https://github.com/PriyankaKumari-2002/Levitation-Frontend-Task/assets/80983161/31feac14-63ce-40a8-959e-dbecc2edb482">

 
</p>
			<p align="center">
				<a href = "https://github.com/PriyankaKumari-2002">
					<img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
				</a>
				<a href = "https://www.linkedin.com/in/priyanka-kumari-4736b61ba/">
					<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
				</a>
			</p>
		</td>
	</tr>
</table>


<p align="center">
	Made with :heart: by <a href="https://github.com/PriyankaKumari-2002">Priyanka Kumari</a> <br>
	Thank you ! Levitation Team for such a wonderful task ❤️
</p>

