function openModalWindow() {
	      var modalWindow = window.open("", "_blank", "width=500,height=600,left=400,top=60;");
	      modalWindow.document.write(`
	        <html>
	          <head>
	            <title>popout damge counter</title>
	            <link rel="stylesheet" href="style.css">

	          </head>
	          <body class="dark">
	            <div class="popout container">
		            <div class="popout-content">
		            <h4 class="tp-header">Damage Counter</h4>
			        	<div class="col-lg-12">
			        		<div class="row">
			        			<div class="own ship col-6">
			        				<div class='center text-bt'>
										Our ship:
										<select name='ourShip' class="form-select">
											<option value='sloop'>Sloop</option>
											<option value='cutter'>Cutter</option>
											<option value='dhow'>Dhow</option>
											<option value='fanchuan'>Fanchuan</option>
											<option value='longship'>Longship</option>
											<option value='baghlah'>Baghlah</option>
											<option value='mb'>Merchant Brig</option>
											<option value='junk'>Junk</option>
											<option value='wb'>War Brig</option>
											<option value='mg'>Merchant Galleon</option>
											<option value='wg'>War Galleon</option>
											<option value='xebec'>Xebec</option>
											<option value='wf'>War Frigate</option>
											<option value='gf'>Grand Frigate</option>
										</select>
									</div>
									<div class='shipPic'></div>
									<div class='shipInfo'>
										Shots to max/sink: <span id='ownHealth'>6</span> / <span id='ownSinkHealth'>10</span>
									</div>
									<div class='buttons left-btn pop-btn'>
										<button name='weGotHit btn'>Got Shot</button>
										<button name='weHitRocks btn'>Hit Rocks/Edge</button>
									</div>
			        			</div>
			        			<div class="opponent col-6">
			        				<div class='center text-bt'>
										Their ship:
										<select name='theirShip' class="form-select">
											<option value='sloop'>Sloop</option>
											<option value='cutter'>Cutter</option>
											<option value='dhow'>Dhow</option>
											<option value='fanchuan'>Fanchuan</option>
											<option value='longship'>Longship</option>
											<option value='baghlah'>Baghlah</option>
											<option value='mb'>Merchant Brig</option>
											<option value='junk'>Junk</option>
											<option value='wb'>War Brig</option>
											<option value='mg'>Merchant Galleon</option>
											<option value='wg'>War Galleon</option>
											<option value='xebec'>Xebec</option>
											<option value='wf'>War Frigate</option>
											<option value='gf'>Grand Frigate</option>
										</select>
									</div>
									<div class='shipPic'></div>
									<div class='shipInfo'>
										Shots to max/sink: <span id='theirHealth'>6</span> / <span id='theirSinkHealth'>10</span>
									</div>
									<div class='buttons right-btn'>
										<button name='theyGotHit' class="btn">Got Shot</button>
										<button name='theyHitRocks' class="btn">Hit Rocks/Edge</button>
									</div>
			        			</div>
			        			<div class="mid col-12">
			        				<div style="font-size: 40px; font-weight: 700;" class="">VS</div>
									<div class='scores'>
										<div>Score: <span id='score'><span id='ourScore'>0</span> - <span id='theirScore'>0</span></span></div>
										<div>SF Rows: <span id='rows'><span id='ourRows'>0</span> - <span id='theirRows'>0</span></span></div>
										<button id="copyScore" class="btn btn-1 mt-1">Copy Score</button>
										<button id="copyBoth" class="btn btn-2 my-2">Copy Score & Rows</button>

									</div>
									<div class="btn-b">
										<button name='collision' class="btn">Collision</button>
										<button name='reset' class="btn">Reset</button>
									</div>
									<button id="closePopup" class="btn btn-c" onclick="window.close()">
										Close
									</button>
			        			</div>
			        		</div>

			        	</div>
			        	
		        	</div>
		        </div>
		        <script src="js/d-dark.js"></script>
	          </body>
	        </html>
	      `);
	    }