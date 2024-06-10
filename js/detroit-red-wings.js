window.onload = function() {
    var ctx = document.getElementById('myChart');
    ctx.height = 600; // Set the height as needed
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [{x: '2023-10-14', y: 1465.6365063035994}, {x: '2023-10-16', y: 1472.0299561263264}, {x: '2023-10-18', y: 1476.7822612549014}, {x: '2023-10-21', y: 1482.4502458405243}, {x: '2023-10-22', y: 1487.4949179582325}, {x: '2023-10-24', y: 1484.4164308432942}, {x: '2023-10-26', y: 1479.272505852792}, {x: '2023-10-28', y: 1476.3699281467464}, {x: '2023-10-30', y: 1479.454913783065}, {x: '2023-11-02', y: 1475.729208021135}, {x: '2023-11-04', y: 1478.3995728730351}, {x: '2023-11-07', y: 1476.0317321470552}, {x: '2023-11-09', y: 1473.001053695111}, {x: '2023-11-11', y: 1474.9775877196284}, {x: '2023-11-16', y: 1472.6544932605707}, {x: '2023-11-17', y: 1470.7201244337896}, {x: '2023-11-22', y: 1475.0292091683866}, {x: '2023-11-24', y: 1481.8904193749909}, {x: '2023-11-26', y: 1486.0547345730442}, {x: '2023-11-29', y: 1484.5547155782851}, {x: '2023-11-30', y: 1488.3874148223576}, {x: '2023-12-02', y: 1490.8921654064752}, {x: '2023-12-05', y: 1495.0840340765149}, {x: '2023-12-07', y: 1491.7201827845597}, {x: '2023-12-09', y: 1485.4932554703444}, {x: '2023-12-11', y: 1482.1226787795176}, {x: '2023-12-12', y: 1486.9928119109304}, {x: '2023-12-14', y: 1484.5705289542573}, {x: '2023-12-16', y: 1482.5718813102185}, {x: '2023-12-18', y: 1479.4837032994851}, {x: '2023-12-20', y: 1476.3548350285191}, {x: '2023-12-22', y: 1478.4636368101203}, {x: '2023-12-23', y: 1476.3528797536037}, {x: '2023-12-27', y: 1473.16657021295}, {x: '2023-12-29', y: 1475.4724541093974}, {x: '2023-12-31', y: 1471.9511812575208}, {x: '2024-01-02', y: 1475.6338046659275}, {x: '2024-01-04', y: 1478.934932860435}, {x: '2024-01-07', y: 1481.4258205577664}, {x: '2024-01-11', y: 1479.1213896182976}, {x: '2024-01-13', y: 1482.8421218193066}, {x: '2024-01-14', y: 1487.99367856433}, {x: '2024-01-17', y: 1491.4344540471989}, {x: '2024-01-19', y: 1488.9022684661093}, {x: '2024-01-21', y: 1491.344177062557}, {x: '2024-01-23', y: 1488.8628146936474}, {x: '2024-01-25', y: 1492.679223013107}, {x: '2024-01-27', y: 1497.227401438474}, {x: '2024-01-31', y: 1494.1523853711226}, {x: '2024-02-10', y: 1496.7144204458857}, {x: '2024-02-13', y: 1493.3449397652348}, {x: '2024-02-15', y: 1490.4448131435463}, {x: '2024-02-17', y: 1497.5648013589207}, {x: '2024-02-19', y: 1500.196122653744}, {x: '2024-02-22', y: 1502.7809694099133}, {x: '2024-02-24', y: 1507.829927804387}, {x: '2024-02-25', y: 1509.7531914591991}, {x: '2024-02-27', y: 1514.192176214262}, {x: '2024-02-29', y: 1509.2344882679552}, {x: '2024-03-02', y: 1504.513915818166}, {x: '2024-03-06', y: 1500.880511779878}, {x: '2024-03-08', y: 1495.4900312213076}, {x: '2024-03-09', y: 1492.497862032022}, {x: '2024-03-12', y: 1488.018290064753}, {x: '2024-03-14', y: 1481.7967556667957}, {x: '2024-03-16', y: 1485.8305903707835}, {x: '2024-03-17', y: 1482.0864341667875}, {x: '2024-03-19', y: 1483.7967902338949}, {x: '2024-03-21', y: 1487.6418482871156}, {x: '2024-03-23', y: 1486.026702973567}, {x: '2024-03-26', y: 1484.143823260601}, {x: '2024-03-28', y: 1481.1869441920717}, {x: '2024-03-30', y: 1479.8389679132083}, {x: '2024-04-01', y: 1485.3082790344436}, {x: '2024-04-05', y: 1483.2189041584184}, {x: '2024-04-07', y: 1486.5545211893982}, {x: '2024-04-09', y: 1483.713745184728}, {x: '2024-04-11', y: 1481.9018917509711}, {x: '2024-04-13', y: 1485.3949798809}, {x: '2024-04-15', y: 1487.0560287844835}, {x: '2024-04-16', y: 1489.4479895022166}],
                borderColor: '#3935DA',
                fill: false,
                pointRadius: 0,
                borderWidth: 2 // Adjust as needed
            },
            {
                label: 'Min',
                data: [{x: '2023-10-14', y: 1458.7816769817323}, {x: '2023-10-16', y: 1458.7816769817323}, {x: '2023-10-18', y: 1455.3831182419888}, {x: '2023-10-21', y: 1449.1220419021545}, {x: '2023-10-22', y: 1449.1220419021545}, {x: '2023-10-24', y: 1446.87056852046}, {x: '2023-10-26', y: 1443.5182136519763}, {x: '2023-10-28', y: 1440.850702784126}, {x: '2023-10-30', y: 1438.4355316085198}, {x: '2023-11-02', y: 1432.4227289413968}, {x: '2023-11-04', y: 1426.5125570078048}, {x: '2023-11-07', y: 1428.7776569170198}, {x: '2023-11-09', y: 1431.3878590386428}, {x: '2023-11-11', y: 1428.4253399295633}, {x: '2023-11-16', y: 1428.6068214051284}, {x: '2023-11-17', y: 1428.6068214051284}, {x: '2023-11-22', y: 1422.0673791819768}, {x: '2023-11-24', y: 1419.470536406789}, {x: '2023-11-26', y: 1422.465215802711}, {x: '2023-11-29', y: 1425.2335956694112}, {x: '2023-11-30', y: 1422.9504781688645}, {x: '2023-12-02', y: 1429.1388851146744}, {x: '2023-12-05', y: 1431.4087832541493}, {x: '2023-12-07', y: 1434.7726345461049}, {x: '2023-12-09', y: 1434.7726345461049}, {x: '2023-12-11', y: 1433.5130035561965}, {x: '2023-12-12', y: 1436.2982159694657}, {x: '2023-12-14', y: 1435.5593150652985}, {x: '2023-12-16', y: 1434.5190976337649}, {x: '2023-12-18', y: 1431.992839508311}, {x: '2023-12-20', y: 1428.1976560163328}, {x: '2023-12-22', y: 1423.5455548191892}, {x: '2023-12-23', y: 1421.262961340892}, {x: '2023-12-27', y: 1418.6237538293117}, {x: '2023-12-29', y: 1414.0166668147829}, {x: '2023-12-31', y: 1412.371249961787}, {x: '2024-01-02', y: 1408.6886265533803}, {x: '2024-01-04', y: 1406.9439447508305}, {x: '2024-01-07', y: 1403.4833193418085}, {x: '2024-01-11', y: 1403.882547438634}, {x: '2024-01-13', y: 1402.2889877584314}, {x: '2024-01-14', y: 1402.2889877584314}, {x: '2024-01-17', y: 1397.480932804766}, {x: '2024-01-19', y: 1397.480932804766}, {x: '2024-01-21', y: 1401.1542151272208}, {x: '2024-01-23', y: 1408.1606102998394}, {x: '2024-01-25', y: 1408.1606102998394}, {x: '2024-01-27', y: 1403.8121044860495}, {x: '2024-01-31', y: 1406.05279339158}, {x: '2024-02-10', y: 1405.5502382583818}, {x: '2024-02-13', y: 1403.0063000065948}, {x: '2024-02-15', y: 1399.3409606049936}, {x: '2024-02-17', y: 1401.9365619773191}, {x: '2024-02-19', y: 1399.994891071644}, {x: '2024-02-22', y: 1396.626009644974}, {x: '2024-02-24', y: 1394.964647753132}, {x: '2024-02-25', y: 1393.0413840983194}, {x: '2024-02-27', y: 1393.0413840983194}, {x: '2024-02-29', y: 1389.5777775098718}, {x: '2024-03-02', y: 1384.9494483821034}, {x: '2024-03-06', y: 1389.1008403173776}, {x: '2024-03-08', y: 1384.403919832391}, {x: '2024-03-09', y: 1386.8499882286212}, {x: '2024-03-12', y: 1385.6949345470537}, {x: '2024-03-14', y: 1383.2593573354457}, {x: '2024-03-16', y: 1380.739220534351}, {x: '2024-03-17', y: 1377.04502132716}, {x: '2024-03-19', y: 1374.5141585474014}, {x: '2024-03-21', y: 1371.6434015898162}, {x: '2024-03-23', y: 1368.9639189013462}, {x: '2024-03-26', y: 1366.208590382665}, {x: '2024-03-28', y: 1364.558329245743}, {x: '2024-03-30', y: 1373.4805212134331}, {x: '2024-04-01', y: 1370.0795316912158}, {x: '2024-04-05', y: 1368.4480005323287}, {x: '2024-04-07', y: 1367.546665772972}, {x: '2024-04-09', y: 1365.6988139723182}, {x: '2024-04-11', y: 1371.457717342057}, {x: '2024-04-13', y: 1367.6720280060074}, {x: '2024-04-15', y: 1365.4750193490097}, {x: '2024-04-16', y: 1365.4750193490097}],
                borderColor: 'gray',
                fill: '+1',
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            },
            {
                label: 'Max',
                data: [{x: '2023-10-14', y: 1573.1145356765671}, {x: '2023-10-16', y: 1573.1145356765671}, {x: '2023-10-18', y: 1576.797550245593}, {x: '2023-10-21', y: 1582.3185724194468}, {x: '2023-10-22', y: 1582.3185724194468}, {x: '2023-10-24', y: 1586.5187478873129}, {x: '2023-10-26', y: 1580.9822141439151}, {x: '2023-10-28', y: 1580.9822141439151}, {x: '2023-10-30', y: 1574.7318443578088}, {x: '2023-11-02', y: 1577.9400838009683}, {x: '2023-11-04', y: 1572.0190026519558}, {x: '2023-11-07', y: 1574.608225035515}, {x: '2023-11-09', y: 1570.8114184636552}, {x: '2023-11-11', y: 1562.8394521334708}, {x: '2023-11-16', y: 1570.5998045195497}, {x: '2023-11-17', y: 1570.5998045195497}, {x: '2023-11-22', y: 1576.0886593624937}, {x: '2023-11-24', y: 1578.329318289248}, {x: '2023-11-26', y: 1580.779656627037}, {x: '2023-11-29', y: 1584.098874432398}, {x: '2023-11-30', y: 1581.15247912534}, {x: '2023-12-02', y: 1578.0894648310152}, {x: '2023-12-05', y: 1574.815541945317}, {x: '2023-12-07', y: 1569.6267545513497}, {x: '2023-12-09', y: 1562.782671256339}, {x: '2023-12-11', y: 1564.3817270249915}, {x: '2023-12-12', y: 1564.3817270249915}, {x: '2023-12-14', y: 1567.367765859865}, {x: '2023-12-16', y: 1562.4131408659798}, {x: '2023-12-18', y: 1564.939398991434}, {x: '2023-12-20', y: 1561.8471437101816}, {x: '2023-12-22', y: 1564.0843729432786}, {x: '2023-12-23', y: 1566.8323847480274}, {x: '2023-12-27', y: 1564.0966901102377}, {x: '2023-12-29', y: 1566.5536160892354}, {x: '2023-12-31', y: 1568.1990329422313}, {x: '2024-01-02', y: 1569.7132271077653}, {x: '2024-01-04', y: 1572.2043254871442}, {x: '2024-01-07', y: 1565.8689661788476}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1575.155768260886}, {x: '2024-01-14', y: 1575.155768260886}, {x: '2024-01-17', y: 1575.8077181915182}, {x: '2024-01-19', y: 1571.6343423560108}, {x: '2024-01-21', y: 1575.9105742257798}, {x: '2024-01-23', y: 1575.9105742257798}, {x: '2024-01-25', y: 1578.9961786362512}, {x: '2024-01-27', y: 1582.3017162814915}, {x: '2024-01-31', y: 1582.3017162814915}, {x: '2024-02-10', y: 1567.958326302683}, {x: '2024-02-13', y: 1570.8525347990835}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-19', y: 1583.9496307792117}, {x: '2024-02-22', y: 1583.0288510072005}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-25', y: 1584.4139901831666}, {x: '2024-02-27', y: 1585.7405503202606}, {x: '2024-02-29', y: 1586.780808646069}, {x: '2024-03-02', y: 1591.5013810958585}, {x: '2024-03-06', y: 1598.4959195277142}, {x: '2024-03-08', y: 1594.7289907624272}, {x: '2024-03-09', y: 1598.0468452941464}, {x: '2024-03-12', y: 1600.4754503268423}, {x: '2024-03-14', y: 1595.554309546796}, {x: '2024-03-16', y: 1590.3421021208007}, {x: '2024-03-17', y: 1590.3421021208007}, {x: '2024-03-19', y: 1590.3421021208007}, {x: '2024-03-21', y: 1587.674376440522}, {x: '2024-03-23', y: 1590.1489757647437}, {x: '2024-03-26', y: 1587.3519217093096}, {x: '2024-03-28', y: 1584.4219884482818}, {x: '2024-03-30', y: 1587.6814346903532}, {x: '2024-04-01', y: 1583.8879590284926}, {x: '2024-04-05', y: 1581.006440830973}, {x: '2024-04-07', y: 1582.2852956901113}, {x: '2024-04-09', y: 1587.345940400775}, {x: '2024-04-11', y: 1587.345940400775}, {x: '2024-04-13', y: 1591.6357295419066}, {x: '2024-04-15', y: 1593.7563011587822}, {x: '2024-04-16', y: 1587.2988847176175}],
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