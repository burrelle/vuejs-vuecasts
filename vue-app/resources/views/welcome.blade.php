<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>
</head>
<body>
    <div id="app">
    	<ul>
			<li v-for="skill in skill">@{{ skill }}</li>
		</ul>
    </div>
    <script src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>
    <script src="/js/app.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>
</html>