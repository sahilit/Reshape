<!doctype html>
<html lang="en">
	<head>
		<!-- Required meta tags -->
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>BMI Calculator</title>

		<?php include "include/css.php" ?>
	</head>
	<body>
	
		<?php include "include/navbar.php" ?>
	
		<div class="container">
		  <div class="row">
			<div class="col-md-12">
			  <div class="bmi-calculator">
				<div class="result">
				  <div class="result-text"> 
					<h1><span id="bmiValue">24.8 </span>kg/m2</h1><small id="bmid">Normal</small>
				  </div>
				</div>
				<div class="calculator">
				  <h2 class="text-center calculator-title">What's Your BMI?</h2>
				  <hr class="calculator-hr"/>
				  <div class="height">
					<input class="value_range" id="height" type="range" value="182" min="100" max="250" step="1"/>
					<div class="label-height field-text">0</div>
				  </div>
				  <div class="weight">
					<input class="value_range" id="weight" type="range" value="82" min="0" max="250" step="1"/>
					<div class="label-weight field-text">0</div>
				  </div>
				  <div class="submit">
					<input class="submit" type="submit" id="submit" value="Calculate"/>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	
	
		<?php include "include/js.php" ?>
		
	</body>
</html>
