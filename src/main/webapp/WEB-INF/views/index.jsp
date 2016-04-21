<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html ng-app="webShopApp">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script> -->

<spring:url value="/resources/lib/angular/angular.js" var="angularJS" />
<spring:url value="/resources/lib/angular/angular-route.js" var="angularRouteJS" />
<spring:url value="/resources/js/app.js" var="appJS" />
<spring:url value="/resources/js/directives/loginDirective.js" var="loginDirectiveJS" />
<spring:url value="/resources/js/directives/userDirective.js" var="userDirectiveJS" />
<spring:url value="/resources/js/controllers/loginCtrl.js" var="loginCtrlJS" />
<spring:url value="/resources/js/controllers/userCtrl.js" var="userCtrlJS" />
<spring:url value="/resources/js/controllers/orderCtrl.js" var="orderCtrlJS" />
<spring:url value="/resources/js/services/loginService.js" var="loginServiceJS" />
<spring:url value="/resources/js/services/sessionService.js" var="sessionServiceJS" />
<spring:url value="/resources/js/services/userService.js" var="userServiceJS" />

	
    <spring:url value="/resources/js/directives/homeDirective.js" var="homeDirectiveJS" />
    <spring:url value="/resources/js/controllers/homeCtrl.js" var="homeCtrlJS" />
    <spring:url value="/resources/js/services/homeService.js" var="homeServiceJS" />
     <spring:url value="/resources/js/controllers/cartCtrl.js" var="cartCtrlJS" />
    <spring:url value="/resources/js/services/cartService.js" var="cartServiceJS" />
    <spring:url value="/resources/js/services/orderService.js" var="orderServiceJS" />
    
        <spring:url value="/resources/js/directives/decreaseQuantity.js" var="decreaseQuantityDirectiveJS" />
        <spring:url value="/resources/js/directives/increaseQuantity.js" var="increaseQuantityDirectiveJS" />

<script src="${angularJS}"></script>
<script src="${angularRouteJS}"></script>
<script src="${appJS}"></script>
<script src="${loginDirectiveJS}"></script>
<script src="${userDirectiveJS}"></script>
<script src="${loginCtrlJS}"></script>
<script src="${userCtrlJS}"></script>


<script src="${loginServiceJS}"></script>
<script src="${sessionServiceJS}"></script>
<script src="${userServiceJS}"></script>

    <script src="${decreaseQuantityDirectiveJS}"></script>
     <script src="${increaseQuantityDirectiveJS}"></script>
 
     <script src="${homeDirectiveJS}"></script>
    <script src="${homeCtrlJS}"></script>
     <script src="${homeServiceJS}"></script>
     
       <script src="${cartCtrlJS}"></script>
     <script src="${cartServiceJS}"></script>
     
        
       <script src="${orderCtrlJS}"></script>
     <script src="${orderServiceJS}"></script>
  

</head>
<body>

<div ng-view></div>

</body>
</html>