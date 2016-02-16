<!DOCTYPE html>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script type="text/javascript" src="validation.js" /></script>
		<link type="text/css" rel="stylesheet" href="style.css" />
	</head>
	<body>
		<form action="process.php" method="post" id="myForm" />
			<fieldset>
				<label for="first_name">First Name:<br></label>
				<input type="text" name="first_name" id="first_name" /><br>
				<label for="last_name">Last Name:<br></label>
				<input type="text" name="last_name" id="last_name"/><br>
				<label for="email">Email:<br></label>
				<input type="text" name="email" id="email"/><br>
				<label for="address">Address:<br></label>
				<input type="text" name="address" id="address"/><br>
				<label for="city">City:<br></label>
				<input type="text" name="city" id="city"/><br>
				<label for="state">State:<br></label>
				<select name="state" id="state">
					<option></option>
					<option value="AL">Alabama</option>
					<option value="AK">Alaska</option>
					<option value="AZ">Arizona</option>
					<option value="AR">Arkansas</option>
					<option value="CA">California</option>
					<option value="CO">Colorado</option>
					<option value="CT">Connecticut</option>
					<option value="DE">Delaware</option>
					<option value="DC">District Of Columbia</option>
					<option value="FL">Florida</option>
					<option value="GA">Georgia</option>
					<option value="HI">Hawaii</option>
					<option value="ID">Idaho</option>
					<option value="IL">Illinois</option>
					<option value="IN">Indiana</option>
					<option value="IA">Iowa</option>
					<option value="KS">Kansas</option>
					<option value="KY">Kentucky</option>
					<option value="LA">Louisiana</option>
					<option value="ME">Maine</option>
					<option value="MD">Maryland</option>
					<option value="MA">Massachusetts</option>
					<option value="MI">Michigan</option>
					<option value="MN">Minnesota</option>
					<option value="MS">Mississippi</option>
					<option value="MO">Missouri</option>
					<option value="MT">Montana</option>
					<option value="NE">Nebraska</option>
					<option value="NV">Nevada</option>
					<option value="NH">New Hampshire</option>
					<option value="NJ">New Jersey</option>
					<option value="NM">New Mexico</option>
					<option value="NY">New York</option>
					<option value="NC">North Carolina</option>
					<option value="ND">North Dakota</option>
					<option value="OH">Ohio</option>
					<option value="OK">Oklahoma</option>
					<option value="OR">Oregon</option>
					<option value="PA">Pennsylvania</option>
					<option value="RI">Rhode Island</option>
					<option value="SC">South Carolina</option>
					<option value="SD">South Dakota</option>
					<option value="TN">Tennessee</option>
					<option value="TX">Texas</option>
					<option value="UT">Utah</option>
					<option value="VT">Vermont</option>
					<option value="VA">Virginia</option>
					<option value="WA">Washington</option>
					<option value="WV">West Virginia</option>
					<option value="WI">Wisconsin</option>
					<option value="WY">Wyoming</option>
				</select><br>				
				<label for="zip">Zip Code:<br></label>
				<input type="text" name="zip" id="zip"/><br>
				<label for="phone">Phone Number:<br></label>
				<input type="text" name="phone" id="phone" /><br><br>
				<input type="submit" value="Submit" id="submit_button" />
			</fieldset>
		</form>
	</body>
</html>