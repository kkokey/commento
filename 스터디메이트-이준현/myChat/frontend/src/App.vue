<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
      *{
            margin: 0;
            padding: 0;
        }
        html, body {
            width   : 100%;
            height: 100%;
            overflow: auto;
        }
        .navbar {
            padding: 5px 10px;
            display: block;
            border: 1px solid #2d385fd4;
        }
        .navbar > .btn {
            height  : 30px;
            width   : 120px; 
            display : inline-block;
            background-color: #2d385fd4;
            border: 1px solid #2d385fd4;
        }
        .navbar > .btn > a {
            color: white;
            text-decoration: none;
            font-weight:bold;
        }
        .navbar > .btn:last-child {
            float   : right;
        }
        .container {       
            border-top: none;
            min-width: 450px;
            height: auto;
            padding-top : 150px;
        }
        .joinBtn {
            display: block;
            border: 1px solid #2d385fd4;
        }

        .wrap {
            margin: 0 auto;
            width: 50%;
        }
        .longinFrm {
            position: relative;
            margin-bottom: 30px;
            height: 40%;
            border: 1px solid #2d385fd4;
            padding: 10px 15px;
            min-width: 300px;
            min-height: 200px;
        }

        .longinFrm > h3, label {
            color: #2d385fd4;
            margin-right: 20px;
            margin-bottom: 20px;
        }
        .joinWrap {
            text-align: center;
            display: block;
            min-width: 330px;
        }
        .joinBtn {
            display: block;
            padding-top: 30px;
            padding-bottom: 5px;
            text-decoration: none;
            color: #2d385fd4;
            font-weight:bold;
            width: 100%;
        }
        .txtb {
            margin-bottom  : 20px;
        }
        .txtb > input {
            float: right;
            width : 70%;
            overflow: hidden;
            border: none;
            border-bottom: 1px solid #2d385fd4;
        }
        .bottomWrap > input {
            height: 30px;
            margin-bottom: 10px;
            background-color: white;
            border: 1px solid #2d385fd4;
            width : 100%;
            display: block;
        }
        .bottomWrap {
            display: block;
            position: absolute; 
            right: 10px; 
            bottom: 10px
        }
        .bottomWrap > a{
            color: #2d385fd4;
        } 
</style>
