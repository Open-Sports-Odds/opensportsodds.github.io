window.onload = function() {
    var ctx = document.getElementById('myChart');
    ctx.height = 600; // Set the height as needed
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [{x: '2023-10-14', y: 1527.367948343469}, {x: '2023-10-16', y: 1525.2430362878013}, {x: '2023-10-19', y: 1527.6367726400135}, {x: '2023-10-20', y: 1523.814111451591}, {x: '2023-10-22', y: 1518.769439333883}, {x: '2023-10-24', y: 1514.560963593378}, {x: '2023-10-26', y: 1509.356929854884}, {x: '2023-10-29', y: 1505.5184550118636}, {x: '2023-11-01', y: 1502.7796798708264}, {x: '2023-11-04', y: 1507.5913113925528}, {x: '2023-11-07', y: 1510.754227731714}, {x: '2023-11-10', y: 1508.8641316020603}, {x: '2023-11-11', y: 1504.6015353920266}, {x: '2023-11-14', y: 1507.0089256549572}, {x: '2023-11-16', y: 1511.4224481057925}, {x: '2023-11-18', y: 1508.3830947357976}, {x: '2023-11-20', y: 1510.7889430904938}, {x: '2023-11-22', y: 1507.4330097878371}, {x: '2023-11-24', y: 1513.1813617423788}, {x: '2023-11-25', y: 1510.73102340459}, {x: '2023-11-27', y: 1512.931667724228}, {x: '2023-11-30', y: 1515.0614272181358}, {x: '2023-12-02', y: 1512.3829606068275}, {x: '2023-12-05', y: 1506.957954805521}, {x: '2023-12-07', y: 1509.2000696016842}, {x: '2023-12-09', y: 1504.2384499282412}, {x: '2023-12-11', y: 1502.6393941595884}, {x: '2023-12-12', y: 1500.9553553394862}, {x: '2023-12-14', y: 1499.0498536666885}, {x: '2023-12-16', y: 1502.6288463187382}, {x: '2023-12-18', y: 1506.373341813112}, {x: '2023-12-21', y: 1510.9669284464571}, {x: '2023-12-23', y: 1508.0871879498409}, {x: '2023-12-27', y: 1504.7728300013302}, {x: '2023-12-31', y: 1506.6813996630076}, {x: '2024-01-02', y: 1511.3482784008418}, {x: '2024-01-04', y: 1516.7845068066354}, {x: '2024-01-06', y: 1514.490489400855}, {x: '2024-01-07', y: 1511.7067053760331}, {x: '2024-01-09', y: 1514.981848548597}, {x: '2024-01-11', y: 1520.3084747996506}, {x: '2024-01-13', y: 1524.8487921848623}, {x: '2024-01-16', y: 1526.5064564218817}, {x: '2024-01-18', y: 1523.6829453039504}, {x: '2024-01-20', y: 1519.632230274018}, {x: '2024-01-23', y: 1516.7282595785805}, {x: '2024-01-25', y: 1510.0464079128328}, {x: '2024-01-27', y: 1511.3847679969113}, {x: '2024-02-06', y: 1517.7298508315932}, {x: '2024-02-08', y: 1521.6947008072566}, {x: '2024-02-10', y: 1526.5525879908432}, {x: '2024-02-12', y: 1523.6631431256033}, {x: '2024-02-15', y: 1516.362446973379}, {x: '2024-02-17', y: 1509.242458758005}, {x: '2024-02-19', y: 1513.6705042948845}, {x: '2024-02-22', y: 1515.9964966217271}, {x: '2024-02-24', y: 1522.0752705456275}, {x: '2024-02-27', y: 1525.1630865453055}, {x: '2024-03-02', y: 1527.1314179840338}, {x: '2024-03-04', y: 1521.995529814618}, {x: '2024-03-07', y: 1527.6199819923472}, {x: '2024-03-09', y: 1524.302127460628}, {x: '2024-03-10', y: 1520.279690659708}, {x: '2024-03-12', y: 1515.1662901975344}, {x: '2024-03-14', y: 1519.0595489406528}, {x: '2024-03-16', y: 1521.7610449906138}, {x: '2024-03-18', y: 1515.9428607589784}, {x: '2024-03-23', y: 1513.1921967689862}, {x: '2024-03-24', y: 1507.407753687391}, {x: '2024-03-26', y: 1502.748227562354}, {x: '2024-03-28', y: 1499.7925822508216}, {x: '2024-03-30', y: 1503.2994959638154}, {x: '2024-04-02', y: 1497.4800475332763}, {x: '2024-04-04', y: 1494.1842782542958}, {x: '2024-04-06', y: 1490.6513335865775}, {x: '2024-04-09', y: 1492.4991853872311}, {x: '2024-04-11', y: 1489.091886722882}, {x: '2024-04-12', y: 1493.1865597098963}, {x: '2024-04-14', y: 1494.9693219128826}, {x: '2024-04-16', y: 1491.8181174553365}, {x: '2024-04-18', y: 1494.362776478915}],
                borderColor: '#3935DA',
                fill: false,
                pointRadius: 0,
                borderWidth: 2 // Adjust as needed
            },
            {
                label: 'Min',
                data: [{x: '2023-10-14', y: 1458.7816769817323}, {x: '2023-10-16', y: 1458.7816769817323}, {x: '2023-10-19', y: 1452.659948939231}, {x: '2023-10-20', y: 1452.659948939231}, {x: '2023-10-22', y: 1449.1220419021545}, {x: '2023-10-24', y: 1446.87056852046}, {x: '2023-10-26', y: 1443.5182136519763}, {x: '2023-10-29', y: 1438.4355316085198}, {x: '2023-11-01', y: 1438.4355316085198}, {x: '2023-11-04', y: 1426.5125570078048}, {x: '2023-11-07', y: 1428.7776569170198}, {x: '2023-11-10', y: 1428.4253399295633}, {x: '2023-11-11', y: 1428.4253399295633}, {x: '2023-11-14', y: 1422.2182884018691}, {x: '2023-11-16', y: 1428.6068214051284}, {x: '2023-11-18', y: 1428.6068214051284}, {x: '2023-11-20', y: 1426.571077880094}, {x: '2023-11-22', y: 1422.0673791819768}, {x: '2023-11-24', y: 1419.470536406789}, {x: '2023-11-25', y: 1422.465215802711}, {x: '2023-11-27', y: 1425.2335956694112}, {x: '2023-11-30', y: 1422.9504781688645}, {x: '2023-12-02', y: 1429.1388851146744}, {x: '2023-12-05', y: 1431.4087832541493}, {x: '2023-12-07', y: 1434.7726345461049}, {x: '2023-12-09', y: 1434.7726345461049}, {x: '2023-12-11', y: 1433.5130035561965}, {x: '2023-12-12', y: 1436.2982159694657}, {x: '2023-12-14', y: 1435.5593150652985}, {x: '2023-12-16', y: 1434.5190976337649}, {x: '2023-12-18', y: 1431.992839508311}, {x: '2023-12-21', y: 1423.5455548191892}, {x: '2023-12-23', y: 1421.262961340892}, {x: '2023-12-27', y: 1418.6237538293117}, {x: '2023-12-31', y: 1412.371249961787}, {x: '2024-01-02', y: 1408.6886265533803}, {x: '2024-01-04', y: 1406.9439447508305}, {x: '2024-01-06', y: 1403.4833193418085}, {x: '2024-01-07', y: 1403.4833193418085}, {x: '2024-01-09', y: 1400.6622306264292}, {x: '2024-01-11', y: 1403.882547438634}, {x: '2024-01-13', y: 1402.2889877584314}, {x: '2024-01-16', y: 1397.480932804766}, {x: '2024-01-18', y: 1397.480932804766}, {x: '2024-01-20', y: 1401.1542151272208}, {x: '2024-01-23', y: 1408.1606102998394}, {x: '2024-01-25', y: 1408.1606102998394}, {x: '2024-01-27', y: 1403.8121044860495}, {x: '2024-02-06', y: 1406.05279339158}, {x: '2024-02-08', y: 1406.05279339158}, {x: '2024-02-10', y: 1405.5502382583818}, {x: '2024-02-12', y: 1405.5502382583818}, {x: '2024-02-15', y: 1399.3409606049936}, {x: '2024-02-17', y: 1401.9365619773191}, {x: '2024-02-19', y: 1399.994891071644}, {x: '2024-02-22', y: 1396.626009644974}, {x: '2024-02-24', y: 1394.964647753132}, {x: '2024-02-27', y: 1393.0413840983194}, {x: '2024-03-02', y: 1384.9494483821034}, {x: '2024-03-04', y: 1382.845022689217}, {x: '2024-03-07', y: 1384.403919832391}, {x: '2024-03-09', y: 1386.8499882286212}, {x: '2024-03-10', y: 1387.040728952505}, {x: '2024-03-12', y: 1385.6949345470537}, {x: '2024-03-14', y: 1383.2593573354457}, {x: '2024-03-16', y: 1380.739220534351}, {x: '2024-03-18', y: 1377.04502132716}, {x: '2024-03-23', y: 1368.9639189013462}, {x: '2024-03-24', y: 1368.9639189013462}, {x: '2024-03-26', y: 1366.208590382665}, {x: '2024-03-28', y: 1364.558329245743}, {x: '2024-03-30', y: 1373.4805212134331}, {x: '2024-04-02', y: 1370.0795316912158}, {x: '2024-04-04', y: 1368.4480005323287}, {x: '2024-04-06', y: 1371.6671466928703}, {x: '2024-04-09', y: 1365.6988139723182}, {x: '2024-04-11', y: 1371.457717342057}, {x: '2024-04-12', y: 1371.457717342057}, {x: '2024-04-14', y: 1367.6720280060074}, {x: '2024-04-16', y: 1365.4750193490097}, {x: '2024-04-18', y: 1362.930360325431}],
                borderColor: 'gray',
                fill: '+1',
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            },
            {
                label: 'Max',
                data: [{x: '2023-10-14', y: 1573.1145356765671}, {x: '2023-10-16', y: 1573.1145356765671}, {x: '2023-10-19', y: 1579.6078435330344}, {x: '2023-10-20', y: 1579.6078435330344}, {x: '2023-10-22', y: 1582.3185724194468}, {x: '2023-10-24', y: 1586.5187478873129}, {x: '2023-10-26', y: 1580.9822141439151}, {x: '2023-10-29', y: 1574.7318443578088}, {x: '2023-11-01', y: 1577.9400838009683}, {x: '2023-11-04', y: 1572.0190026519558}, {x: '2023-11-07', y: 1574.608225035515}, {x: '2023-11-10', y: 1570.8114184636552}, {x: '2023-11-11', y: 1562.8394521334708}, {x: '2023-11-14', y: 1567.0965368780596}, {x: '2023-11-16', y: 1570.5998045195497}, {x: '2023-11-18', y: 1575.390408374609}, {x: '2023-11-20', y: 1572.7165036342424}, {x: '2023-11-22', y: 1576.0886593624937}, {x: '2023-11-24', y: 1578.329318289248}, {x: '2023-11-25', y: 1580.779656627037}, {x: '2023-11-27', y: 1584.098874432398}, {x: '2023-11-30', y: 1581.15247912534}, {x: '2023-12-02', y: 1578.0894648310152}, {x: '2023-12-05', y: 1574.815541945317}, {x: '2023-12-07', y: 1569.6267545513497}, {x: '2023-12-09', y: 1562.782671256339}, {x: '2023-12-11', y: 1564.3817270249915}, {x: '2023-12-12', y: 1564.3817270249915}, {x: '2023-12-14', y: 1567.367765859865}, {x: '2023-12-16', y: 1562.4131408659798}, {x: '2023-12-18', y: 1564.939398991434}, {x: '2023-12-21', y: 1564.0843729432786}, {x: '2023-12-23', y: 1566.8323847480274}, {x: '2023-12-27', y: 1564.0966901102377}, {x: '2023-12-31', y: 1568.1990329422313}, {x: '2024-01-02', y: 1569.7132271077653}, {x: '2024-01-04', y: 1572.2043254871442}, {x: '2024-01-06', y: 1565.8689661788476}, {x: '2024-01-07', y: 1565.8689661788476}, {x: '2024-01-09', y: 1570.0255069047062}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1575.155768260886}, {x: '2024-01-16', y: 1575.8077181915182}, {x: '2024-01-18', y: 1571.6343423560108}, {x: '2024-01-20', y: 1575.9105742257798}, {x: '2024-01-23', y: 1575.9105742257798}, {x: '2024-01-25', y: 1578.9961786362512}, {x: '2024-01-27', y: 1582.3017162814915}, {x: '2024-02-06', y: 1575.4701401621237}, {x: '2024-02-08', y: 1571.217125580815}, {x: '2024-02-10', y: 1567.958326302683}, {x: '2024-02-12', y: 1567.958326302683}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-19', y: 1583.9496307792117}, {x: '2024-02-22', y: 1583.0288510072005}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-27', y: 1585.7405503202606}, {x: '2024-03-02', y: 1591.5013810958585}, {x: '2024-03-04', y: 1595.596500884628}, {x: '2024-03-07', y: 1594.7289907624272}, {x: '2024-03-09', y: 1598.0468452941464}, {x: '2024-03-10', y: 1598.0468452941464}, {x: '2024-03-12', y: 1600.4754503268423}, {x: '2024-03-14', y: 1595.554309546796}, {x: '2024-03-16', y: 1590.3421021208007}, {x: '2024-03-18', y: 1590.3421021208007}, {x: '2024-03-23', y: 1590.1489757647437}, {x: '2024-03-24', y: 1591.4884892109249}, {x: '2024-03-26', y: 1587.3519217093096}, {x: '2024-03-28', y: 1584.4219884482818}, {x: '2024-03-30', y: 1587.6814346903532}, {x: '2024-04-02', y: 1583.8879590284926}, {x: '2024-04-04', y: 1585.7681563775018}, {x: '2024-04-06', y: 1581.006440830973}, {x: '2024-04-09', y: 1587.345940400775}, {x: '2024-04-11', y: 1587.345940400775}, {x: '2024-04-12', y: 1591.6357295419066}, {x: '2024-04-14', y: 1593.7563011587822}, {x: '2024-04-16', y: 1587.2988847176175}, {x: '2024-04-18', y: 1587.2988847176175}],
                borderColor: 'gray',
                fill: false,
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            }
        ]
        },
        options: {
            hover: {
                mode: null
            },
            animation: false,
            maintainAspectRatio: false, // Add this line
            scales: {
                y: {
                    min: 1300,
                    max: 1700,
                    ticks: {
                        color: 'black',
                        font: {
                            size: 20, // Adjust as needed
                            family:  "Kumbh Sans"
                        },
                        callback: function(value, index, values) {
                            // Display only every other tick
                            if (index % 2 === 0) return value;
                        }
                    }
                },
                x: {

                    type: 'time',
                        time: {
                            unit: 'month'
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                const date = new Date(value);
                                const monthNames = ["January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ];
                                return monthNames[date.getMonth()];
                            },
                            color: 'black',
                        font: {
                            size: 20, // Adjust as needed
                            family:  "Kumbh Sans" // Adjust to match your body font
                        },
                        padding: 20,
                        }
                }
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    display: false
                },
                annotation: {
                    annotations: {
                        line2: {
                            type: 'line',
                            yMin: 1504.7,
                            yMax: 1504.7,
                            borderColor: 'black',
                            borderWidth: 1,
                            label: {
                                content: 'NHL Avg',
                                enabled: true,
                                position: 'center',
                                xAdjust: 70,
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Add this line
                                color: 'black', // Add this line
                                font: {
                                    size: 13, // Adjust as needed
                                    family: "Kumbh Sans", // Adjust to match your body font
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}