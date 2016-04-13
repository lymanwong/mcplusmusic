<!DOCTYPE html>
<html lang="en" ng-app="mcplusmusic">

  <?php include ('./partials/head.php');?>

<body>
<div id="wrapper" class="toggled">
    <?php include ('./partials/sidebar.php'); ?>
<div id="page-content-wrapper">
    <div class="container-fluid">
    <a href="" class="btn btn-default" id="menu-toggle">Menu</a>
        <div class="jumbotron">
          <img src="images/h211.jpg" class="img-responsive center">
        </div>

        <div ng-view></div>
    </div>
</div>
<!-- /#page-content-wrapper -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <script src="//cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"></script>

    <!-- Script to add Angular-->
    <script src="js/angular.min.js"></script>

    <!-- Script to add Angular Routes-->
    <script src="js/angular-route.min.js"></script>

    <!-- <script src="http://connect.soundcloud.com/sdk.js"></script> -->
    <script src="js/main.js"></script>
    <script src="js/scripts.js"></script>
    <!-- <script src="js/sound.js"></script> -->
</body>
</html>
