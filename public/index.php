<?php
    session_start();
    unset($_SESSION['user']); // Destruye esta variable de sesion
?>

<!DOCTYPE html>
<html ng-app="loginApp" ng-controller="mainCtrl">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Facturación | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.5 -->
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="AdminLTE.min.css">

  <!-- Importaciones de angular -->
  <script src="angular/lib/angular.min.js"></script>

  <!-- Controladores -->
  <script src="angular/app.js"></script>

  <!-- Servicios -->
  <script src="angular/servicios/login_service.js"></script>

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Facturación</b>FAC</a>
  </div>
  <!-- /.login-logo -->

  <div class="login-box-body">
    <p class="login-box-msg">Ingrese su Usuario</p>

    <form name="forma" ng-submit="ingresar(datos)">

      <div class="form-group has-feedback">
        <input type="text"
               class="form-control"
               placeholder="Usuario"
               name="usuario"
               ng-model="datos.usuario"
               required>
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>

      <div class="form-group has-feedback">
        <input type="password"
               class="form-control"
               placeholder="Contraseña"
               name="contrasena"
               ng-model="datos.contrasena"
               required>
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>

      <div class="row">

        <div class="col-xs-12">
          <button type="submit"
                  class="btn btn-primary btn-block btn-flat"
                  ng-disabled="forma.$invalid || cargando">Ingresar</button>
        </div>
        <!-- /.col -->

        <br /><br />
        <div class="row" ng-show="invalido">
            <div class="col-md-12">
                <div class="alert alert-danger">
                    <strong>Verificar!</strong>
                    {{ mensaje }}
                </div>
            </div>
        </div>

      </div>
    </form>
    <br />
    <!--<pre>
        {{ forma | json }}
    </pre>-->

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

</body>
</html>
